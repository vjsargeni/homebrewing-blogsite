import React from 'react'
import Header from '@/components/header/Header'
import MainNav from '@/components/nav/MainNav'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <MainNav
          navItems={[
            { href: '/', page: 'Home' },
            { href: '/past', page: 'Past Brews' },
          ]}
        />
        <main>{children}</main>
      </body>
    </html>
  )
}
