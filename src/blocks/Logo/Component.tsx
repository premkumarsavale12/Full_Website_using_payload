
"use client"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";


interface LogoProps {
    heading?: string | null;
    Paragraph?: string | null;
    Logo?:
    | {

        Images: {
            url: string,
            alt: string
        }
        id?: number;
    }[]
}



export const Logo: React.FC<LogoProps> = ({ heading, Logo, Paragraph }) => {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);


    return (

        <>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                {heading}
            </h1>

            <p className="ml-[600px] text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                {Paragraph}
            </p>



            <div className="relative max-w-[1200px] -mt-[80px] mx-auto h-[400px] flex items-center">

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

                    {Logo &&
                        Logo.map((item, index) => (

                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center bg-white p-4 h-32 w-full">
                                    <div className="relative w-full h-full max-w-[150px] max-h-[100px]">
                                        <Image
                                            key={index}
                                            src={item.Images.url}
                                            alt={item.Images.alt}
                                            height={100}
                                            width={400}
                                        />
                                    </div>
                                </div>

                            </SwiperSlide>
                        )

                        )}



                </Swiper>
            </div>





            {/* <section>

                <h1> {heading}</h1>

                <p>{Paragraph}</p>


                {Logo &&
                    Logo.map((item, index) => (
                        <img
                            key={item.id ?? index}
                            src={item.Images.url}
                            alt={item.Images.alt}
                        />
                    ))}

                <p> </p>2
            </section> */}
        </>
    )

}