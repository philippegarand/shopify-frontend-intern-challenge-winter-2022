import { Card, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import styles from './post.module.css'

export default function PostSkeleton() {
  return (
    <Card variant="outlined" className={styles.card} component="article">
      <header className={styles.skeletonTitle}>
        <Typography variant="h6">
          <Skeleton variant="text" width="60%" />
        </Typography>
      </header>

      <Skeleton variant="rect" height={200} />

      <div className={styles.cardContent}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="50%" />
      </div>
    </Card>
  )
}
