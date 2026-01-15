import { GetBeveragePage } from '@/services/api/utilities'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import { Container } from 'react-bootstrap'

interface BeveragePageProps {
  brew: string
}

const BeveragePage: FC<BeveragePageProps> = async (props) => {
  const { brew, ...remainingContainerProps } = props

  const pageData = await GetBeveragePage(brew)

  if (pageData === undefined) {
    return notFound()
  }

  const recipe = pageData.brew.recipe

  return (
    <Container fluid className="text-center" {...remainingContainerProps}>
      <h3>You&apos;re on the {pageData.brew.brewName} page</h3>
      <p className="text-light"> {JSON.stringify(recipe)}</p>
    </Container>
  )
}

export default BeveragePage
