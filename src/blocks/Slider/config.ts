
import { Block } from "payload";



export const Slider: Block = {
  slug: 'slider',
  interfaceName: 'slider',
  labels: {
    singular: 'slider',
    plural: 'sliders'
  },

  fields: [
    {
      name: 'media',
      type: 'array',
      label: 'Image Slider',
      minRows: 3,

      fields: [
        {
          name: 'Images',
          type: 'upload',
          relationTo: 'media',
          required: true
        },

      ]

    }
  ]
}