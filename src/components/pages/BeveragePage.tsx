import { GetBeveragePage, GetPlaceHolderImage } from '@/services/api/utilities'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StarComponent from '../brewDisplay/StarComponent'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { ImgWrapper } from '../Images/ImageWrapper'
import { BREWING_STATUS, BrewStatus } from '@/consts/string'

interface BeveragePageProps {
  brew: string
}

const GetStatusText = (status: BrewStatus) => {
  switch (status) {
    case BREWING_STATUS.DRAFT:
      return 'On Draft Now'
    case BREWING_STATUS.BOTTLED:
      return 'Bottled and Ready'
    case BREWING_STATUS.CONDITIONING:
    case BREWING_STATUS.UPCOMING:
      return 'Coming Soon'
    case BREWING_STATUS.PAST:
    default:
      return 'No Longer Available'
  }
}

const BeveragePage: FC<BeveragePageProps> = async (props) => {
  const { brew, ...remainingContainerProps } = props
  const image = await GetPlaceHolderImage()
  const pageData = await GetBeveragePage(brew)

  if (pageData === undefined) {
    return notFound()
  }

  const batchData = pageData.brew.batchData
  //round to one decimal place
  const recipeRatingRaw = pageData.brew.batchData?.tasteRating ?? 0
  const ratingOutOfFive = Math.floor((recipeRatingRaw / 20) * 10) / 10
  const descriptionHTML = convertLexicalToHTML({ data: pageData.brew.brewDescription })
  return (
    <Container className="text-center text-white p-2" {...remainingContainerProps}>
      <h1>{pageData.brew.brewName}</h1>
      <Row>
        <Col className="mx-auto p-2 border rounded border-primary ">
          <ImgWrapper className="p-2" src={image.url!} alt={image.alt!} height={300} />
          <StarComponent rating={ratingOutOfFive} showRatingValue={true} showEmpties={true} />
        </Col>
        <Col className="mx-auto border rounded border-primary">
          <Container className="text-center p-1">
            <h3>Quick Stats:</h3>
            <Row>
              <p>
                <b>Style: </b>
                {pageData.brew.brewStyle}
              </p>
              <p>
                <b>Availability: </b>
                {GetStatusText(pageData.brew.brewingStatus)}
              </p>
              <p>
                <b>ABV: </b>
                {batchData?.measuredAbv}%
              </p>
              <p>
                <b>IBUs: </b>
                {batchData?.estimatedIbu}
              </p>
              <p>
                <b>BU/GU Ratio: </b>
                {batchData?.estimatedBuGuRatio}
              </p>
              <p>
                <b>Color: </b>
                {batchData?.estimatedColor}
              </p>
              <p>
                <b>BJCP Style: </b>
                {batchData?.recipe?.style?.name}
              </p>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <h4>
          <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
        </h4>
      </Row>

      {/* <p className="text-light"> {JSON.stringify(recipe)}</p> */}
    </Container>
  )
}

export default BeveragePage
