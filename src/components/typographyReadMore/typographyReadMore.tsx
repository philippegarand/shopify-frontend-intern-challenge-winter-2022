import { useState } from 'react'
import { Link, Typography, TypographyProps } from '@material-ui/core'

interface Props extends TypographyProps {
  text: string
  charsNumberToShow: number
}

// Based on https://www.geeksforgeeks.org/how-to-create-a-read-more-component-in-reactjs/
export default function TypographyReadMore(props: Props) {
  const { text, charsNumberToShow, ...typographyProps } = props

  const needShowMore = text.length > charsNumberToShow
  const [isReadMore, setIsReadMore] = useState(needShowMore)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <Typography {...typographyProps}>
      {isReadMore ? `${text.slice(0, charsNumberToShow)}... ` : `${text} `}
      {needShowMore && (
        <Link
          component="button"
          color="textPrimary"
          underline="always"
          variant={props.variant ?? 'inherit'}
          onClick={toggleReadMore}
        >
          {isReadMore ? 'More' : 'Less'}
        </Link>
      )}
    </Typography>
  )
}
