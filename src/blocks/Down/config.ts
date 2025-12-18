import { Block } from "payload";



export const Down: Block = {
    slug: 'down',
    interfaceName: 'down',
    labels: {
        singular: 'down',
        plural: 'downs'
    },

    fields: [
        {
            name: 'contact',
            type: 'group',
            label: 'Contact Section',
            fields: [
                {
                    name: 'companyName',
                    type: 'text'
                },
                {
                    name: "street",
                    type: "text"
                },
                {
                    name: "zipCity",
                    type: "text"
                },
                {
                    name: "country",
                    type: "text"
                },
                {
                    name: "email",
                    type: "email"
                },
                {
                    name: "phone",
                    type: "text"
                },
            ]
        },

        {
            name: 'officeHourse',
            type: 'array',
            labels:
            {
                singular: "Day",
                plural: "Days"
            },
            fields: [
                {
                    name: 'days',
                    type: 'text'
                },
                {
                    name: 'time',
                    type: 'text'
                }
            ]

        },

        {
            name: 'navigation',
            type: 'array',
            label: 'navigation link',
            fields:
                [
                    { name: "label", type: "text" },
                    { name: "url", type: "text" },
                ]
        },

        {
            name: 'legalLinks',
            label: "legal  Links",
            type: 'array',
            fields: [
                { name: "label", type: "text" },
                { name: "url", type: "text" },
            ]
        },

        {
            name: 'socialMedia',
            label: 'Add Social Media Icon',
            type: 'array',
            fields:
                [
                    {
                        name: 'icon',
                        type: 'upload',
                        relationTo: 'media',
                        required: true

                    }
                ]
        }
    ]

}