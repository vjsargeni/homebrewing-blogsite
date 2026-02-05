import { BREWING_STATUS, BrewStatus } from '@/consts/string'

export const GetStatusText = (status: BrewStatus) => {
  switch (status) {
    case BREWING_STATUS.DRAFT:
      return 'On Draft Now'
    case BREWING_STATUS.BOTTLED:
      return 'Bottled and Ready'
    case BREWING_STATUS.CONDITIONING:
    case BREWING_STATUS.UPCOMING:
      return 'Coming Soon'
    case BREWING_STATUS.PAST:
    default:
      return 'No Longer Available'
  }
}
