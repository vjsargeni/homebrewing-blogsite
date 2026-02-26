import { BrewStatus } from '@/consts/string'
import { Beermedia } from '@/payload-types'
import { Batch, BrewFatherRecipe } from '../brewFather'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type BrewItem = {
  id: string
  brewName: string
  brewStyle: string
  brewPhoto?: Beermedia | string //media obj
  medal?: string
  brewDescription: SerializedEditorState //RTE obj
  brewingStatus: BrewStatus
  shouldUpdateBatch: boolean
  shouldUpdateRecipe: boolean
  brewFatherRecipeId?: string
  brewFatherBatchId?: string
  recipe?: BrewFatherRecipe
  batchData?: Batch
}

export type BeveragePageData = {
  brew: BrewItem
}
