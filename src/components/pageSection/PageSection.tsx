import { BrewItem } from '@/services/api/types'
import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrewDisplayTile from '../brewDisplay/BrewDisplayTile'

interface PageSectionProps {
  sectionTitle: string
  sectionItems: BrewItem[]
}

const PageSection: FC<PageSectionProps> = (props) => {
  const { sectionTitle, sectionItems, ...remainingContainerProps } = props

  return (
    <Container fluid {...remainingContainerProps}>
      <h3>{sectionTitle}</h3>
      <Row>
        {sectionItems.map((item) => {
          return (
            <Col xl={3} lg={4} md={6} sm={8} xs={12} key={`${item.id}_col_${sectionTitle}`}>
              <BrewDisplayTile
                key={`${item.id}_card_${sectionTitle}`}
                brew={item}
              ></BrewDisplayTile>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default PageSection
