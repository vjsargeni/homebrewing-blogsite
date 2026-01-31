import { BrewItem } from '@/services/api'
import { BrewfatherService } from '@/services/brewFather'
import { CollectionBeforeChangeHook } from 'payload'

/**
 * Returns recipe and/or batch data OR undefined to CMS fields before a save. Data is then stored in CMS for fetching later
 */
export const syncProductToBrewfatherAPI: CollectionBeforeChangeHook<BrewItem> = async ({
  data,
}) => {
  try {
    if (data.shouldUpdateBatch) {
      const batchResponse = data.brewFatherBatchId
        ? await BrewfatherService.GetBatchFromBrewfather(data.brewFatherBatchId)
        : undefined
      data.batchData = batchResponse
      data.shouldUpdateBatch = false
    }

    if (data.shouldUpdateRecipe) {
      const recipeResponse = data.brewFatherRecipeId
        ? await BrewfatherService.GetRecipeFromBrewfather(data.brewFatherRecipeId)
        : undefined

      data.shouldUpdateRecipe = false
      data.recipe = recipeResponse
    }
  } catch (error) {
    console.error('Error during external API call:', error)
  }

  return data
}
