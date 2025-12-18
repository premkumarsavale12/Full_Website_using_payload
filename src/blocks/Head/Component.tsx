
'use client'

import { CMSLink } from '@/components/Link'
import type { Page } from '@/payload-types'

interface HeadProps {
    logo: {
        url: string
        alt: string
    }
    Navigation?: {
        label: string
        linkType?: ('reference' | 'custom') | null
        page?: Page | number | null
        url?: string | null
    }[]
}

export const Head: React.FC<HeadProps> = ({ logo, Navigation }) => {
    // console.log(logo)
    // console.log(Navigation)

    return (
        <>
            <header className="w-full border-b bg-white  fixed  text-white -mt-[140px] ">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src={logo?.url}
                                alt={logo?.alt || 'Logo'}
                                className="h-10 w-auto object-contain"
                            />
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            {Navigation?.map((item, index) => (
                                <CMSLink
                                    key={index}
                                    label={item.label}
                                    type={item.linkType}
                                    url={item.url}
                                    reference={
                                        item.linkType === 'reference' && item.page
                                            ? { relationTo: 'pages', value: item.page }
                                            : null
                                    }
                                    className="text-md font-medium text-gray-700 hover:text-black transition"
                                />
                            ))}
                        </nav>
                    </div>

                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col gap-4">
                            {Navigation?.map((item, index) => (
                                <CMSLink
                                    key={index}
                                    label={item.label}
                                    type={item.linkType}
                                    url={item.url}
                                    reference={
                                        item.linkType === 'reference' && item.page
                                            ? { relationTo: 'pages', value: item.page }
                                            : null
                                    }
                                    className="text-sm font-medium text-gray-700 hover:text-black"
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
