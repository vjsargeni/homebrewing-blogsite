import { BrewStatus } from '@/consts/string'
import { Media } from '@/payload-types'
import { Batch, BrewFatherRecipe } from '../brewFather'

export type BrewItem = {
  id: string
  brewName: string
  brewStyle: string
  brewPhoto?: Media | string //media obj?
  brewDescription: string //RTE obj
  brewingStatus: BrewStatus
  brewFatherRecipeId?: string
  brewFatherBatchId?: string
  recipe?: BrewFatherRecipe
  batchData?: Batch
}

export type BeveragePageData = {
  brew: BrewItem
}

