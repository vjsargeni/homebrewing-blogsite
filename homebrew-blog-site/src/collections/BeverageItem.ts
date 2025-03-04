import type { CollectionConfig } from 'payload'

export const BeverageItem: CollectionConfig = {
  slug: 'brew',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brewName',
      type: 'text',
      required: true,
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
  ],
}
