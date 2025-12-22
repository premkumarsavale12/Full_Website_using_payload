'use client'
import { CMSLink } from '@/components/Link'
import type { Page } from '@/payload-types'
import Image from 'next/image'

interface HeadProps {
    logo: {
        url: string
        alt: string
    }
    Navigation?: {
        label: string
        linkType?: 'reference' | 'custom' | null
        page?: Page | number | null
        url?: string | null
    }[]
}

export const Head: React.FC<HeadProps> = ({ logo, Navigation }) => {
    return (
        <header className="w-full border-b bg-white fixed top-0 z-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">


                    <Image
                        src={logo?.url}
                        alt={logo?.alt || 'Logo'}
                        className="h-10 w-auto"
                        height={50}
                        width={60}
                    />


                    <nav className="hidden md:flex items-center gap-8">
                        {Navigation?.map((item, index) => {
                            const key =
                                item.linkType === 'reference' && item.page
                                    ? `desktop-${typeof item.page === 'object' ? item.page.id : item.page}`
                                    : `desktop-${item.url || item.label}-${index}`

                            return (
                                <CMSLink
                                    key={key}
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
                            )
                        })}
                    </nav>



                </div>

                {/* Mobile Menu */}

                <div className="md:hidden pb-4">
                    <nav className="flex flex-col gap-4">
                        {Navigation?.map((item, index) => {
                            const key =
                                item.linkType === 'reference' && item.page
                                    ? `mobile-${typeof item.page === 'object' ? item.page.id : item.page}`
                                    : `mobile-${item.url || item.label}-${index}`

                            return (
                                <CMSLink
                                    key={key}
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
                            )
                        })}
                    </nav>

                </div>
            </div>
        </header>
    )
}
