import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MediBlock } from '@/blocks/MediBlock/Component'
import { VideoBlock } from '@/blocks/VideoBlock/Component'
import { Right } from '@/blocks/Right/Component'
import { Slider } from '@/blocks/Slider/Component'
import { Partner } from '@/blocks/Partner/Component'
import { FAQ } from '@/blocks/FAQ/Component'
import { Conten } from '@/blocks/Conten/Component'
import { Down } from '@/blocks/Down/Component'
import { Head } from '@/blocks/Head/Component'


const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  mediBlock: MediBlock,
  videoBlock: VideoBlock,
  right: Right,
  slider: Slider,
  partner: Partner,
  faq: FAQ,
  conten: Conten,
  down: Down,
  head: Head

}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>

                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
