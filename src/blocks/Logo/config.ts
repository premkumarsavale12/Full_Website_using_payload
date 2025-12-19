import { Block } from "payload";

export const Logo: Block = {
    slug: 'logo',
    interfaceName: 'logo',
    labels: {
        singular: 'logo',
        plural: 'logos'
    },
    fields:
        [

            {
                name: 'heading',
                type: 'text',
                label: 'Heading',

            },

            {
                name: 'Paragraph',
                type: 'textarea',
                label: 'paragrapg'
            },
            {
                name: 'Logo',
                type: 'array',
                minRows: 3,
                fields:
                    [

                        {
                            name: 'Images',
                            type: 'upload',
                            label: "Upload Images",
                            relationTo: 'media',
                            required: true
                        },


                    ]
            }
        ]
}

