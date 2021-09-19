import { useCallback, useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getImages, ImageDetails } from '../../api/nasaAPODClient'
import ErrorWhileFetching from '../errorWhileFetching/errorWhileFetching'
import Post from '../post/post'
import PostSkeleton from '../post/postSkeleton'

const NUMBER_OF_IMAGES_TO_PULL = 3

export default function Feed() {
  const [postsList, setPostsList] = useState<ImageDetails[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorWhileFetching, setErrorWhileFetching] = useState(false)

  const pullImages = useCallback(async () => {
    setIsLoading(true)

    try {
      const imagesResult = await getImages({
        count: NUMBER_OF_IMAGES_TO_PULL,
      })

      setPostsList((posts) =>
        posts ? posts.concat(imagesResult) : imagesResult
      )
    } catch (error) {
      setErrorWhileFetching(true)
    }

    setIsLoading(false)
  }, [])

  const handleInfiniteScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight * 0.75 &&
      !errorWhileFetching &&
      !isLoading
    ) {
      pullImages()
    }
  }, [isLoading, pullImages, errorWhileFetching])

  useEffect(() => {
    pullImages()
  }, [pullImages])

  const handleFetchRetry = () => {
    pullImages()
    setErrorWhileFetching(false)
  }

  const listFooter = () => {
    if (isLoading) {
      return <PostSkeleton />
    }

    if (errorWhileFetching) {
      return <ErrorWhileFetching onClick={handleFetchRetry} />
    }

    return <></>
  }

  return (
    <Virtuoso
      isScrolling={handleInfiniteScroll}
      data={postsList}
      itemContent={(index, post) => {
        return <Post data={post} />
      }}
      useWindowScroll
      components={{
        Footer: listFooter,
      }}
    />
  )
}
