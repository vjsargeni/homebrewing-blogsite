import { BrewItem } from '@/services/api'
import { FC } from 'react'
import { Container, Row } from 'react-bootstrap'

interface BeveragePageDetailsSectionProps {
  brew: BrewItem
  descriptionHtml: string
}

const BeveragePageDetailsSection: FC<BeveragePageDetailsSectionProps> = (props) => {
  const { brew, descriptionHtml } = props

  return (
    <Container>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
      </Row>
    </Container>
  )
}

export default BeveragePageDetailsSection
