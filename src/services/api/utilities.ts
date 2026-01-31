import { getPayload, Where } from 'payload'
import config from '@payload-config'
import { Beermedia, Brew } from '@/payload-types'
import { BeveragePageData, BrewItem } from './types'
import { transformBrewsToBrewItems, transformSingleBrewToBrewItem } from './transform'

const payload = await getPayload({ config })

const GetAllBrewsFromPayload = async function (): Promise<BrewItem[]> {
  const fallbackImg = await GetPlaceHolderImage() //preload placeholder image
  const result = await payload.find({
    collection: 'brew', // required
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false, // If you want to disable pagination count, etc.
    //where: {}, // pass a `where` query here
    sort: '-age',
  })

  return transformBrewsToBrewItems(result, fallbackImg)
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
    const fallbackImg = await GetPlaceHolderImage() //preload placeholder image
    return transformSingleBrewToBrewItem(result, fallbackImg)
  } else {
    return undefined
  }
}

const GetBeveragePage = async function (brewId: string): Promise<BeveragePageData | undefined> {
  const brewItem = await GetSingleBrewFromPayload(brewId)

  if (brewItem) {
    return {
      brew: brewItem,
    }
  } else {
    return undefined
  }
}

const GetPlaceHolderImage = async function (): Promise<Beermedia> {
  const mediaFileSearch = await payload.find({
    collection: 'beermedia',
    where: {
      filename: {
        equals: 'beerMug.png',
      },
    },
    limit: 1,
  })

  return mediaFileSearch.docs.at(0)!
}

const GetMainLogo = async function (): Promise<Beermedia> {
  const mediaFileSearch = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: 'logo-svg.svg',
      },
    },
    limit: 1,
  })

  return mediaFileSearch.docs.at(0)!
}

const GetBrewsFromPayloadByCondition = async function (
  query: Where,
  limit: number,
): Promise<BrewItem[]> {
  const fallbackImg = await GetPlaceHolderImage() //preload placeholder image
  const result = await payload.find({
    collection: 'brew', // required
    depth: 2,
    page: 1,
    limit: limit,
    where: query, // pass a `where` query here
    sort: '-age',
  })

  return transformBrewsToBrewItems(result, fallbackImg)
}

const UpdatePayloadBrewItemById = async function (
  updateData: object,
  id: string,
): Promise<Brew | undefined> {
  const result = await payload.update({
    collection: 'brew', // required
    id: id, // required
    data: updateData, //required
    depth: 2,
    // If your collection supports uploads, you can upload
    // a file directly through the Local API by providing
    // its full, absolute file path.
    //filePath: path.resolve(__dirname, './path-to-image.jpg'),

    // If you are uploading a file and would like to replace
    // the existing file instead of generating a new filename,
    // you can set the following property to `true`
    overwriteExistingFiles: true,
  })

  if (result) {
    return result
  } else {
    console.log(`[UpdatePayloadBrewItemById] failed to update BrewItem at id:${id}`)
    return undefined
  }
}

export {
  GetPlaceHolderImage,
  GetAllBrewsFromPayload,
  GetBeveragePage,
  GetMainLogo,
  GetBrewsFromPayloadByCondition,
  UpdatePayloadBrewItemById,
}
