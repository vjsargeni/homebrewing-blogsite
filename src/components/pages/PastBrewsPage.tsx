import { GetBrewsFromPayloadByCondition } from '@/services/api'
import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { FC } from 'react'
import { Container } from 'react-bootstrap'
import PageSection from '../pageSection/PageSection'
import { BREWING_STATUS } from '@/consts/string'

interface PastBrewsPageProps {}

const PastBrewsPage: FC<PastBrewsPageProps> = async (props) => {
  const query: Where = { brewingStatus: { equals: 'past' } }

  const data = await GetBrewsFromPayloadByCondition(query, 10)
  const pastBrews = data.filter((brew) => brew.brewingStatus === BREWING_STATUS.PAST)

  //filter/search?
  //pagination?

  if (data.length === 0) {
    return <h2 className="text-white text-center">No Past Brews Found</h2>
  } else if (!data?.length) {
    return notFound()
  }

  return (
    <Container>
      <PageSection sectionTitle={'Past Brews'} sectionItems={pastBrews}></PageSection>
    </Container>
  )
}

export default PastBrewsPage
