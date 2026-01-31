import { BrewItem } from '@/services/api'
import { CollectionBeforeChangeHook } from 'payload'

/**
 * Sets the default image before saving the BrewItem
 */
export const addDefaultImageToBrewItem: CollectionBeforeChangeHook<BrewItem> = async ({
  data,
  req,
}) => {
  try {
    if (!data.brewPhoto) {
      const mediaFileSearch = await req.payload.find({
        collection: 'beermedia',
        where: {
          filename: {
            equals: 'beerMug.png',
          },
        },
        limit: 1,
      })

      const mediaFile = mediaFileSearch.docs.at(0)
      if (mediaFile) {
        data.brewPhoto = mediaFile.id
      }
    }
  } catch (error) {
    console.error('Error setting default image:', error)
  }

  return data
}
