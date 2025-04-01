import { PaginatedDocs } from 'payload'
import { BrewItem } from './types'
import { Brew } from '@/payload-types'

const transformBrewsToBrewItems = function (payloadbrew: PaginatedDocs<Brew>): BrewItem[] {
  return payloadbrew.docs.map((item) => {
    return transformSingleBrewToBrewItem(item)
  })
}

const transformSingleBrewToBrewItem = function (payloadbrew: Brew): BrewItem {
  return {
    id: payloadbrew.id,
    brewFatherId: payloadbrew.brewfatherId ?? undefined,
    brewDescription: payloadbrew.brewDescription ?? '',
    brewingStatus: payloadbrew.brewingStatus ?? '',
    brewName: payloadbrew.brewName,
    brewStyle: payloadbrew.brewStyle,
    brewPhoto: payloadbrew.brewPhoto ?? undefined,
  }
}

export { transformBrewsToBrewItems, transformSingleBrewToBrewItem }
