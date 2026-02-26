import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'
import { BrewItem } from '@/services/api'

export const revalidateBrewItemHomePage: CollectionAfterChangeHook<BrewItem> = ({ doc }) => {
  //revalidate the homepage and past brews pages after an update is made
  revalidatePath('/')
  revalidatePath('/past')
  return doc
}
