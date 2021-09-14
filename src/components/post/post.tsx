import { useState } from 'react'
import { Card, CardMedia, IconButton, Typography } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShowMoreText from 'react-show-more-text'
import MediaSharing from '../mediaSharing/mediaSharing'

import styles from './post.module.css'

type Props = {
  imageUrl: string
  title: string
  date: string
  description: string
}

export default function Post({ imageUrl, title, date, description }: Props) {
  const [isLiked, setIsLiked] = useState(false)

  const likePost = () => {
    setIsLiked(!isLiked)
  }

  return (
    <Card variant="outlined" className={styles.card} component="article">
      <CardMedia
        component="img"
        src={imageUrl}
        title={title}
        onDoubleClick={likePost}
      />
      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <IconButton
            color="primary"
            onClick={likePost}
            edge="start"
            size="small"
            aria-label="like post"
          >
            {isLiked ? (
              <FavoriteIcon style={{ color: pink[500] }} />
            ) : (
              <FavoriteBorderIcon color="disabled" />
            )}
          </IconButton>
          <MediaSharing imageUrl={imageUrl} title={title} />
          <Typography variant="body2" color="textSecondary">
            {new Date(date).toLocaleDateString()}
          </Typography>
        </div>
        <header>
          <Typography variant="subtitle1" component="h2">
            {title}
          </Typography>
        </header>
        <ShowMoreText
          lines={3}
          more="More"
          less="Less"
          className={
            'MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary'
          }
          anchorClass={styles.showMore}
        >
          {description}
        </ShowMoreText>
      </div>
    </Card>
  )
}
