//not currently in use, leaving for later
// import { GetBrewsFromPayloadByCondition, GetRecipeFromBrewfather } from '@/services/api/utilities'
// import type { Field, Where } from 'payload'

// const BrewfatherIdField: Field = {
//   name: 'brewfatherId',
//   type: 'text',
//   hooks: {
//     afterChange: [
//       async ({ value, previousValue, req }) => {
//         if (value !== previousValue) {
//           //pull data from Brewfather
//           const recipeData = await GetRecipeFromBrewfather(value)

//           if (recipeData) {
//             //find brewItem
//             const query: Where = { brewfatherId: { equals: value } }
//             const brewItemDoc = await GetBrewsFromPayloadByCondition(query, 1)
//             if (brewItemDoc.length) {
//               const brewItemId = brewItemDoc[0].id
//             }

//             //brewItemDoc
//           }

//           //update with JSON
//         }
//       },
//     ],
//   },
// }

// export default BrewfatherIdField
