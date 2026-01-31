import { GetBrewsFromPayloadByCondition } from '@/services/api'
import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { FC } from 'react'
import { Container } from 'react-bootstrap'
import PageSection from '../pageSection/PageSection'

interface PastBrewsPageProps {}

const PastBrewsPage: FC<PastBrewsPageProps> = async (props) => {
  const query: Where = { brewingStatus: { equals: 'past' } }

  const data = await GetBrewsFromPayloadByCondition(query, 10)

  //filter/search?
  //pagination?

  if (data.length === 0) {
    return <h2>No Past Brews Found</h2>
  } else if (!data?.length) {
    return notFound()
  }

  return (
    <Container>
      <PageSection sectionTitle={'Past Brews'} sectionItems={data}></PageSection>
    </Container>
  )
}

export default PastBrewsPage
