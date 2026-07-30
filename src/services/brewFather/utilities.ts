import { Batch, BrewFatherRecipe } from './types'

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

const headers = {
  Authorization: `Basic ${process.env.BF_API_KEY ?? ''}`,
}

export const GetRecipeFromBrewfather = async function (
  id: string,
): Promise<BrewFatherRecipe | undefined> {
  try {
    const result = await fetch(
      `https://api.brewfather.app/v2/recipes/${id}?include=${brewfatherIncludeItems.join(',')}`,
      { headers: headers },
    )

    return (await result.json()) as BrewFatherRecipe
  } catch (ex) {
    console.error(ex)
    return undefined
  }
}

export const GetBatchFromBrewfather = async function (id: string): Promise<Batch | undefined> {
  try {
    const result = await fetch(`https://api.brewfather.app/v2/batches/${id}`, { headers: headers })

    return (await result.json()) as Batch
  } catch (ex) {
    console.error(ex)
    return undefined
  }
}
