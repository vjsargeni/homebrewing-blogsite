import { getPayload, PaginatedDocs, Where } from 'payload'
import config from '@payload-config'
import { Brew } from '@/payload-types'
import { BeveragePageData, BrewFatherRecipe, BrewItem } from './types'
import { transformBrewsToBrewItems, transformSingleBrewToBrewItem } from './transform'
import axios from 'axios'
import BeveragePage from '@/components/pages/BeveragePage'

const payload = await getPayload({ config })
export const brewfatherIncludeItems = [
  'fermentables',
  'style',
  'abv',
  'hops',
  'ibu',
  'og',
  'fg',
  'yeasts',
  'color',
  'ibuFormula',
  'author',
  'nutrition',
]

const GetAllBrewsFromPayload = async function (): Promise<BrewItem[]> {
  const result = await payload.find({
    collection: 'brew', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false, // If you want to disable pagination count, etc.
    //where: {}, // pass a `where` query here
    sort: '-age',
  })

  return transformBrewsToBrewItems(result)
}

const GetSingleBrewFromPayload = async function (id: string): Promise<BrewItem | undefined> {
  const result = await payload
    .findByID({
      collection: 'brew', // required
      id: id, // required
      depth: 2,
    })
    .catch(() => undefined)

  if (result) {
    return transformSingleBrewToBrewItem(result)
  } else {
    return undefined
  }
}

const GetBeveragePage = async function (brewId: string): Promise<BeveragePageData | undefined> {
  const brewItem = await GetSingleBrewFromPayload(brewId)

  if (brewItem) {
    return {
      brew: brewItem,
      recipe: brewItem.brewFatherId
        ? await GetRecipeFromBrewfather(brewItem.brewFatherId)
        : undefined,
    }
  } else {
    return undefined
  }
}

const GetBrewsFromPayloadByCondition = async function (
  query: Where,
  limit: number,
): Promise<BrewItem[]> {
  const result = await payload.find({
    collection: 'brew', // required
    depth: 2,
    page: 1,
    limit: limit,
    where: query, // pass a `where` query here
    sort: '-age',
  })

  return transformBrewsToBrewItems(result)
}

const GetRecipeFromBrewfather = async function (id: string): Promise<BrewFatherRecipe | undefined> {
  const headers = {
    Authorization: `Basic ${process.env.BF_API_KEY ?? ''}`,
  }

  try {
    const result = await axios({
      method: 'get',
      url: `https://api.brewfather.app/v2/recipes/${id}?include=${brewfatherIncludeItems.join(',')}`,
      headers: headers,
    })

    return result.data as BrewFatherRecipe
  } catch {
    return undefined
  }
}

export { GetAllBrewsFromPayload, GetBeveragePage, GetBrewsFromPayloadByCondition }
