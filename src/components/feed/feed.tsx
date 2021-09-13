import { useEffect, useState } from 'react'
import { getImages, ImageDetails } from '../../api/nasaAPODClient'
import Post from '../post/post'
import PostSkeleton from '../post/postSkeleton'
import ErrorWhileFetching from '../errorWhileFetching/errorWhileFetching'

const NUMBER_OF_IMAGES_TO_PULL = 10

export default function Feed() {
  const [images, setImages] = useState<ImageDetails[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [errorWhileFetching, setErrorWhileFetching] = useState(false)

  useEffect(() => {
    const fetchMoreImages = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !errorWhileFetching
      ) {
        setIsLoading(true)
      }
    }

    window.addEventListener('scroll', fetchMoreImages)
    return () => {
      window.removeEventListener('scroll', fetchMoreImages)
    }
  }, [errorWhileFetching])

  useEffect(() => {
    async function pullImages() {
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
    }

    if (isLoading) {
      pullImages()
    }
  }, [isLoading])

  const handleFetchRetry = () => {
    setIsLoading(true)
    setErrorWhileFetching(false)
  }

  return (
    <div>
      {images?.map((x, i) => (
        <Post
          key={i}
          image={x.link}
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
