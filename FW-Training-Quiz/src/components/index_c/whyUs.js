'use client'
import Image from 'next/image';
import { Box, Link, SimpleGrid } from '@chakra-ui/react';


export default function whyUs() {

    return (
      <>
      <div className="grid grid-flow-col auto-cols-ma gap-100 lg:p-32 p-6">
        <SimpleGrid columns={[1, 1, 3]} spacingX='40px' spacingY='20px'>
        {qElement.map((qE, index) => (
            <div className=' p-6' key={index}>
                <Image src={qE.imgSrc} width={500} height={500} alt='banner' className='h-[300px]'/>
                <h1 className={`text-black text-4xl text-left pt-6 pb-3`}>
                {qE.name.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h1>
                <h1 className={`text-black text-xl text-left mt-6`}>{qE.des}</h1>
            </div>
        ))}
        </SimpleGrid>
      </div>
      </>
      
    );
  }

  const qElement = [
    {
      name: 'ACADEMIC \nGROWTH',
      imgSrc: '/whyUs/ag.svg',
      des: 'Dev Club often explore topics and technologies that may not be covered in your regular coursework. This can broaden your knowledge and give you a more well-rounded education.',
    },
    {
        name: 'EXPANDED \nCOMMUNITY',
        imgSrc: '/whyUs/ec.svg',
        des: 'Working with peers in Dev Club setting can improve your teamwork and communication skills. Collaboration is an essential skill in both academia and the professional world.',
      },
      {
        name: 'ENHANCED \nEXPERIENCE',
        imgSrc: '/whyUs/ee.svg',
        des: 'Being part of a Dev Club often involves working on real projects and practical coding tasks. This hands-on experience can deepen your understanding of programming languages and concepts.',
      },
      
]

