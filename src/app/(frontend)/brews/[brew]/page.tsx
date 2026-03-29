import BeveragePage from '@/components/pages/BeveragePage'
import { GetBeveragePage } from '@/services/api'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

async function getBeverageData(brew: string) {
  return GetBeveragePage(brew)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brew: string }>
}): Promise<Metadata> {
  const { brew } = await params
  const pageData = await getBeverageData(brew)

  if (!pageData) {
    return { title: 'Not Found' }
  }

  const image = pageData.brew.brewPhoto
  const imageUrl = typeof image === 'string' ? image : image?.url
  const ogImageUrl = imageUrl || '/opengraph-image.png'

  return {
    title: pageData.brew.brewName,
    description: pageData.brew.brewStyle,
    openGraph: {
      title: pageData.brew.brewName,
      description: pageData.brew.brewStyle,
      images: [{ url: ogImageUrl }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ brew: string }> }) {
  const { brew } = await params
  const pageData = await getBeverageData(brew)

  if (!pageData) {
    return notFound()
  }

  return <BeveragePage pageData={pageData} />
}
