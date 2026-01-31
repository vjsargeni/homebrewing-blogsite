'use client'
import { FC } from 'react'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { usePathname } from 'next/navigation'
//import beerImg from 'media/beerMug.png'
import { Col, Row } from 'react-bootstrap'
import { Beermedia } from '@/payload-types'

interface MainNavProps {
  navItems: NavItem[]
  logoMedia: Beermedia
}

export type NavItem = {
  page: string
  href: string
}

const MainNav: FC<MainNavProps> = (props) => {
  const { navItems, logoMedia, ...remainingNavBarProps } = props

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
        <Image src={logoMedia.url ?? ''} height={60} width={60} alt={logoMedia.alt ?? ''} />
        <Nav fill variant="underline" className="justify-content-center" activeKey={currentPath}>
          <Navbar.Brand href="/">
            <Container className="justify-content-start">
              <Row>Binco Brewing Company</Row>
            </Container>
          </Navbar.Brand>
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
