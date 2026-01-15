import { syncProductToBrewfatherAPI } from '@/customFields/brewFatherFieldHook'
import type { CollectionConfig } from 'payload'

export const BeverageItem: CollectionConfig = {
  slug: 'brew',
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [syncProductToBrewfatherAPI],
  },
  fields: [
    {
      name: 'brewName',
      type: 'text',
      required: true,
    },
    {
      name: 'brewFatherRecipeId',
      type: 'text',
    },
    {
      name: 'brewFatherBatchId',
      type: 'text',
    },
    {
      name: 'brewStyle',
      type: 'text',
      required: true,
    },
    {
      name: 'brewPhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'brewDescription',
      type: 'text',
    },
    {
      name: 'brewingStatus',
      type: 'radio',
      required: true,
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'On Draft', value: 'draft' },
        { label: 'Bottled', value: 'bottled' },
        { label: 'Conditioning', value: 'conditioning' },
        { label: 'Past', value: 'past' },
      ],
    },
    {
      admin: { readOnly: true },
      label: 'Recipe JSON',
      name: 'recipe',
      type: 'json',
    },
    {
      admin: { readOnly: true },
      label: 'Batch JSON',
      name: 'batchData',
      type: 'json',
    },
  ],
}
