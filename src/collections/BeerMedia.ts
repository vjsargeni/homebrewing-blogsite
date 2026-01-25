import type { CollectionConfig } from 'payload'

export const BeerMedia: CollectionConfig = {
  slug: 'beermedia',
  labels: {
    singular: 'Beer Media',
    plural: 'Beer Media',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  upload: true,
}
