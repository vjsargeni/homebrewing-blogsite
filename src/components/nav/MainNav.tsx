'use client'
import { FC } from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

interface MainNavProps {
  navItems: string[]
}

const MainNav: FC<MainNavProps> = (props) => {
  const { navItems, ...remainingNavBarProps } = props

  return (
    <Navbar expand="lg" className="bg-body-tertiary " {...remainingNavBarProps}>
      <Container fluid>
        <Nav className="me-auto">
          {navItems.map((navItem) => {
            return (
              <Nav.Link key={navItem} href={`#${navItem}`}>
                {navItem}
              </Nav.Link>
            )
          })}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MainNav
