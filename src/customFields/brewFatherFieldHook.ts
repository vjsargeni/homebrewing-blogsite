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

    const recipeResponse = data.brewFatherRecipeId ?  await BrewfatherService.GetRecipeFromBrewfather(data.brewFatherRecipeId): undefined;    
    const batchResponse = data.brewFatherBatchId ? await BrewfatherService.GetBatchFromBrewfather(data.brewFatherBatchId): undefined;

    data.recipe = recipeResponse
    data.batchData = batchResponse
  } catch (error) {
    console.error('Error during external API call:', error)
  }

  return data
}
