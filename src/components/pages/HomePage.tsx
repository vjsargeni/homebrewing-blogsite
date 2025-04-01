import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload, Where } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import Container from 'react-bootstrap/Container'
import { GetBrewsFromPayloadByCondition } from '@/services/api'
import Link from 'next/link'

const HomePage = async function () {
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const query: Where = { brewingStatus: { not_equals: 'past' } }

  const data = await GetBrewsFromPayloadByCondition(query, 10)

  return (
    <Container>
      {data.map((item) => (
        <Link key={`${item.id}_${item.brewName}`} href={`/brews/${item.id}`}>
          {item.brewName}
        </Link>
      ))}
    </Container>
  )
}

export default HomePage
