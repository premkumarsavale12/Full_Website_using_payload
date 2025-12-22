"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import type { Media } from "@/payload-types";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import Image from "next/image";


interface SliderProps {
    media?: {
        Images: string | Media;
        id?: string | null;
        richText?: DefaultTypedEditorState;
        pageURL: string;
    }[]
}


export const Slider: React.FC<SliderProps> = ({ media = [] }) => {

    return (
        <>
            <div className="relative max-w-[1200px] mx-auto h-[400px]">


                <div className="custom-prev absolute  -ml-[70px] top-1/2 -translate-y-1/2 
                  bg-blue-500 text-black w-12 h-12 flex items-center justify-center
                  rounded-full shadow-lg cursor-pointer
                  hover:scale-110 transition-transform duration-200 z-50">
                    ◀
                </div>

                <div className="custom-next absolute -mr-[80px] right-4 top-1/2 -translate-y-1/2 
                  bg-blue-500 text-black w-12 h-12 flex items-center justify-center
                  rounded-full shadow-lg cursor-pointer
                  hover:scale-110 transition-transform duration-200 z-50">
                    ▶
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop
                    className="w-full h-[400px]"
                >
                    {media.map((item, index) => {
                        const image = item.Images;

                        if (image && typeof image === "object" && "url" in image && image.url) {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        onClick={() => window.open(item.pageURL, '_blank')}
                                        className="w-full h-full rounded-xl overflow-hidden relative group cursor-pointer">
                                        <Image
                                            src={image.url}
                                            alt={image.alt || "Slider Image"}
                                            height={300}
                                            width={500}
                                            className="w-full h-full object-cover
                           group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        }
                        return null;
                    })}


                </Swiper>
            </div>

        </>
    );
}

