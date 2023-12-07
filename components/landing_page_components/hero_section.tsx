import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';


type HeroSectionProps = {
    content: string;
    bg_url: string;
    btn_1: string;
    btn_2: string;
};

// @ts-ignore
export default function HeroSection({ content, bg_url, btn_1, btn_2 }: HeroSectionProps) {
    return (
        <div className="h-fit">
            <div className='text-white absolute z-10 w-full h-full flex flex-col justify-center items-center gap-10'>
                <div>
                    <p 
                        className='w-fit text-3xl sm:text-5xl font-bold text-center leading-tight'
                        // dangerouslySetInnerHTML={{ __html: content }}
                    >
                        {parse(content)}
                    </p>
                </div>
                <div className='flex gap-10'>
                    <Button
                        className="text-black font-bold shadow-2xl shadow-amber-700"
                        size="lg"
                        color="warning"
                        as={Link}
                        href="#"
                        variant="solid"
                    >
                        {btn_1}
                        {/* RESERVE TABLE */}
                    </Button>
                    <Button
                        className="text-black font-bold shadow-2xl shadow-amber-700"
                        size="lg"
                        color="warning"
                        as={Link}
                        href="#"
                        variant="solid"
                    >
                        {btn_2}
                        {/* JOIN CLUB */}
                    </Button>
                </div>
            </div>
            <Image
                className='object-cover z-0'
                src={bg_url}
                alt=""
                fill={true}
            />
        </div>
    );
};
