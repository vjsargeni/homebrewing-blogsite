import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'
import { BrewItem } from '@/services/api'

export const revalidateBrewItemHomePage: CollectionAfterChangeHook<BrewItem> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  revalidatePath('/')
  return doc
}
