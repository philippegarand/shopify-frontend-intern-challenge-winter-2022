import { Container } from '@material-ui/core'
import Header from './components/header/header'
import Post from './components/post/post'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="mainContainer" maxWidth="md" component="main">
        {[...Array(5)].map((x, i) => (
          <Post
            key={i}
            image="https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg"
            title="Template post"
            date="9/9/2021"
            description="This is a short description"
          />
        ))}
      </Container>
    </div>
  )
}

export default App
