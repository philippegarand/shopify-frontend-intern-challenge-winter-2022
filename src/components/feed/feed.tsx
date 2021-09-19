import { useCallback, useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getPosts, PostDetails } from '../../api/nasaAPODClient'
import ErrorWhileFetching from '../errorWhileFetching/errorWhileFetching'
import Post from '../post/post'
import PostSkeleton from '../post/postSkeleton'

const NUMBER_OF_POSTS_TO_PULL = 5

export default function Feed() {
  const [postsList, setPostsList] = useState<PostDetails[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorWhileFetching, setErrorWhileFetching] = useState(false)

  const pullImages = useCallback(async () => {
    setIsLoading(true)

    try {
      const imagesResult = await getPosts({
        count: NUMBER_OF_POSTS_TO_PULL,
      })

      setPostsList((posts) =>
        posts ? posts.concat(imagesResult) : imagesResult
      )
    } catch (error) {
      setErrorWhileFetching(true)
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    pullImages()
  }, [pullImages])

  const handleFetchRetry = () => {
    pullImages()
    setErrorWhileFetching(false)
  }

  const feedFooter = () => {
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
      endReached={pullImages}
      data={postsList}
      itemContent={(index, post) => {
        return <Post data={post} />
      }}
      overscan={{ main: 1000, reverse: 1000 }}
      useWindowScroll
      components={{
        Footer: feedFooter,
      }}
    />
  )
}
