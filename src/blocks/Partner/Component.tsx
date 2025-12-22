"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import type { Media } from "@/payload-types";

interface PartnerBlock {
    Partner?: {
        partner: string | Media;
        id?: string | null;
    }[],
}

export const Partner: React.FC<PartnerBlock> = ({ Partner }) => {

    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);
    return (
        <>

            <div className="relative max-w-[1200px] mx-auto h-[400px] flex items-center">

                {/* Previous Button */}
                <div
                    ref={prevRef}
                    className="absolute left-4 z-50 -ml-[100px]  flex items-center justify-center
                        w-12 h-12 rounded-full bg-blue-400   text-white  shadow-lg cursor-pointer
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
                    className="absolute right-4 z-50 -mr-[100px]  flex items-center justify-center
                          w-12 h-12 rounded-full bg-blue-400 text-white shadow-lg cursor-pointer
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
                    autoplay={{ delay: 3000, }}
                    spaceBetween={30}
                    slidesPerView={4}
                    // onBeforeInit={(swiper) => {
                    //     // @ts-ignore
                    //     swiper.params.navigation.prevEl = prevRef.current;
                    //     // @ts-ignore
                    //     swiper.params.navigation.nextEl = nextRef.current;
                    // }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    className="w-full"
                >
                    {Partner?.map((item, index) => {
                        const file = item.partner;

                        if (file && typeof file === "object" && "url" in file && file.url) {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center items-center bg-white p-4 h-32 w-full">
                                        <div className="relative w-full h-full max-w-[150px] max-h-[100px]">
                                            <Image
                                                src={file.url}
                                                alt={file.alt || "Partner Logo"}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        }
                        return null;
                    })}
                </Swiper>
            </div>
        </>
    )
}

