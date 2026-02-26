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
    <Container fluid className="p-2" {...remainingContainerProps}>
      <h2 className="text-light">{sectionTitle}</h2>
      {/* Row with centered content and responsive spacing */}
      <Row className="justify-content-left">
        {sectionItems.length === 0 && <p className="text-light">Nothing at the moment...</p>}
        {sectionItems.map((item) => {
          return (
            <Col
              xxl={3}
              lg={4}
              s={6}
              xs={12}
              className="d-flex justify-content-center mb-3"
              key={`${item.id}_col_${sectionTitle}`}
            >
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
