import { Container } from '@material-ui/core'
import Header from './components/header/header'

import './App.css'
import Feed from './components/feed/feed'

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="mainContainer" maxWidth="md" component="main">
        <Feed />
      </Container>
    </div>
  )
}

export default App
