import { Media } from '@/payload-types'
import { BrewItem } from '@/services/api'
import { FC } from 'react'
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardLink,
  Container,
  CardHeader,
} from 'react-bootstrap'
import { BREWING_STATUS } from '@/consts/string'

interface BrewDisplayProps {
  brew: BrewItem
}

const BrewDisplayTile: FC<BrewDisplayProps> = async (props) => {
  const { brew } = props
  const linkToBrewPage = `/brews/${brew.id}`
  const image = (brew.brewPhoto as Media).url!

  return (
    <Card border="primary" bg="dark" text="light" className="p-2 m-2" style={{ width: '18rem' }}>
      <Container className="mx-auto align-middle">
        <CardHeader>
          <CardTitle>{brew.brewName}</CardTitle>
          <CardSubtitle className="py-1">{brew.brewStyle}</CardSubtitle>
          {brew.brewingStatus === BREWING_STATUS.DRAFT && (
            <CardSubtitle className="py-1">On Draft</CardSubtitle>
          )}
          {brew.brewingStatus === BREWING_STATUS.BOTTLED && (
            <CardSubtitle className="py-1">Bottled</CardSubtitle>
          )}
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
