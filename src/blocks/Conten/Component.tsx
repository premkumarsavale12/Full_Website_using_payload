

"use client"
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


interface ContenProps {
    cards:
    {

        title: string;
        Paragraph: string;
        AuthorName?: string | null;
        logo?: {
            url: string;
            alt: string;
        },

    }[],

}



export const Conten: React.FC<ContenProps> = ({ cards }) => {

    // console.log(cards);

    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">

            <div className="relative max-w-[1200px] mx-auto h-[400px] flex items-center">

                {/* Previous Button */}
                <div
                    ref={prevRef}
                    className="absolute left-4 z-50 flex items-center justify-center
                        w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer
                           hover:scale-110 transition-transform"
                    aria-label="Previous slide"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M15 18l-6-6 6-6"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Next Button */}
                <div
                    ref={nextRef}
                    className="absolute right-4 z-50 flex items-center justify-center
                          w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer
                    hover:scale-110 transition-transform"
                    aria-label="Next slide"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M9 6l6 6-6 6"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop
                    autoplay={{ delay: 3000 }}
                    spaceBetween={30}
                    slidesPerView={3}

                >
                    {

                        cards?.map((item, index) => (




                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                            {item.title}
                                        </h3>


                                        <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                                            {item.Paragraph}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-auto pt-4">
                                        {item.logo?.url && (
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                                <Image
                                                    src={item.logo.url}
                                                    alt={item.logo.alt || "Author"}
                                                    className="w-full h-full object-cover"
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>
                                        )}
                                        {item.AuthorName && (
                                            <span className="font-bold text-gray-900 text-sm">
                                                - {item.AuthorName}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))



                    }


                </Swiper>


            </div>
        </section>
    )
}