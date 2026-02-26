import { syncProductToBrewfatherAPI } from '@/hooks/brewFatherFieldHook'
import { revalidateBrewItemHomePage } from '@/hooks/revalidateBrewItemHook'
import type { CollectionConfig } from 'payload'

export const BeverageItem: CollectionConfig = {
  slug: 'brew',
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [syncProductToBrewfatherAPI],
    afterChange: [revalidateBrewItemHomePage],
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
      relationTo: 'beermedia',
    },
    {
      name: 'medal',
      type: 'radio',
      options: [
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
        { label: 'Third', value: 'third' },
        { label: 'None', value: 'none' },
      ],
    },
    {
      name: 'brewDescription',
      type: 'richText',
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
      type: 'checkbox',
      name: 'shouldUpdateRecipe',
      label: 'Update Recipe from Brewfather on Save?',
      defaultValue: false,
    },
    {
      type: 'checkbox',
      name: 'shouldUpdateBatch',
      label: 'Update Batch from Brewfather on Save?',
      defaultValue: false,
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
