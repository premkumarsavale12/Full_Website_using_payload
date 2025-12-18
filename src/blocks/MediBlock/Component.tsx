


interface MediBlockProps {

    Image: {

        url: string;
        alt: string;
        width: number;
        height: number;


    }
}



export const MediBlock: React.FC<MediBlockProps> = ({ Image }) => {
    // console.log(Image);

    return (

        <>
            {
                Image && (

                    <img
                        src={Image.url}
                        alt={Image.alt}
                        className="mx-auto w-[80%]"
                    />
                )
            }

        </>
    )
}