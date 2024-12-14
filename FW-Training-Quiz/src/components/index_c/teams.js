'use client'
import Image from 'next/image';
import { Box, Link, SimpleGrid } from '@chakra-ui/react';


export default function teams() {

    return (
      <>
      <div className="grid grid-flow-col auto-cols-ma gap-100 lg:p-32 p-6">
        <SimpleGrid columns={[1, 1, 5]} spacingX='40px' spacingY='20px'>
        {qElement.map((qE, index) => (
            <div className='bg-black p-6' key={index}>
                <Image src={qE.imgSrc} width={1000} height={1000} alt='banner' className='h-[200px]'/>
                <h1 className={`${qE.color} text-white text-3xl text-left mt-6 mb-3`}>{qE.name}</h1>
                <h1 className={`text-white text-xl text-left`}>{qE.des}</h1>
                <h1 className={`text-white text-xl text-left pt-3`}>Tools: {qE.tools}</h1>
            </div>
        ))}
        </SimpleGrid>
      </div>
      </>
      
    );
  }

  const qElement = [
    {
      name: 'FRONTEND WEB',
      imgSrc: 'fwLogo.svg',
      color: 'bg-[#00FF66]',
      des: 'Elevate Your Design Game. Dive into the Future of Web Development. Stay Ahead with Stunning and Innovative Designs.',
      tools: 'React, Next.js',
    },
    {
        name: 'FRONTEND APP',
        imgSrc: 'faLogo.svg',
        color: 'bg-[#006AFF]',
        des: 'Explore the Future of Mobile Apps! Discover the Next Level of Innovation and Convenience. Join Us in Pushing Boundaries.',
        tools: 'Dart, Flutter',
      },
      {
        name: 'BACKEND',
        imgSrc: 'bnLogo.svg',
        color: 'bg-[#FF5656]',
        des: 'The Backbone Behind Every Project. Managing data, securing information, and delivering smooth functionality, it\'s the invisible force that keeps everything running seamlessly.',
        tools: 'JS, TS, Express',
      },
      {
        name: 'DESIGN & ART',
        imgSrc: 'daLogo.svg',
        color: 'bg-[#FA00FF]',
        des: 'Follow Your Heart to a World of Beauty and Tranquility. Explore Inspiring Creations and Express Your Inner Artist.',
        tools: 'Adobe Illustrator, Figma',
      },
      {
        name: 'Quality Assurance',
        imgSrc: 'qaLogo.svg',
        color: 'bg-[#FFC700]',
        des: 'Ensuring Flawless Execution. We meticulously test and fine-tune every aspect of every project to guarantee it performs perfectly.',
        tools: '-',
      },
]

