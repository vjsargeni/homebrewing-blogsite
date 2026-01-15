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
  friability: string
  costPerAmount: string
  potentialPercentage: number
  fan: string
  inventory: string
  acid: string
  percentage: number
  notes: string
  manufacturingDate: string
  fgdb: string
  type: string
  substitutes: string
  notFermentable: boolean
  maxInBatch: string
  attenuation?: number
  potential: number
  supplier: string
  cgdb: string
  name: string
  color: number
  moisture: string
  ibuPerAmount: string
  amount: number
  userNotes: string
  bestBeforeDate: string
  protein: string
  origin: string
  usedIn: string
  grainCategory: string
  _id: string
  diastaticPower: string
  coarseFineDiff: string
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
  myrcene: string
  humulene: string
  caryophyllene: string
  farnesene: string
  oil: string
  beta: string
  cohumulone: string
  hsi: string
  year: string
  manufacturingDate: string
  bestBeforeDate: string
  amount: number
  use: string
  time: number
  temp: string
  ibu: number
  actualTime: string
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
  manufacturingDate: string
  bestBeforeDate: string
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

// Device configurations
export interface DeviceConfig {
    enabled: boolean
    items: any[]
    brewDeviceId?: string | null
  }
  
  export interface Devices {
    tilt: DeviceConfig
    iSpindel: DeviceConfig
    floatHydrometer: DeviceConfig
    floatyHydrometer: DeviceConfig
    raptCloud: DeviceConfig
    brewPiLess: DeviceConfig
    myBrewbot: DeviceConfig
    stream: DeviceConfig
    smartPid: DeviceConfig
    gfcc: DeviceConfig
    plaatoAirlock: DeviceConfig
    plaatoKeg: DeviceConfig
  }
  
  // Boil step
  export interface BoilStep {
    time: number
    name: string
  }
  
  // Batch ingredients
  export interface BatchHop {
    _id: string
    usage: string
    alpha: number
    origin: string
    name: string
    type: string
    costPerAmount: number
    inventory: number
    amount: number
    displayAmount: number
    notInRecipe: boolean
    totalCost: number
  }
  
  export interface BatchYeast {
    _id: string
    name: string
    form: string
    attenuation: number
    fermentsAll: boolean
    unit: string
    flocculation: string
    minTemp: number
    productId: string
    maxAbv: number
    type: string
    laboratory: string
    maxTemp: number
    inventoryUnit: string
    costPerAmount: number
    inventory: number
    amount: number
    displayAmount: number
    notInRecipe: boolean
    totalCost: number
  }
  
  export interface BatchMisc {
    unit: string
    type: string
    waterAdjustment: boolean
    timeIsDays: boolean
    name: string
    _id: string
    use: string
    time: number | null
    inventoryUnit: string
    costPerAmount: number
    inventory: number
    amount: number
    displayAmount: number
    notInRecipe: boolean
    totalCost: number
  }
  
  export interface BatchFermentableItem {
    attenuation: number | null
    name: string
    potentialPercentage: number
    origin: string
    ibuPerAmount: number | null
    potential: number
    notFermentable: boolean | null
    type: string
    supplier: string
    _id: string
    color: number
    costPerAmount: number
    inventory: number
    amount: number
    displayAmount: number
    notInRecipe: boolean
    totalCost: number
  }
  
  // Cost breakdown
  export interface Cost {
    fermentables: number
    hops: number
    miscs: number
    yeasts: number
    total: number
    perBottlingLiter: number
    fermentablesShare: number
    hopsShare: number
    miscsShare: number
    yeastsShare: number
  }
  
  // Timestamps
  export interface Timestamp {
    _seconds: number
    _nanoseconds: number
  }
  
  // Recipe-related interfaces
  export interface MashStep {
    displayStepTemp: number
    name: string
    type: string
    rampTime: number | null
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
    pressure: string
    carbonation: string
    altitude: string
  }
  
  export interface RecipeYeast {
    productId: string
    bestBeforeDate: string | null
    name: string
    laboratory: string
    attenuation: number
    maxTemp: number
    userNotes: string
    type: string
    maxAttenuation: number | null
    manufacturingDate: string | null
    fermentsAll: boolean
    _id: string
    flocculation: string
    amount: number
    minTemp: number
    unit: string
    description: string
    minAttenuation: number | null
    form: string
    maxAbv: number
  }
  
  export interface RecipeHop {
    origin: string
    use: string
    userNotes: string
    bestBeforeDate: string | null
    hsi: number | null
    substitutes: string
    myrcene: number | null
    name: string
    humulene: number | null
    ibu: number
    manufacturingDate: string | null
    caryophyllene: number | null
    oil: number | null
    alpha: number
    time: number
    notes: string
    actualTime: number | null
    usedIn: string
    year: number | null
    cohumulone: number | null
    farnesene: number | null
    temp: number | null
    beta: number | null
    type: string
    usage: string
    _id: string
    amount: number
  }
  
  export interface RecipeMisc {
    name: string
    amount: number
    timeIsDays: boolean
    unit: string
    _id: string
    time: number | null
    use: string
    waterAdjustment: boolean
    type: string
    concentration?: number | null
  }
  
  export interface CarbonationStyle {
    carbMin: number
    carbMax: number
    name: string
  }
  
  export interface Water {
    spargeAcidPhAdjustment: number
    enableAcidAdjustments: boolean
    settings: Record<string, any>
    totalAdjustments: Record<string, any>
    acidPhAdjustment: number
    mashAdjustments: Record<string, any>
    sparge: Record<string, any>
    diluted: any
    source: Record<string, any>
    mashPh: number
    dilutionPercentage: number | null
    mashTargetDiff: Record<string, any>
    mash: Record<string, any>
    total: Record<string, any>
    enableSpargeAdjustments: boolean
    mashWaterAmount: number | null
    totalTargetDiff: Record<string, any>
    spargeAdjustments: Record<string, any>
    mashPhDistilled: number
    style: string
    sourceTargetDiff: Record<string, any>
    spargeWaterAmount: number | null
    meta: Record<string, any>
    spargeTargetDiff: Record<string, any>
    dilutionAmount: number
    target: Record<string, any>
  }
  
  export interface RecipeStyle {
    buGuMax: number
    fgMin: number
    lovibondMin: number
    colorMin: number
    ibuMin: number
    abvMin: number
    type: string
    lovibondMax: number
    rbrMax: number
    ogMin: number
    category: string
    ibuMax: number
    rbrMin: number
    colorMax: number
    carbMax: number
    buGuMin: number
    styleLetter: string
    name: string
    categoryNumber: string
    carbMin: number
    styleGuide: string
    _id: string
    abvMax: number
    fgMax: number
    ogMax: number
  }
  
  export interface RecipeEquipment {
    spargeWaterFormula: string
    mashEfficiency: number
    mashWaterMin: number
    efficiencyType: string
    notes: string
    aromaHopUtilization: number
    trubChillerLoss: number
    spargeTemperature: number
    grainAbsorptionRate: number
    mashWaterMax: number
    fermenterVolumeBeforeTopUp: number
    name: string
    brewhouseEfficiency: number
    hidden: boolean
    spargeWaterOverflow: string
    waterGrainRatio: number
    _rev: string
    batchSize: number
    mashTunLoss: number
    bottlingVolume: number
    fermenterLossEstimate: number
    boilTime: number
    evaporationRate: number
    calcMashEfficiency: boolean
    calcAromaHopUtilization: boolean
    fermenterVolume: number
    _timestamp: Timestamp
    boilSize: number
    mashWaterVolumeLimitEnabled: boolean
    _timestamp_ms: number
    mashWaterFormula: string
    calcStrikeWaterTemperature: boolean
    postBoilKettleVol: number
    _id: string
    hopstandTemperature: number
    boilOffPerHr: number
    calcBoilVolume: boolean
    _meta: Record<string, any>
    mashTunDeadSpace: number
    mashTunHeatCapacity: number
    _created: Timestamp
    fermenterLoss: number
    _version: string
    hopUtilization: number
    waterCalculation: string
    efficiency: number
  }
  
  export interface RecipeData {
    mashFermentablesAmount: number
    allDiastaticPower: boolean
    totalDiastaticPower: number
    mashFermentables: BatchFermentableItem[]
    otherFermentablesAmount: number
    otherFermentables: any[]
    mashWaterAmount: number
    spargeWaterAmount: number
    mashVolumeSurplus: number
    topUpWater: number
    batchSpargeWaterAmount1: number | null
    batchSpargeWaterAmount2: number | null
    batchSpargeWaterAmount3: number | null
    batchSpargeWaterAmount4: number | null
    hltWaterAmount: number
    totalWaterAmount: number
    hopsAmount: number
    strikeTemp: number
    mashVolume: number
  }
  
  export interface FermentationStep {
    stepTemp: number
    type: string
    stepTime: number
    actualTime: number
    displayStepTemp: number
    displayPressure: number | null
    pressure: number | null
    ramp: number | null
  }
  
  export interface Fermentation {
    steps: FermentationStep[]
    name: string
    _id: string
  }
  
  export interface Recipe {
    miscs: RecipeMisc[]
    primaryTemp: number
    _id: string
    name: string
    mash: Mash
    avgWeightedHopstandTemp: number
    ogPlato: number
    yeastToleranceExceededBy: number | null
    styleRbr: boolean
    totalGravity: number
    _ev: number
    _origin: string | null
    nutrition: Nutrition
    _versionId: string
    og: number
    defaults: RecipeDefaults
    styleOg: boolean
    yeasts: RecipeYeast[]
    styleFg: boolean
    styleConformity: boolean
    styleColor: boolean
    sumDryHopPerLiter: number
    img: string | null
    ibu: number
    sumAromaHopPerLiter: number
    ibuFormula: string
    _type: string
    folderRefs: string[]
    carbonationStyle: CarbonationStyle
    styleCarb: boolean
    _versionNumber: number
    boilSize: number
    efficiency: number
    type: string
    hopsTotalAmount: number
    fermentablesTotalAmount: number
    buGuRatio: number
    styleBuGu: boolean
    hops: RecipeHop[]
    styleIbu: boolean
    _created: Timestamp
    mashEfficiency: number
    hopStandMinutes: number
    diastaticPower: number
    fgEstimated: number
    rbRatio: number
    firstWortGravity: number | null
    carbonation: number
    _share: string | null
    _init: boolean
    water: Water
    batchSize: number
    extraGravity: number
    styleAbv: boolean
    boilTime: number
    fermentableIbu: number
    attenuation: number
    abv: number
    _rev: string
    tags: string | null
    path: string
    searchTags: any[]
    fg: number
    _public: boolean
    author: string
    thumb: string | null
    fgFormula: string
    color: number
    fermentables: BatchFermentableItem[]
    fermentation: Fermentation
    hidden: boolean
    _timestamp: Timestamp
    style: RecipeStyle
    data: RecipeData
    equipment: RecipeEquipment
    postBoilGravity: number
    preBoilGravity: number
    _version: string
    _timestamp_ms: number
  }
  
  // Event
  export interface BatchEvent {
    eventType: string
    descriptionHTML: string
    notifyTime: number
    time: number
    eventText: string
    title: string
    active: boolean
    dayEvent: boolean
    description: string
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
    _archived: boolean
    batchNo: number
    brewer: string
    brewDate: number
    fermentationStartDate: number
    bottlingDate: number
    devices: Devices
    hideBatchEvents: boolean
    batchFermentablesLocal: any[]
    batchYeastsLocal: any[]
    boilSteps: BoilStep[]
    _init: boolean
    hidden: boolean
    batchMiscsLocal: any[]
    estimatedColor: number
    batchHops: BatchHop[]
    batchYeasts: BatchYeast[]
    measuredConversionEfficiency: number | null
    measuredKettleEfficiency: number
    estimatedIbu: number
    _version: string
    measurements: any[]
    cost: Cost
    _type: string
    batchHopsLocal: any[]
    brewControllerEnabled: boolean
    boilStepsCount: number
    fermentationControllerEnabled: boolean
    batchMiscs: BatchMisc[]
    carbonationForce: number | null
    carbonationType: string
    batchFermentables: BatchFermentableItem[]
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
    measuredBottlingSize: number
    _created: Timestamp
    recipe: Recipe
    primingSugarEquiv: number
    tasteRating: number
    notes: BatchNote[]
    _rev: string
    _timestamp_ms: number
    _timestamp: Timestamp
    events: BatchEvent[]
    status: string
  }