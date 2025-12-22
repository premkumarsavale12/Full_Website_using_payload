import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


export const FAQ: Block = {
    slug: 'faq',
    interfaceName: 'faq',
    labels: {
        singular: 'faq',
        plural: 'faqs'
    },
    fields: [
        {
            name: 'Heading',
            type: 'textarea',
            label: 'Heding'
        },

        {
            name: 'items',
            type: "array",
            label: 'Add Items',
            minRows: 4,
            fields: [
                {
                    name: 'Question',
                    type: 'textarea',
                    label: 'Question',
                    required: true
                },

                {
                    name: 'richText',
                    type: 'richText',
                    label: false,
                    // defaultFeatures
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => [

                            ...rootFeatures,


                            HeadingFeature({
                                enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
                            }),


                            FixedToolbarFeature(),
                            InlineToolbarFeature(),
                        ],
                    }),
                },
            ]
        }
    ]
}