import React from "react";

import { Button, Center, Icon, Link, SimpleGrid } from "@chakra-ui/react";
import { BsMicrosoftTeams } from "react-icons/bs";
import Image from "next/image";

const interview = [
  {
    ID: "6688115",
    name: "Oak",
    typeID: 0,
  },
  {
    ID: "6588013",
    name: "Praewa",
    typeID: 0,
  },
  {
    ID: "6588018",
    name: "Tetee",
    typeID: 0,
  },
  {
    ID: "6488160",
    name: "Pao",
    typeID: 0,
  },
  {
    ID: "6688052",
    name: "Team",
    typeID: 1,
  },
  {
    ID: "6688026",
    name: "Pan",
    typeID: 1,
  },
  {
    ID: "6488217",
    name: "Kafair",
    typeID: 1,
  },
  {
    ID: "6588008",
    name: "Guy",
    typeID: 2,
  },
  {
    ID: "6588106",
    name: "Shaun",
    typeID: 2,
  },
  {
    ID: "6588067",
    name: "Sorn",
    typeID: 2,
  },
  {
    ID: "6588028",
    name: "Jin",
    typeID: 2,
  },
  {
    ID: "6588204",
    name: "Ching",
    typeID: 2,
  },
  {
    ID: "6688002",
    name: "Chongming",
    typeID: 2,
  },
  {
    ID: "6688042",
    name: "Pun²",
    typeID: 2,
  },
  {
    ID: "6488128",
    name: "Tar",
    typeID: 3,
  },
  {
    ID: "6688029",
    name: "Kong",
    typeID: 3,
  },
  {
    ID: "6488018",
    name: "Tingting",
    typeID: 3,
  },
  {
    ID: "6588022",
    name: "Bam",
    typeID: 3,
  },
  {
    ID: "6488079",
    name: "Best",
    typeID: 4,
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const foundInterview = interview.find(
    (interviewee) => interviewee.ID.toString() === slug,
  );
  if (foundInterview) {
    const element = foundInterview;
    return (
      <>
        <h1 className={`text-black text-[100px] text-center`}>&#x1F917;</h1>
        <h1 className={`text-black text-4xl pb-16  text-center`}>
          Welcome {element.name}!<br />
          You are passed the interview, and now you are the one of dev club in
          this team:
        </h1>
        <Center>
          <div className="grid grid-flow-col auto-cols-ma gap-100 w-60 h-60">
            <div className="bg-black pt-6 px-6 text-white">
              <Image
                src={`${teams[element.typeID]?.imgSrc}`}
                width={1000}
                height={1000}
                alt="banner"
                className="h-2/3"
              />
              <h1
                className={`${teams[element.typeID]?.color} text-3xl text-center pt-6 `}
              >
                {teams[element.typeID]?.name}
              </h1>
            </div>
          </div>
        </Center>
        <br />
        <p className="text-black px-2 text-2xl py-12 pb-6 text-center">
          Next, you have to join our first-met meeting and our Microsoft
          Teams...
        </p>
        <Center>
          <Link
            href="https://docs.google.com/spreadsheets/d/1NAwaHiJMxgqxsx0wxzHXXK-ACH3k96t0zsUZFkX3tGU/edit?usp=sharing"
            className=" px-4 py-3 bg-black text-white text-xl border-2 border-black hover:bg-white hover:text-black hover:italic"
          >
            Schedule for first-met meeting
          </Link>
        </Center>
        <br />
        <Center>
          <Link
            href="https://teams.microsoft.com/l/team/19%3a-LSC4hkCLZsD_bCRJONXq8Xne7L3pcVI49lkEttQCqk1%40thread.tacv2/conversations?groupId=bb331fec-84ea-4a05-b413-44fb6a0b53f1&tenantId=9bc585f9-a8b8-431c-9013-efa7b2b40cdf"
            className=" px-9 py-3 bg-[#505AC9] text-white text-xl border-2 border-[#505AC9] hover:bg-white hover:text-[#505AC9] hover:italic"
          >
            <Icon m="1">
              <BsMicrosoftTeams />
            </Icon>{" "}
            Join Microsoft Team
          </Link>
        </Center>
      </>
    );
  } else {
    return <NotFound />;
  }
}

function NotFound() {
  return (
    <>
      <h1 className={`text-black text-[100px] text-center`}>&#x1F979;</h1>
      <h1 className={`text-black text-4xl pb-24  text-center`}>
        We are sorry to hear that <br />
        You are not the one.
      </h1>
    </>
  );
}

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
