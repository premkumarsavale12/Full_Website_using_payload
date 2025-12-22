import RichText from "@/components/RichText";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

interface FAQProps {
    items?: {
        Question: string;
        richText: DefaultTypedEditorState
    }[],

    Heading?: string | null;
}

export const FAQ: React.FC<FAQProps> = ({ items = [], Heading }) => {

    // console.log(items);

    return (

        <>
            <h1 className="text-black text-center  text-large font-bold mb-[20px]" > {Heading}</h1>
            {
                items?.map((item, index) => {

                    return (

                        // <div key={index}>
                        //     <h1> {item.Question}</h1>

                        //     {item.richText && <RichText className="mb-0" data={item.richText} enableGutter={false} />}
                        // </div>

                        // <div
                        //     key={item.id}
                        //     className="bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-gray-700/60  shadow-xl hover:shadow-3xl rounded-2xl p-7 mb-6  w-full max-w-xl mx-auto
                        //                  transition-all duration-300  hover:-translate-y-1 hover:border-gray-500/50 "
                        // >
                        //     <h3
                        //         className=" text-2xl font-semibold text-white  mb-4   tracking-tight transition-colors duration-200 hover:text-blue-400 "
                        //     >
                        //         {item.Question}
                        //     </h3>

                        //     <div className="text-gray-300 text-base leading-relaxed">
                        //         {item.richText && (
                        //             <RichText
                        //                 className="prose prose-invert max-w-none"
                        //                 data={item.richText}
                        //                 enableGutter={false}
                        //             />
                        //         )}
                        //     </div>
                        // </div>



                        <div className="w-full flex justify-center" key={index}>
                            <div
                                key={index}
                                className="w-[70%] md:w-[60%] lg:w-[50%] 
                                group p-6 bg-white border border-blue-200 rounded-xl 
                                hadow-md hover:shadow-xl hover:border-blue-500 
                                transition-all duration-300"
                            >
                                <h1 className="text-2xl font-semibold text-blue-800 group-hover:text-blue-600 
                                   transition-colors duration-300 flex items-center gap-2">
                                    {/* <span className="text-blue-600 text-3xl">❓</span> */}
                                    {item.Question}
                                </h1>

                                {item.richText && (
                                    <RichText
                                        className="prose max-w-none text-gray-700 mt-3 leading-relaxed"
                                        data={item.richText}
                                        enableGutter={false}
                                    />
                                )}
                            </div>
                        </div>
                    )
                })
            }

        </>
    )

}

