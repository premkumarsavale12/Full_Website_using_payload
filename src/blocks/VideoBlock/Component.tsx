import RichText from "@/components/RichText";

import React from "react";

interface VideoBlockProps {
    Video: {

        url: string;
        mimeType?: string;

    },

    richText: any,
    Paragraph?: any,

}


export const VideoBlock: React.FC<VideoBlockProps> = ({ Video, richText, Paragraph }) => {
    // console.log(Video);

    // console.log(Paragraph);



    return (

        <>
            <div className="relative video-wrapper -mt-[130px]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                >
                    <source src={Video.url} type={Video.mimeType || 'video/mp4'} />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                    {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-white p-4 mt-[230px]">
                    <ul className="list-disc pl-5 space-y-4 text-white" >
                        {Paragraph?.map((item: any, index: number) => (
                            <li key={index}>{item.Point}</li>
                        ))}
                    </ul>
                </div>
            </div>



        </>
    )
}