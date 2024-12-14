import React from "react";
import useState from "react";

import {
  Button,
  Center,
  Link,
  SimpleGrid
} from '@chakra-ui/react'
import Image from 'next/image';

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const foundInterview = interview.find((interviewee) => interviewee.ID.toString() === slug);

  if (foundInterview) {
    const element = foundInterview;
    const eligibleTeams = foundInterview.type.map((interviewType) => {
      const team = teams.find((team) => team.ID === interviewType.typeID);
      return team
    });
    return (
      <>
      <h1 className={`text-black text-[100px] text-center`}>🥰</h1>
        <h1 className={`text-black text-4xl pb-16  text-center`}>Congratulations {element.name}!<br/>You are eligible to be interviewed in the following team(s):</h1>

        <div className="grid grid-flow-col auto-cols-ma gap-100 lg:px-96 p-6">
        <SimpleGrid columns={[1, 1, 3]} spacingX='40px' spacingY='20px'>
        {foundInterview.type.map((qE, index) => (
            <div className='bg-black pt-6 px-6 text-white' key={index}>
              <Image src={`${eligibleTeams[index]?.imgSrc}`} width={1000} height={1000} alt='banner' className='h-1/3'/>
                <h1 className={`${eligibleTeams[index]?.color} text-3xl text-center pt-6 `}>{eligibleTeams[index]?.name}</h1>
                <h1 className="text-xl pt-6">ID: {element.ID}</h1>
                <h1 className="text-xl pb-12">Name: {element.name}</h1>
                {/* <h1 className='text-[#FFFFFF] text-xl text-center'>Interview ID:</h1>
                <h1 className={`${eligibleTeams[index]?.color} text-[100px] text-center`}>{qE.typeID}{qE.interID}</h1> */}
                {/* <h1 className='text-[#FFFFFF] text-xl text-left'>Date: {qE.date.toString()}</h1>
                <h1 className='text-[#FFFFFF] text-xl text-left'>Round: {qE.time}</h1> */}
            </div>
        ))}
      </SimpleGrid>

      </div>
      <Center>
      <Link href={element.form} className=" px-2 py-3 bg-black text-white text-xl border-2 border-black hover:bg-white hover:text-black hover:italic">
                Confirm to Interview
      </Link>
      </Center>

      </>
    );
  } else {
    return <NotFound/>;
  }
}

function NotFound() {
  return (
    <>
    <h1 className={`text-black text-[100px] text-center`}>🥹</h1>
        <h1 className={`text-black text-4xl pb-24  text-center`}>We are sorry to hear that <br/>You are not eligible to interview.</h1>

    </>
  );
}


  const interview = [
    {
      ID: '6488a',
      name: 'Thanapat Nonpassopon',
      form: 'https://calendly.com/muictdevclub/muict-dev-club-member-interview-group-i-clone',
      type: {
        [
          typeID: 'DA',
          interID: '00',
          date: 'October 31, 2023',
          time: '00.00'
        ],
        [
          typeID: 'FA',
          interID: '00',
          date: 'October 31, 2023',
          time: '00.00'
        ],
        [
          typeID: 'QA',
          interID: '00',
          date: 'October 31, 2023',
          time: '00.00'
        ],
      }
    },
    ]
