'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Beermedia } from '@/payload-types'
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'

interface MainNavProps {
  navItems: NavItem[]
  logoMedia: Beermedia
}

export type NavItem = {
  page: string
  href: string
}

const MainNav: FC<MainNavProps> = (props) => {
  // Destructure props to extract nav items, logo media, and additional navbar properties
  const { navItems, logoMedia, ...remainingNavBarProps } = props

  // Get current page path for active link highlighting
  const currentPath = usePathname()

  // State for mobile offcanvas menu
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  //Links are the Same for mobile and desktop, so we can map through them once and use in both places
  const navLinks = navItems.map((navItem) => {
    return (
      <Nav.Link
        key={`${navItem.page}_link`}
        href={`${navItem.href}`}
        className={`fs-6 fs-md-5 ${currentPath === navItem.href ? 'active nav-underline' : ''}`}
      >
        {navItem.page}
      </Nav.Link>
    )
  })

  return (
    <Container fluid className="bg-dark">
      <Navbar
        bg="dark"
        sticky="top"
        data-bs-theme="dark"
        expand="lg"
        className="px-2 px-lg-4"
        {...remainingNavBarProps}
      >
        {/* Brand/title - responsive font size */}
        <Navbar.Brand href="/" className="me-auto me-md-3">
          <Image src={logoMedia.url ?? ''} height={60} width={60} alt={logoMedia.alt ?? ''} />
          <span className="fs-6">Binco Brewing</span>
        </Navbar.Brand>

        {/* Hamburger toggle - visible on mobile only */}
        <Navbar.Toggle onClick={() => setShowOffcanvas(true)} className="d-lg-none" />

        <Nav
          variant="underline"
          className="justify-content-start gap-3 d-none d-lg-flex"
          activeKey={currentPath}
        >
          {navLinks}
        </Nav>

        {/* Mobile offcanvas menu */}
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="end"
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-3">{navLinks}</Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </Container>
  )
}

export default MainNav
