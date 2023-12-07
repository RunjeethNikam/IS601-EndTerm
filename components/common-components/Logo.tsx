import { Link } from "@nextui-org/react";
import Image from 'next/image';

export default function Logo({ showLogo = true, clsName = '' }) {
    return (
        <>
            <Link className={`font-bold text-large text-black ${clsName}`} href="#">
                {showLogo && (
                    <Image
                        className='object-cover p-2 pb-4'
                        src='/branding/logo.svg'
                        alt="Le Jardin Brand Logo"
                        height={50}
                        width={50}
                    />
                )}
                Le Jardin
            </Link>
        </>
    );
}
