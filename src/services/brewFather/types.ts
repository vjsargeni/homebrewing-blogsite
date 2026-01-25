/* eslint-disable @typescript-eslint/no-explicit-any */
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
  potentialPercentage: number
  percentage: number
  notes: string
  type: string
  substitutes: string
  notFermentable: boolean
  attenuation?: number
  potential: number
  supplier: string
  name: string
  color: number
  ibuPerAmount: string
  amount: number
  userNotes: string
  grainCategory: string
  _id: string
  diastaticPower: string
}

export interface Hop {
  type: string
  _id: string
  origin: string
  usage: string
  name: string
  notes: string
  substitutes: string
  userNotes: string
  amount: number
  use: string
  ibu: number
}

export interface Yeast {
  description: string
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
  name: string
  userNotes: string
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

// Boil step
export interface BoilStep {
  time: number
  name: string
}

export interface Misc {
  unit: string
  type: string
  timeIsDays: boolean
  name: string
  _id: string
  use: string
  time: number | null
  amount: number
  displayAmount: number
}

// Recipe-related interfaces
export interface MashStep {
  displayStepTemp: number
  name: string
  type: string
  stepTemp: number
  stepTime: number
}

export interface Mash {
  _id: string
  steps: MashStep[]
  name: string
}

export interface Nutrition {
  calories: {
    alcohol: number
    carbs: number
    total: number
    kJ: number
  }
  carbs: {
    total: number
  }
}

export interface RecipeDefaults {
  preferred: string
  abv: string
  attenuation: string
  color: string
  grainColor: string
  gravity: string
  ibu: string
  temp: string
  volume: string
  weight: string
  hop: string
  carbonation: string
}

export interface CarbonationStyle {
  carbMin: number
  carbMax: number
  name: string
}

export interface RecipeData {
  mashFermentables: Fermentable[]
  otherFermentables: any[]
  hopsAmount: number
}

export interface Recipe {
  miscs: Misc[]
  primaryTemp: number
  _id: string
  name: string
  mash: Mash
  styleRbr: boolean
  totalGravity: number
  _ev: number
  _origin: string | null
  nutrition: Nutrition
  _versionId: string
  og: number
  defaults: RecipeDefaults
  styleOg: boolean
  yeasts: Yeast[]
  styleFg: boolean
  styleConformity: boolean
  styleColor: boolean
  img: string | null
  ibu: number
  ibuFormula: string
  _type: string
  folderRefs: string[]
  carbonationStyle: CarbonationStyle
  styleCarb: boolean
  _versionNumber: number
  type: string
  hopsTotalAmount: number
  fermentablesTotalAmount: number
  buGuRatio: number
  styleBuGu: boolean
  hops: Hop[]
  styleIbu: boolean
  mashEfficiency: number
  hopStandMinutes: number
  fgEstimated: number
  rbRatio: number
  carbonation: number
  _init: boolean
  batchSize: number
  styleAbv: boolean
  boilTime: number
  fermentableIbu: number
  attenuation: number
  abv: number
  _rev: string
  fg: number
  author: string
  thumb: string | null
  fgFormula: string
  color: number
  fermentables: Fermentable[]
  style: Style
  _version: string
}

// Note
export interface BatchNote {
  timestamp: number
  note: string
  type: string
  status?: string
}

// Main Batch interface
export interface Batch {
  _id: string
  batchNo: number
  brewer: string
  brewDate: number
  fermentationStartDate: number
  bottlingDate: number
  batchFermentablesLocal: any[]
  batchYeastsLocal: any[]
  boilSteps: BoilStep[]
  _init: boolean
  batchMiscsLocal: any[]
  estimatedColor: number
  batchHops: Hop[]
  batchYeasts: Yeast[]
  measuredConversionEfficiency: number | null
  measuredKettleEfficiency: number
  estimatedIbu: number
  _version: string
  measurements: any[]
  _type: string
  batchHopsLocal: any[]
  boilStepsCount: number
  batchMiscs: Misc[]
  carbonationForce: number | null
  carbonationType: string
  batchFermentables: Fermentable[]
  measuredMashEfficiency: number
  mashStepsCount: number
  name: string
  estimatedOg: number
  estimatedTotalGravity: number
  measuredEfficiency: number
  estimatedBuGuRatio: number
  measuredOg: number
  measuredAbv: number
  estimatedRbRatio: number
  measuredAttenuation: number
  measuredFg: number
  estimatedFg: number
  bottlingDateSet: boolean
  fermentationStartDateSet: boolean
  recipe: Recipe
  tasteRating: number
  notes: BatchNote[]
  _rev: string
  status: string
}
