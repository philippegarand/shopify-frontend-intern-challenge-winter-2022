import { Container } from '@material-ui/core'
import Header from './components/header/header'
import Feed from './components/feed/feed'

import './App.css'

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
