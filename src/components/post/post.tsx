import { useState } from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import styles from './post.module.css'

type CardProps = {
  image: string
  title: string
  date: string
  description: string
}

export default function Post({ image, title, date, description }: CardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const likePost = () => {
    setIsLiked(!isLiked)
  }

  return (
    <Card variant="outlined" className={styles.card} component="article">
      <header className={styles.title}>
        <Typography variant="h6">{title}</Typography>
      </header>
      <CardMedia
        component="img"
        src={image}
        title={title}
        onDoubleClick={likePost}
      />
      <div className={styles.cardContent}>
        <div className={styles.likeAndDate}>
          <button onClick={likePost} className={styles.likeButton}>
            {isLiked ? (
              <FavoriteIcon style={{ color: pink[500] }} />
            ) : (
              <FavoriteBorderIcon color="disabled" />
            )}
          </button>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </div>
    </Card>
  )
}