import { Where } from 'payload'
import Container from 'react-bootstrap/Container'
import { GetBrewsFromPayloadByCondition } from '@/services/api'
import PageSection from '../pageSection/PageSection'
import { BREWING_STATUS } from '@/consts/string'

const HomePage = async function () {
  const query: Where = { brewingStatus: { not_equals: 'past' } }

  //page data
  const data = await GetBrewsFromPayloadByCondition(query, 10)

  //fermenting / conditioning brews
  const upcomingBrews = data.filter((brew) => {
    return brew.brewingStatus === BREWING_STATUS.UPCOMING
  })

  //Conditioning
  const conditioningBrews = data.filter((brew) => {
    return brew.brewingStatus === BREWING_STATUS.CONDITIONING
  })

  const currentBrews = data.filter((brew) => {
    return (
      brew.brewingStatus === BREWING_STATUS.BOTTLED || brew.brewingStatus === BREWING_STATUS.DRAFT
    )
  })

  return (
    <Container>
      <PageSection sectionTitle="Currently Available" sectionItems={currentBrews}></PageSection>
      <PageSection sectionTitle="On Deck" sectionItems={conditioningBrews}></PageSection>
      <PageSection sectionTitle="Upcoming Brews" sectionItems={upcomingBrews}></PageSection>
    </Container>
  )
}

export default HomePage
