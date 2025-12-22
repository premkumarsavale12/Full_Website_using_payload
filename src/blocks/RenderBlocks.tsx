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
import { Logo } from '@/blocks/Logo/Component'


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
  head: Head,
  logo: Logo

}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {

  if (!blocks?.length) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType as keyof typeof blockComponents] as React.ComponentType<Record<string, unknown>>;

          return (
            <div className="my-16" key={index}>
              <Block {...(block as unknown as Record<string, unknown>)} disableInnerContainer={true} />

            </div>
          );
        }

        return null;
      })}
    </Fragment>
  );
};
