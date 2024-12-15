import React from "react";
import { Center, Link, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const teams = [
  {
    ID: "FW",
    name: "FRONTEND WEB",
    imgSrc: "/fwLogo.svg",
    color: "text-[#00FF66]",
  },
  {
    ID: "FA",
    name: "FRONTEND APP",
    imgSrc: "/faLogo.svg",
    color: "text-[#006AFF]",
  },
  {
    ID: "BN",
    name: "BACKEND",
    imgSrc: "/bnLogo.svg",
    color: "text-[#FF5656]",
  },
  {
    ID: "DA",
    name: "DESIGN & ART",
    imgSrc: "/daLogo.svg",
    color: "text-[#FA00FF]",
  },
  {
    ID: "QA",
    name: "Quality Assurance",
    imgSrc: "/qaLogo.svg",
    color: "text-[#FFC700]",
  },
];

const interview = [
  {
    ID: "6488a",
    name: "Thanapat Nonpassopon",
    form: "https://calendly.com/muictdevclub/muict-dev-club-member-interview-group-i-clone",
    type: [
      {
        ID: "DA",
        interID: "00",
        date: "October 31, 2023",
        time: "00.00",
      },
      {
        ID: "FA",
        interID: "00",
        date: "October 31, 2023",
        time: "00.00",
      },
      {
        ID: "QA",
        interID: "00",
        date: "October 31, 2023",
        time: "00.00",
      },
    ],
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const foundInterview = interview.find(
    (interviewee) => interviewee.ID.toString() === slug,
  );

  if (foundInterview) {
    const element = foundInterview;
    const eligibleTeams = foundInterview.type.map((interviewType) => {
      const team = teams.find((team) => team.ID === interviewType.ID);
      return team;
    });
    return (
      <>
        <h1 className={`text-black text-[100px] text-center`}>&#x1F917;</h1>
        <h1 className={`text-black text-4xl pb-16  text-center`}>
          Congratulations {element.name}!<br />
          You are eligible to be interviewed in the following team(s):
        </h1>

        <div className="grid grid-flow-col auto-cols-ma gap-100 lg:px-96 p-6">
          <SimpleGrid columns={[1, 1, 3]} spacingX="40px" spacingY="20px">
            {foundInterview.type.map((qE, index) => (
              <div className="bg-black pt-6 px-6 text-white" key={index}>
                <Image
                  src={`${eligibleTeams[index]?.imgSrc}`}
                  width={1000}
                  height={1000}
                  alt="banner"
                  className="h-1/3"
                />
                <h1
                  className={`${eligibleTeams[index]?.color} text-3xl text-center pt-6 `}
                >
                  {eligibleTeams[index]?.name}
                </h1>
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
          <Link
            href={element.form}
            className=" px-2 py-3 bg-black text-white text-xl border-2 border-black hover:bg-white hover:text-black hover:italic"
          >
            Confirm to Interview
          </Link>
        </Center>
      </>
    );
  } else {
    return (
      <>
        <NotFound />
      </>
    );
  }
}

function NotFound() {
  return (
    <>
      <h1 className={`text-black text-[100px] text-center`}>&#x1F979;</h1>
      <h1 className={`text-black text-4xl pb-24  text-center`}>
        We are sorry to hear that <br />
        You are not eligible to interview.
      </h1>
    </>
  );
}
