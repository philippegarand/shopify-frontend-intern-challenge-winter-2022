import React, { useState } from 'react'
import { Card, CardMedia, IconButton, Typography } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MediaSharing from '../mediaSharing/mediaSharing'
import TypographyReadMore from '../typographyReadMore/typographyReadMore'

import styles from './post.module.css'

const MAX_CHAR_TO_SHOW = 160

interface Props {
  data: {
    imageUrl: string
    title: string
    date: string
    description: string
  }
}

function Post({ data }: Props) {
  const { title, description, date, imageUrl } = data

  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(imageUrl) ?? false
  )

  const likePost = () => {
    setIsLiked(!isLiked)

    if (localStorage.getItem(imageUrl)) {
      localStorage.removeItem(imageUrl)
    } else {
      localStorage.setItem(imageUrl, '1')
    }
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
        <TypographyReadMore
          text={description}
          charsNumberToShow={MAX_CHAR_TO_SHOW}
          variant="body2"
          color="textSecondary"
          align="justify"
        />
      </div>
    </Card>
  )
}

export default React.memo(Post)
