import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Carlos Oliveira"
        content="lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae."
      />
      <Post 
        author="Carlos Oliveira"
        content="lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae."
      />
    </>
  )
}


