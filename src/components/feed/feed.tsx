import { useCallback, useEffect, useState } from 'react'
import { getImages, ImageDetails } from '../../api/nasaAPODClient'
import Post from '../post/post'
import PostSkeleton from '../post/postSkeleton'
import ErrorWhileFetching from '../errorWhileFetching/errorWhileFetching'

const NUMBER_OF_IMAGES_TO_PULL = 10

export default function Feed() {
  const [images, setImages] = useState<ImageDetails[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [errorWhileFetching, setErrorWhileFetching] = useState(false)

  const pullImages = useCallback(async () => {
    setIsLoading(true)

    try {
      const imagesResult = await getImages({
        count: NUMBER_OF_IMAGES_TO_PULL,
      })

      setImages((images) =>
        images ? images.concat(imagesResult) : imagesResult
      )
    } catch (error) {
      setErrorWhileFetching(true)
    }

    setIsLoading(false)
  }, [])

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !errorWhileFetching &&
      !isLoading
    ) {
      pullImages()
    }
  }, [isLoading, pullImages, errorWhileFetching])

  useEffect(() => {
    pullImages()
  }, [pullImages])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const handleFetchRetry = () => {
    pullImages()
    setErrorWhileFetching(false)
  }

  return (
    <div>
      {images?.map((x, i) => (
        <Post
          key={i}
          imageUrl={x.link}
          title={x.title}
          date={x.date}
          description={x.description}
        />
      ))}
      {isLoading && <PostSkeleton />}
      {errorWhileFetching && <ErrorWhileFetching onClick={handleFetchRetry} />}
    </div>
  )
}
