import * as React from 'react'
import Container from 'react-bootstrap/Container'

import { TopNav } from './components/TopNav'
import { RoutesList } from './components/RoutesList'
import './_App.scss'

const App = () => {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <Container>
        <main style={{ marginTop: '6rem' }}>
          <RoutesList />
        </main>
      </Container>
    </>
  )
}

export default App
