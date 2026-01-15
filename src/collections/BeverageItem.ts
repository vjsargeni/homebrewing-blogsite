import { addDefaultImageToBrewItem } from '@/customFields/addDefaultImageHook'
import { syncProductToBrewfatherAPI } from '@/customFields/brewFatherFieldHook'
import type { CollectionConfig } from 'payload'

export const BeverageItem: CollectionConfig = {
  slug: 'brew',
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [syncProductToBrewfatherAPI, addDefaultImageToBrewItem],
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
      name: 'medal',
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
      label: 'Recipe JSON',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          admin: { readOnly: true },
          name: 'recipe',
          type: 'json',
        },
      ],
    },
    {
      label: 'Batch JSON',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          admin: { readOnly: true },
          name: 'batchData',
          type: 'json',
        },
      ],
    },
  ],
}
