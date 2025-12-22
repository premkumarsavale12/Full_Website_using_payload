
import RichText from "@/components/RichText";
import { Button } from "@payloadcms/ui";
import type { Media as MediaType } from "@/payload-types";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import { Media } from "@/components/Media";

interface RightProps {
    item?: {
        richText: DefaultTypedEditorState,
        Images: MediaType,
        label: string,
        url: string,
    }[],


}


export const Right: React.FC<RightProps> = ({ item = [] }) => {

    // console.log(item);   

    return (

        <>

            <div className="container mx-auto ">

                <div className="flex flex-col gap-10">

                    {item.map((data, index) => {

                        // console.log(data);

                        const isEven = index % 2 === 0

                        return (

                            <div

                                key={index}

                                className={`flex flex-col md:flex-row items-start gap-6 

                         ${!isEven ? "" : "md:flex-row-reverse"}`}



                            >

                                <div className="w-full md:w-1/2">

                                    {data.Images && <Media resource={data.Images} />}

                                </div>


                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    {data.richText && (
                                        <RichText data={data.richText} enableGutter={false} />
                                    )}

                                    {data.label && (
                                        <Button className="h-12 w-40 bg-blue-500 text-white rounded-md">
                                            {data.label}
                                        </Button>
                                    )}


                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>
        </>
    )
}