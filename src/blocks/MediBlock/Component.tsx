
import Image from "next/image";

interface MediBlockProps {

    image: {

        url: string;
        alt: string;

    }
}



export const MediBlock: React.FC<MediBlockProps> = ({ image }) => {
    // console.log(Image);

    return (

        <>
            {
                image && (

                    <Image
                        src={image.url}
                        alt={image.alt}
                        height={400}
                        width={500}
                        className="mx-auto w-[80%]"
                    />
                )
            }

        </>
    )
}