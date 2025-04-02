'use client'
import { FC } from 'react'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { usePathname } from 'next/navigation'
import beerImg from 'media/beerMug.png'
import { Col, Row } from 'react-bootstrap'

interface MainNavProps {
  navItems: NavItem[]
}

export type NavItem = {
  page: string
  href: string
}

const MainNav: FC<MainNavProps> = (props) => {
  const { navItems, ...remainingNavBarProps } = props

  const currentPath = usePathname()

  return (
    <Container fluid className="bg-dark">
      <Navbar
        bg="dark"
        sticky="top"
        data-bs-theme="dark"
        expand
        // className="justify-content-center"
        {...remainingNavBarProps}
      >
        <Navbar.Brand href="/">
          <Container className="justify-content-start">
            <Row>
              <Col>
                <Image src={beerImg.src} height={30} width={40} alt={'Two beer mugs'} />
              </Col>
              WIP BincoBrewing Site
            </Row>
          </Container>
        </Navbar.Brand>

        <Nav fill variant="underline" className="justify-content-center" activeKey={currentPath}>
          {navItems.map((navItem) => {
            return (
              <Nav.Link
                key={`${navItem.page}_link`}
                href={`${navItem.href}`}
                className={currentPath === navItem.href ? 'active nav-underline' : ''}
              >
                {navItem.page}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar>
    </Container>
  )
}

export default MainNav
