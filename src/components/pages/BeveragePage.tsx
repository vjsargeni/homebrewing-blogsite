import { GetBeveragePage, GetPlaceHolderImage } from '@/services/api/utilities'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StarComponent from '../brewDisplay/StarComponent'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { ImgWrapper } from '../Images/ImageWrapper'
import { Beermedia } from '@/payload-types'
import { GetStatusText } from '@/utils/status'
import BeerIconSVG from '../Images/BeerIconSVG'
import { MapSRMToHexColor } from '@/utils/color'
import { MedalSVG } from '../Images/MedalSVG'

interface BeveragePageProps {
  brew: string
}

const BeveragePage: FC<BeveragePageProps> = async (props) => {
  const { brew, ...remainingContainerProps } = props

  const pageData = await GetBeveragePage(brew)
  const image = (pageData?.brew.brewPhoto as Beermedia) ?? (await GetPlaceHolderImage())

  if (pageData === undefined) {
    return notFound()
  }

  const batchData = pageData.brew.batchData
  //round to one decimal place
  const recipeRatingRaw = pageData.brew.batchData?.tasteRating ?? 0
  const ratingOutOfFive = Math.floor((recipeRatingRaw / 20) * 10) / 10
  const descriptionHTML = convertLexicalToHTML({ data: pageData.brew.brewDescription })
  const srmHex = MapSRMToHexColor(batchData?.estimatedColor ?? 0)
  return (
    <Container className="text-center text-white mx-2 p-2 mx-auto" {...remainingContainerProps}>
      <h1 className="fs-4 fs-md-3">
        {pageData.brew.brewName}{' '}
        {pageData.brew.medal && <MedalSVG height={30} width={30} medal={pageData.brew.medal} />}
      </h1>
      <Row className="g-3 m-2">
        {/* Image, Stats, and rating column */}
        <Col md={6} xs={12} className="border rounded border-primary p-3">
          <ImgWrapper className="p-2 w-100" src={image.url!} alt={image.alt!} height={300} />
          <StarComponent rating={ratingOutOfFive} showRatingValue={true} showEmpties={true} />
          <Container className="text-center p-1">
            <h3 className="fs-5 fs-md-4">Quick Stats:</h3>
            <Row className="g-2">
              <Col xs={12} className="text-start">
                <p className="fs-6 mb-2">
                  <b>Style: </b>
                  {pageData.brew.brewStyle}
                </p>
              </Col>
              <Col xs={12} className="text-start">
                <p className="fs-6 mb-2">
                  <b>Availability: </b>
                  {GetStatusText(pageData.brew.brewingStatus)}
                </p>
              </Col>
              <Col xs={12} className="text-start">
                <p className="fs-6 mb-2">
                  <b>IBUs: </b>
                  {batchData?.estimatedIbu}
                </p>
              </Col>
              <Col xs={12} className="text-start">
                <p className="fs-6 mb-2">
                  <b>BU/GU Ratio: </b>
                  {batchData?.estimatedBuGuRatio}
                </p>
              </Col>
              <Col xs={12} className="text-start">
                <p className="fs-6 mb-2">
                  <b>Color: </b>
                  {batchData?.estimatedColor}
                  <BeerIconSVG height={25} width={25} color={srmHex} />
                </p>
              </Col>
              <Col xs={12} className="text-start">
                <p className="fs-6 mb-2">
                  <b>BJCP Style: </b>
                  {batchData?.recipe?.style?.name}
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        {/* Description section */}
        <Col md={6} xs={12} className=" border rounded border-primary p-3">
          <h3 className="fs-5 fs-md-4 m-3 text-start">Description:</h3>
          <div
            className="text-start fs-6 m-3"
            dangerouslySetInnerHTML={{ __html: descriptionHTML }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default BeveragePage
