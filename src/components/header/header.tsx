import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar>
          <Typography component="h1" variant="h6">
            Spacestagram
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
