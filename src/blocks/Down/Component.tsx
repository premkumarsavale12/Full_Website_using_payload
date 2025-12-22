
import Image from 'next/image'
interface DownProps {


    contact?: {
        companyName?: string | null;
        street?: string | null;
        zipCity?: string | null;
        country?: string | null;
        email?: string | null;
        phone?: string | null;
    };
    officeHourse?:
    | {
        days?: string | null;
        time?: string | null;
        id?: string | null;
    }[]
    | null;
    navigation?:
    | {
        label?: string | null;
        url?: string | null;
        id?: string | null;
    }[]
    | null;
    legalLinks?:
    | {
        label?: string | null;
        url?: string | null;
        id?: string | null;
    }[],

    socialMedia?:
    {
        icon?: {
            url: string,
            alt: string
        }
        id?: number,
    }[],
}

export const Down: React.FC<DownProps> = ({ contact, officeHourse, navigation, legalLinks, socialMedia }) => {

    // console.log(contact, officeHourse, navigation, legalLinks, socialMedia)

    return (

        <>

            <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 " >

                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {contact && (

                            <div className="space-y-4">

                                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

                                <div className="space-y-2 text-sm">

                                    {contact.companyName && (
                                        <p className="font-medium text-white">
                                            {contact.companyName}
                                        </p>
                                    )}

                                    {(contact.street || contact.zipCity || contact.country) && (
                                        <div className="mt-2">
                                            {contact.street && <p>{contact.street}</p>}

                                            <p className="flex items-center gap-2">
                                                <Image
                                                    src="/location-black_icon.svg"
                                                    alt="location"
                                                    className="w-6 h-6 "
                                                    width={"0"}
                                                    height={"0"}
                                                />
                                                <span>
                                                    {contact.zipCity} {contact.country}
                                                </span>
                                            </p>
                                        </div>
                                    )}

                                    {contact.email && (
                                        <p className="pt-2 flex items-center gap-2">
                                            <Image
                                                src="/mail-black_icon.svg"
                                                alt="email"
                                                height="0"
                                                width="0"
                                                className="w-6 h-6"
                                            />
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="hover:text-white transition-colors"
                                            >
                                                {contact.email}
                                            </a>
                                        </p>
                                    )}

                                    {contact.phone && (
                                        <p className="flex items-center gap-2">
                                            <Image
                                                src="/call-black_icon.svg"
                                                alt="phone"
                                                className="w-6 h-6"
                                                height={"0"}
                                                width={"0"}
                                            />
                                            <a
                                                href={`tel:${contact.phone}`}
                                                className="hover:text-white transition-colors"
                                            >
                                                {contact.phone}
                                            </a>
                                        </p>
                                    )}
                                </div>


                            </div>
                        )}

                        {officeHourse && (

                            <div className="space-y-4">

                                <h3 className="text-lg font-semibold text-white mb-4">Office Hours</h3>

                                <ul className="space-y-2 text-sm">

                                    {officeHourse.map((oh, index) => (

                                        <li key={index} className="flex justify-between max-w-[200px]">

                                            <span className="font-medium">{oh.days}</span>

                                            <span>{oh.time}</span>

                                        </li>

                                    ))}

                                </ul>

                            </div>
                        )}

                        {navigation && (
                            <div className="space-y-4">

                                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

                                <nav>
                                    <ul className="space-y-2 text-sm">
                                        {navigation.map((nav, index) => (
                                            <li key={index}>
                                                <a
                                                    href={nav.url || '#'}
                                                    className="hover:text-white transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                    {nav.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}

                        {legalLinks && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                                <ul className="space-y-2 text-sm">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url || '#'}
                                                className="hover:text-white transition-colors duration-200"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {
                            socialMedia &&
                            (

                                <div className=' space-y-4' >

                                    <h3 className="text-sm font-small text-white mb-4">Social Media </h3>

                                    <ul className="flex items-center gap-4">

                                        {
                                            socialMedia.map((data, index) => (

                                                <li key={index}>

                                                    {data.icon && typeof data.icon === 'object' && data.icon.url && (
                                                        <Image
                                                            src={data.icon.url}
                                                            alt="social icon"
                                                            width={500}
                                                            height={500}
                                                            className="w-5 h-5 object-contain hover:scale-110 transition"
                                                        />
                                                    )}

                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            )

                        }


                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} {contact?.companyName || 'Company Name'}. By Developed Premkumar Savale </p>
                    </div>
                </div>
            </footer>
        </>
    )


}