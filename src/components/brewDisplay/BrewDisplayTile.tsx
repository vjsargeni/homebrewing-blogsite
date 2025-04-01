import { Media } from '@/payload-types'
import { BrewItem } from '@/services/api'
import { FC } from 'react'
import placeHolderImg from 'media/beerMug.png'
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardLink,
  Container,
  CardHeader,
} from 'react-bootstrap'

interface BrewDisplayProps {
  brew: BrewItem
}

const BrewDisplayTile: FC<BrewDisplayProps> = async (props) => {
  const { brew } = props
  const linkToBrewPage = `/brews/${brew.id}`
  const image = (brew.brewPhoto as Media)?.url ?? placeHolderImg.src
  return (
    <Card border="primary" bg="dark" text="light" className="p-2 m-2" style={{ width: '18rem' }}>
      <Container className="mx-auto align-middle">
        <CardHeader>
          <CardTitle>{brew.brewName}</CardTitle>
          <CardSubtitle>{brew.brewStyle}</CardSubtitle>
          <CardLink color="light" href={linkToBrewPage}>
            See more
          </CardLink>
        </CardHeader>

        <CardImg className="p-2" variant="bottom" src={image} />
      </Container>
    </Card>
  )
}

export default BrewDisplayTile
