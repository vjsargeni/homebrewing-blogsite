import { GetBrewsFromPayloadByCondition } from '@/services/api'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { FC } from 'react'
import { Container } from 'react-bootstrap'

interface PastBrewsPageProps {}

const PastBrewsPage: FC<PastBrewsPageProps> = async (props) => {
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const query: Where = { brewingStatus: { equals: 'past' } }

  const data = await GetBrewsFromPayloadByCondition(query, 10)

  if (!data.length) {
    return notFound()
  }

  return (
    <Container>
      <h1>Past Brews Page</h1>
      <h1>{data[0].brewName}</h1>
      <Link href={`/brews/${data[0].id}`}>Link</Link>
    </Container>
  )
}

export default PastBrewsPage
