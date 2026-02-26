export function MapSRMToHexColor(srm: number): string {
  const roundedSRM = Math.round(srm)
  switch (roundedSRM) {
    case 1:
      return '#FFE699'
    case 2:
      return '#FFD878'
    case 3:
      return '#FFCA5A'
    case 4:
      return '#FFBF42'
    case 5:
      return '#FBB123'
    case 6:
      return '#F8A600'
    case 7:
      return '#F39C00'
    case 8:
      return '#EA8F00'
    case 9:
      return '#E58500'
    case 10:
      return '#DE7C00'
    case 11:
      return '#D77200'
    case 12:
      return '#CF6900'
    case 13:
      return '#C76200'
    case 14:
      return '#C25E00'
    case 15:
      return '#BE5500'
    case 16:
      return '#B54C00'
    case 17:
      return '#AB4300'
    case 18:
      return '#A63100'
    case 19:
      return '#A01E00'
    case 20:
      return '#8B1A00'
    case 21:
      return '#882000'
    case 22:
      return '#821E00'
    case 23:
      return '#7C1C00'
    case 24:
      return '#751A00'
    case 25:
      return '#6F1800'
    case 26:
      return '#691600'
    case 27:
      return '#631400'
    case 28:
      return '#5D1200'
    case 29:
      return '#571000'
    case 30:
      return '#510E00'
    case 31:
      return '#4B0C00'
    case 32:
      return '#450A00'
    case 33:
      return '#3F0800'
    case 34:
      return '#390600'
    case 35:
      return '#330400'
    case 36:
      return '#2D0200'
    case 37:
      return '#270000'
    case 38:
      return '#210000'
    case 39:
      return '#1B0000'
    case 40:
    default:
      return '#150000'
  }
}

export interface MedalHexCombos {
  medalColor1: string
  medalColor2: string
  ribbonColor: string
}
export function MapMedalToHexCombos(place: string): MedalHexCombos {
  switch (place) {
    case 'first':
      return {
        medalColor1: '#FFD700',
        medalColor2: '#FFC300',
        ribbonColor: '#FF5733',
      }
    case 'second':
      return {
        medalColor1: '#C0C0C0',
        medalColor2: '#BEBEBE',
        ribbonColor: '#3357FF',
      }
    case 'third':
    default:
      return {
        medalColor1: '#CD7F32',
        medalColor2: '#B87333',
        ribbonColor: '#33FF57',
      }
  }
}
