import {
  AppBar,
  Container,
  makeStyles,
  SvgIcon,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'

const useStyles = makeStyles({
  spaceBanner: {
    backgroundImage:
      'url("https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1917b-q-5198x4801.jpg")',
    backgroundColor: 'black',
  },
  icon: {
    marginRight: '8px',
  },
})

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="sticky" classes={{ root: classes.spaceBanner }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <SvgIcon classes={{ root: classes.icon }}>
            <LogoSvg />
          </SvgIcon>
          <Typography component="h1" variant="h6">
            Spacestagram
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
