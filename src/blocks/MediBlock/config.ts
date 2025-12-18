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

            name: 'Image',
            type: 'upload',
            label: 'Image Upload',
            relationTo: 'media',
            required: true
        }
    ]
}

