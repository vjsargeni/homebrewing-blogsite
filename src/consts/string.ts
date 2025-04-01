//---TYPES---
export type BrewStausKey = keyof typeof BREWING_STATUS
export type BrewStatus = (typeof BREWING_STATUS)[BrewStausKey]

//---Constants---

export const BREWING_STATUS = {
  UPCOMING: 'upcoming',
  PAST: 'past',
  DRAFT: 'draft',
  BOTTLED: 'bottled',
  CONDITIONING: 'conditioning',
} as const
