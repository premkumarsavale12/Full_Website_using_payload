import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


export const Right: Block = {
    slug: 'right',
    interfaceName: 'right',
    labels: {
        singular: 'right',
        plural: "rights"
    },

    fields: [
        {
            name: 'item',
            type: 'array',
            label: 'right',
            minRows: 1,
            fields: [
                {
                    name: 'Images',
                    type: 'upload',
                    required: true,
                    relationTo: 'media'
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