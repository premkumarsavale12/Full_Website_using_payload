import { Block } from "payload";

export const Partner: Block = {
    slug: 'partner',
    interfaceName: 'partner',
    labels: {
        singular: 'partner',
        plural: 'partners'
    },
    fields: [
        {
            name: 'Partner',
            type: 'array',
            minRows: 3,
            label: "Uplaod Partner Images ",
            fields: [
                {
                    name: 'partner',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ]
}