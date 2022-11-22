import React from 'react'
import { Container } from 'react-bootstrap'

const Blog = () => {
  return (
    <Container className='blog-post mt-5'>
      <article>
        <h2>What is the purpose of React Router</h2>
        <p>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.</p>
      </article>

      <article>
        <h2>what is the purpose of context api?</h2>
        <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props

          A context contains references to variables and notifies its consumers when these references are changed. There are no restrictions on what type of values you can provide, so you can easily pass in functions that can be used to communicate events back from consumers, for example.

          To create a context, call the createContext function with an arbitrary value. This will be the default value provided to the consumers. Optionally provide an interface describing your provided object. The returned object will contain helper components you need to provide or consume this context..</p>
      </article>

      <article>
        <h2>UseRef Hook Explained</h2>
        <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>

          <li><b>Usage of useRef Hook</b></li>
          <li>Referencing a value with a ref</li>
          <li> Avoiding recreating the ref contents</li>
          <li>Manipulating the DOM with a ref</li>
      </article>
    </Container>
  )
}

export default Blog