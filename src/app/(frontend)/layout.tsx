import React from 'react'
import MainNav from '@/components/nav/MainNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GetMainLogo } from '@/services/api'
export const metadata = {
  description: 'Binco Brewing Company - Beer past, present, and future.',
  title: 'Binco Brewing Co',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const logo = await GetMainLogo()

  return (
    <html lang="en">
      <body className="bg-black">
        <MainNav
          logoMedia={logo}
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
