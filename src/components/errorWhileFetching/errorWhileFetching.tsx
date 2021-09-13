import WarningIcon from '@material-ui/icons/Warning'
import ReplayIcon from '@material-ui/icons/Replay'
import { Button, Typography } from '@material-ui/core'

import styles from './errorWhileFetching.module.css'

type props = {
  onClick: () => void
}

export default function ErrorWhileFetching({ onClick }: props) {
  return (
    <div className={styles.content}>
      <WarningIcon color="inherit" />

      <Typography variant="body1" color="textSecondary" align="center">
        Could not fetch more posts...
      </Typography>
      <Button
        variant="text"
        color="inherit"
        startIcon={<ReplayIcon />}
        size="small"
        onClick={onClick}
      >
        Retry
      </Button>
    </div>
  )
}
