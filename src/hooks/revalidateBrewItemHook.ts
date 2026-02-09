import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'
import { BrewItem } from '@/services/api'

export const revalidateBrewItemHomePage: CollectionAfterChangeHook<BrewItem> = ({ doc }) => {
  revalidatePath('/')
  revalidatePath('/past')
  return doc
}
