import { Card, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import styles from './post.module.css'

export default function PostSkeleton() {
  return (
    <Card variant="outlined" className={styles.card} component="article">
      <Skeleton variant="rect" height={200} />
      <div className={styles.cardContent}>
        <header className={styles.skeletonTitle}>
          <Typography variant="subtitle1">
            <Skeleton variant="text" width="60%" />
          </Typography>
        </header>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="30%" />
      </div>
    </Card>
  )
}
