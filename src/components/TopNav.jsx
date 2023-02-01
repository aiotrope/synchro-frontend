import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
//import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { useAuthStorage } from '../contexts/AuthContext'

const UnAuthMenu = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container style={{ width: '47%' }}>
      <LinkContainer to={'/'}>
        <Navbar.Brand>Synchro</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to={'/'}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/'}>
            <Nav.Link>DEV</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to={'/login'}>
            <Button variant="outline-light">Login</Button>
          </LinkContainer>
          <div className="mx-2 my-1"></div>
          <LinkContainer to={'/signup'}>
            <Button variant="info">Signup</Button>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export const TopNav = () => {
  const { access } = useAuthStorage()
  return !access ? <UnAuthMenu /> : null
}
