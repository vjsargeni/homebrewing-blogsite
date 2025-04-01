import { Media } from '@/payload-types'

export type BrewItem = {
  id: string
  brewName: string
  brewStyle: string
  brewPhoto?: Media | string //media obj?
  brewDescription: string //RTE obj
  brewingStatus: string
  brewFatherId?: string
}

export type BeveragePageData = {
  brew: BrewItem
  recipe?: BrewFatherRecipe
}

export interface BrewFatherRecipe {
  _id: string
  name: string
  author: string
  type: string
  equipment: Equipment
  style: Style
  fermentables: Fermentable[]
  abv: number
  hops: Hop[]
  ibu: number
  og: number
  fg: number
  yeasts: Yeast[]
  color: number
  ibuFormula: string
  nutrition: Nutrition
}

export interface Equipment {
  name: string
}

export interface Style {
  carbMin: number
  type: string
  rbrMin: number
  _id: string
  carbMax: number
  ibuMax: number
  rbrMax: number
  colorMin: number
  categoryNumber: string
  lovibondMin: number
  abvMin: number
  name: string
  ogMax: number
  fgMin: number
  buGuMax: number
  styleLetter: string
  colorMax: number
  fgMax: number
  lovibondMax: number
  ibuMin: number
  category: string
  buGuMin: number
  abvMax: number
  styleGuide: string
  ogMin: number
}

export interface Fermentable {
  friability: any
  costPerAmount: any
  potentialPercentage: number
  fan: any
  inventory: any
  acid: any
  percentage: number
  notes: string
  manufacturingDate: any
  fgdb: any
  type: string
  substitutes: string
  notFermentable: boolean
  maxInBatch: any
  attenuation?: number
  potential: number
  supplier: string
  cgdb: any
  name: string
  color: number
  moisture: any
  ibuPerAmount: any
  amount: number
  userNotes: string
  bestBeforeDate: any
  protein: any
  origin: string
  usedIn: string
  grainCategory: string
  _id: string
  diastaticPower: any
  coarseFineDiff: any
}

export interface Hop {
  type: string
  _id: string
  origin: string
  usage: string
  name: string
  alpha: number
  notes: string
  substitutes: string
  usedIn: string
  userNotes: string
  myrcene: any
  humulene: any
  caryophyllene: any
  farnesene: any
  oil: any
  beta: any
  cohumulone: any
  hsi: any
  year: any
  manufacturingDate: any
  bestBeforeDate: any
  amount: number
  use: string
  time: number
  temp: any
  ibu: number
  actualTime: any
}

export interface Yeast {
  description: string
  hidden: boolean
  flocculation: string
  maxTemp: number
  maxAbv: number
  type: string
  unit: string
  attenuation: number
  minAttenuation: number
  maxAttenuation: number
  _id: string
  laboratory: string
  fermentsAll: boolean
  form: string
  minTemp: number
  productId: string
  name: string
  userNotes: string
  manufacturingDate: any
  bestBeforeDate: any
  amount: number
}

export interface Nutrition {
  calories: Calories
  carbs: Carbs
}

export interface Calories {
  alcohol: number
  carbs: number
  total: number
  kJ: number
}

export interface Carbs {
  total: number
}
