"use client"
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import parse from 'html-react-parser';


type HeroSectionProps = {
  content: string;
  bg_url: string;
  btn: string;
  sub_heading: string;
};

import { Nunito } from 'next/font/google'
 
const nunito = Nunito({
  weight: "700",
  subsets: ['latin'],
})

export default function HeroSection({ content, bg_url, btn, sub_heading }: HeroSectionProps) {
  return (
    <div className="h-fit">
      <div className="w-full text-white absolute z-10 h-full flex flex-col justify-center items-center gap-28">
        <div>
<<<<<<< HEAD
          <p id="idHero-text"
            className='w-fit text-3xl sm:text-7xl font-bold text-center leading-tight'
=======
          <p
            className={`${nunito.className} w-fit text-3xl sm:text-7xl font-bold text-center leading-tight`}
>>>>>>> 116a83c4422db1cf2049a8c0d51d351476742fbf
          >
            {parse(content)}
          </p>
        </div>
<<<<<<< HEAD
        <div className='md:w-fit flex gap-10 md:gap-52 justify-center md:justify-end flex-col md:flex-row'>
          <p id="id-hero-subtext" className='text-lg md:text-2xl font-bold'>{parse(sub_heading)}</p>
=======
        <div className='md:w-fit flex gap-10 md:gap-52 justify-center md:justify-end flex-col md:flex-row p-6 md:p-0'>
          <p className='text-lg md:text-2xl font-bold'>{parse(sub_heading)}</p>
>>>>>>> 116a83c4422db1cf2049a8c0d51d351476742fbf
          <Button
            className="text-black font-bold shadow-2xl shadow-amber-700"
            size="lg"
            color="warning"
            as={Link}
            href="http://eepurl.com/iFDbkc"
            variant="solid"
          >
            {btn}
          </Button>
        </div>
      </div>
      <video className='absolute inset-0 object-cover w-full h-screen' autoPlay loop muted>
        <source src={bg_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
