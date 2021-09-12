import { useEffect, useState } from 'react'
import Post from '../post/post'
import { getImages, imagesResponse } from '../../api/nasaAPODClient'
import PostSkeleton from '../post/postSkeleton'

export default function Feed() {
  const [images, setImages] = useState<imagesResponse[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', fetchMoreImages)
    return () => {
      window.removeEventListener('scroll', fetchMoreImages)
    }
  }, [])

  useEffect(() => {
    async function pullImages() {
      const imagesResult = await getImages({
        count: 10,
      })
      setImages((images) =>
        images ? images.concat(imagesResult) : imagesResult
      )
      setIsLoading(false)
    }

    if (isLoading) {
      pullImages()
    }
  }, [isLoading])

  const fetchMoreImages = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsLoading(true)
    }
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
    </div>
  )
}
