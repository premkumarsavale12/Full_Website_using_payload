import { Block } from "payload";


export const MediBlock: Block = {

    slug: 'mediBlock',
    interfaceName: 'mediBlock',
    labels: {
        singular: 'mediBlock',
        plural: 'mediBlocks'
    },

    fields: [
        {

            name: 'image',
            type: 'upload',
            label: 'Image Upload',
            relationTo: 'media',
            required: true
        }
    ]
}

