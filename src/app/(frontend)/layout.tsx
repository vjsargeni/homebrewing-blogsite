import React from 'react'
import './styles.css'
import Header from '@/components/header/Header'
import MainNav from '@/components/nav/MainNav'

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
        <MainNav navItems={['Current', 'Past']} />
        <main>{children}</main>
      </body>
    </html>
  )
}
