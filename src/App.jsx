import * as React from 'react'
import Container from 'react-bootstrap/Container'
import { ToastContainer } from 'react-toastify'

import { TopNav } from './components/TopNav'
import { RoutesList } from './components/RoutesList'
import 'react-toastify/dist/ReactToastify.css'
import { CommonProvider } from './contexts/Common'
import './_App.scss'

const App = () => {
  return (
    <CommonProvider>
      <header>
        <TopNav />
      </header>
      <Container>
        <ToastContainer />
        <main style={{ marginTop: '6rem' }}>
          <RoutesList />
        </main>
      </Container>
    </CommonProvider>
  )
}

export default App
