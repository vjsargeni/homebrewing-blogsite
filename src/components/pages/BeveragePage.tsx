import { GetBeveragePage, GetPlaceHolderImage } from '@/services/api/utilities'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StarComponent from '../brewDisplay/StarComponent'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import Image from 'next/image'
import { ImgWrapper } from '../Images/ImageWrapper'

interface BeveragePageProps {
  brew: string
}

const BeveragePage: FC<BeveragePageProps> = async (props) => {
  const { brew, ...remainingContainerProps } = props
  const image = await GetPlaceHolderImage()
  const pageData = await GetBeveragePage(brew)

  if (pageData === undefined) {
    return notFound()
  }

  const recipe = pageData.brew.recipe
  //round to one decimal place
  const recipeRatingRaw = pageData.brew.batchData?.tasteRating ?? 0
  const ratingOutOfFive = Math.floor((recipeRatingRaw / 20) * 10) / 10
  const descriptionHTML = convertLexicalToHTML({ data: pageData.brew.brewDescription })

  return (
    <Container className="text-center text-white" {...remainingContainerProps}>
      <h3>You&apos;re on the {pageData.brew.brewName} page</h3>
      <Row>
        <Col className="border rounded border-primary">
          {/* <Image objectFit={'contain'} fill src={image.url ?? ''} alt={image.alt ?? ''} /> */}
          <ImgWrapper src={image.url!} alt={image.alt!} height={300} />
          <StarComponent rating={ratingOutOfFive} showRatingValue={true} showEmpties={true} />
        </Col>
        <Col> other</Col>
      </Row>
      <h4>
        <StarComponent rating={ratingOutOfFive} showRatingValue={true} className="text-white" />
        <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
      </h4>
      <p className="text-light"> {JSON.stringify(recipe)}</p>
    </Container>
  )
}

export default BeveragePage
