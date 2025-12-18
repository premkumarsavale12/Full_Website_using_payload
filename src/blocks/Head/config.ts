import { Block } from 'payload'

export const Head: Block = {
    slug: 'head',

    interfaceName: 'head',
    labels: {
        singular: 'head',
        plural: 'heads',
    },

    fields: [
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },

        {
            name: 'Navigation',
            type: 'array',
            label: 'Navigation Menu',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },

                {
                    name: 'linkType',
                    type: 'select',
                    options: [
                        { label: 'Internal Page', value: 'reference' },
                        { label: 'Custom URL', value: 'custom' },
                    ],
                    defaultValue: 'reference',
                },

                {
                    name: 'page',
                    type: 'relationship',
                    relationTo: 'pages',
                    admin: {
                        condition: (_, siblingData) => siblingData.linkType === 'reference',
                    },
                },
                {
                    name: 'url',
                    type: 'text',
                    admin: {
                        condition: (_, siblingData) => siblingData.linkType === 'custom',
                    },
                },
            ],
        },
    ],
}
