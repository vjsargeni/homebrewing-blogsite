import BeveragePage from '@/components/pages/BeveragePage'

export default async function Page({ params }: { params: Promise<{ brew: string }> }) {
  const { brew } = await params

  return <BeveragePage brew={brew} />
}
