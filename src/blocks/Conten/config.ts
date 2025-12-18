import { Block } from "payload";



export const Conten: Block = {
    slug: 'conten',
    interfaceName: 'conten',
    labels: {
        singular: 'conten',
        plural: 'contens'
    },

    fields: [
        {
            name: 'cards',
            type: 'array',
            label: 'Cards',
            minRows: 3,
            fields: [

                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true
                },

                {

                    name: 'Paragraph',
                    type: 'textarea',
                    label: 'Paragraph',
                    required: true
                },

                {
                    name: 'AuthorName',
                    type: 'text',
                    label: 'Author Name'
                },

                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'Add Logo',
                    required: true
                }
            ]

        }
    ]
}