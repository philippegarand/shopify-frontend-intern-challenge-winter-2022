import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share'
import FacebookIcon from '@material-ui/icons/Facebook'
import RedditIcon from '@material-ui/icons/Reddit'
import TwitterIcon from '@material-ui/icons/Twitter'

import styles from './mediaSharing.module.css'

type Props = {
  imageUrl: string
  title: string
}

export default function MediaSharing({ imageUrl, title }: Props) {
  return (
    <div className={styles.buttons}>
      <FacebookShareButton url={imageUrl} quote={title} hashtag="NASA">
        <FacebookIcon className={styles.facebook} />
      </FacebookShareButton>

      <TwitterShareButton url={imageUrl} title={title} hashtags={['NASA']}>
        <TwitterIcon className={styles.twitter} color="inherit" />
      </TwitterShareButton>

      <RedditShareButton url={imageUrl} title={title}>
        <RedditIcon className={styles.reddit} />
      </RedditShareButton>
    </div>
  )
}
