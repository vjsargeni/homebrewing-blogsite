'use client'
import { FC } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { usePathname } from 'next/navigation'

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
    <Container fluid>
      <Navbar
        expand="lg"
        className="justify-content-center bg-body-tertiary"
        {...remainingNavBarProps}
      >
        <Nav fill variant="underline" className="" activeKey={currentPath}>
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
