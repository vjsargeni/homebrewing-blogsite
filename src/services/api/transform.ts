import { PaginatedDocs } from 'payload'
import { BrewItem } from './types'
import { Beermedia, Brew } from '@/payload-types'
import { Batch } from '../brewFather'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

const transformBrewsToBrewItems = function (
  payloadbrew: PaginatedDocs<Brew>,
  fallbackMedia: Beermedia,
): BrewItem[] {
  return payloadbrew.docs.map((item) => {
    return transformSingleBrewToBrewItem(item, fallbackMedia)
  })
}

const transformSingleBrewToBrewItem = function (
  payloadbrew: Brew,
  fallbackMedia: Beermedia,
): BrewItem {
  return {
    id: payloadbrew.id,
    brewFatherRecipeId: payloadbrew.brewFatherRecipeId ?? undefined,
    brewFatherBatchId: payloadbrew.brewFatherBatchId ?? undefined,
    brewDescription: payloadbrew.brewDescription as SerializedEditorState,
    brewingStatus: payloadbrew.brewingStatus ?? '',
    shouldUpdateBatch: payloadbrew.shouldUpdateBatch ?? false,
    shouldUpdateRecipe: payloadbrew.shouldUpdateRecipe ?? false,
    brewName: payloadbrew.brewName,
    brewStyle: payloadbrew.brewStyle,
    brewPhoto: payloadbrew?.brewPhoto ?? fallbackMedia,
    batchData: payloadbrew.batchData as Batch | undefined,
  }
}

export { transformBrewsToBrewItems, transformSingleBrewToBrewItem }
