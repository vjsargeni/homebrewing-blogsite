import { Media } from '@/payload-types'
import { BrewItem } from '@/services/api'
import { FC } from 'react'
import {
  Card,
  CardTitle,
  CardSubtitle,
  Container,
  CardHeader,
  Col,
  Row,
  CardBody,
} from 'react-bootstrap'
import { BREWING_STATUS } from '@/consts/string'
import Link from 'next/link'
import { ImgWrapper } from '../Images/ImageWrapper'
interface BrewDisplayProps {
  brew: BrewItem
}

const BrewDisplayTile: FC<BrewDisplayProps> = async (props) => {
  const { brew } = props
  const linkToBrewPage = `/brews/${brew.id}`
  const image = brew.brewPhoto as Media
  const showBatchData = brew.batchData !== undefined

  return (
    <Link
      href={linkToBrewPage}
      className="text-decoration-none py-2 justify-content-center d-flex h-100"
    >
      <Card
        border="primary"
        bg="dark"
        text="light"
        className=" d-flex align-items-stretch"
        style={{ width: '18rem' }}
      >
        <Container className="mx-auto align-middle">
          <CardHeader>
            <CardTitle className="text-center text-nowrap">{brew.brewName}</CardTitle>
            <Container className="border rounded border-primary p-1">
              <Row>
                <Col>
                  <CardSubtitle className="py-1 mx-1 text-nowrap">{brew.brewStyle}</CardSubtitle>

                  {brew.brewingStatus === BREWING_STATUS.DRAFT && (
                    <CardSubtitle className="py-1 mx-1">On Draft</CardSubtitle>
                  )}
                  {brew.brewingStatus === BREWING_STATUS.BOTTLED && (
                    <CardSubtitle className="py-1 mx-1">Bottled</CardSubtitle>
                  )}
                </Col>
              </Row>

              <Row>
                <Col>
                  <CardSubtitle className="py-1 mx-1">
                    IBU: {showBatchData ? brew.batchData?.estimatedIbu : 'TBD'}
                  </CardSubtitle>
                </Col>
                <Col>
                  <CardSubtitle className="py-1 mx-1">
                    ABV: {showBatchData ? brew.batchData?.measuredAbv : ' ???'}%
                  </CardSubtitle>
                </Col>
              </Row>
            </Container>
          </CardHeader>
          <CardBody className="p-2">
            <ImgWrapper src={image?.url ?? ''} alt={image?.alt ?? 'Brew Image'} height={200} />
          </CardBody>
        </Container>
      </Card>
    </Link>
  )
}

export default BrewDisplayTile
