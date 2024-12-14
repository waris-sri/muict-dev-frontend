"use client";

import dynamic from "next/dynamic";
import React from "react";

import {
  Accordion,
  Icon,
  // Image,
} from "@chakra-ui/react";

// import {BsLink} from 'react-icons/bs'

import Image from "next/image";
import { BsLink } from "react-icons/bs";

// const QCard = dynamic(() => import("../../components/questionCard"));
// const Header = dynamic(() => import("../../components/index_c/header"));
// const Location = dynamic(() => import("../../components/index_c/location"));
// const Teams = dynamic(() => import("../../components/index_c/teams"));
// const WhyUs = dynamic(() => import("../../components/index_c/whyUs"));
const QCard = dynamic(() => import("../components/questionCard"));
const Header = dynamic(() => import("../components/index_c/header"));
const Location = dynamic(() => import("../components/index_c/location"));
const Teams = dynamic(() => import("../components/index_c/teams"));
const WhyUs = dynamic(() => import("../components/index_c/whyUs"));

export default function Home() {
  return (
    <>
      <Header />

      <div className="h-6" />
      <div id="location">
        <div className="flex flex-col pt-6 bg-white h-full w-full items-center">
          <h1
            className="
        text-2xl
        md:text-4xl"
          >
            Location
          </h1>
          <Location />
        </div>
      </div>

      <div className="h-6" />
      <div id="why-us">
        <div className="flex flex-col pt-6 bg-white h-full w-full items-center">
          <h1
            className="
        text-2xl
        md:text-4xl"
          >
            Why Us?
          </h1>
          <WhyUs />
        </div>
      </div>

      <div className="h-6" />
      <div id="teams">
        <div className="flex flex-col pt-6 bg-white h-full w-full items-center">
          <h1
            className="
        text-2xl
        md:text-4xl"
          >
            Teams
          </h1>
          <Teams />
        </div>
      </div>

      <div className="h-6" />
      <div id="faqs">
        <div className="flex flex-col pt-16 p-12 bg-white h-full w-full items-center">
          <h1
            className="
        text-2xl
        md:text-4xl"
          >
            QUESTIONS...?
          </h1>
          <Accordion
            allowToggle
            className="pt-16
        w-full
        xl:w-7/12"
          >
            {questionElement.map((cardE, index) => (
              <div key={index}>
                <QCard
                  question={cardE.question}
                  answer={cardE.answer}
                  allowImg={cardE.allowImg}
                  allowFile={cardE.allowFile}
                  imgL={cardE.imgL}
                  imgAlt={cardE.imgAlt}
                  fileRoot={cardE.fileRoot}
                  filename={cardE.filename}
                  fileName={cardE.fileName}
                ></QCard>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

const questionElement = [
  {
    question: "What is this club",
    answer: (
      <div>
        <p className="pb-12">
          This club is for those who want to learn about working in developer
          field, not only coding but also Design, art, and QA.{" "}
        </p>
        {/* <a href='https://forms.gle/WEeVVa5fKjRgTQ2dA' className="w-fit rounded-full text-md font-medium hover:text-[#F5F5F7] hover:bg-[#1D1D1F] bg-[#F5F5F7] px-4 p-2" >
      <Icon className="mr-1" as={BsLink} />
        Apply Now
      </a> */}

        {/* <p>As your senior, I recommend you to exempt because you can take more foreign languages available such as German(I, II), and Chinese(I, II).</p> */}
        {/* <div className="p-4 flex flex-col items-center"><Image width={478} height={692} alt='English Exemption documents' src='/asset/forQuestion/English_exemption_doc.webp' loading="lazy"/></div> */}
      </div>
    ),
    allowFile: "hidden", //if allow '', if not 'hidden'
    fileRoot: "/downloads/project1_leak.pdf",
    filename: "project1_leak.pdf",
    fileName: "Exemption Policy for Basic and Prerequisite English Classes",
  },
  // {
  //   question: 'I would like to loan the student loan (กยศ.)',
  //   answer: <>
  //     <p>As a student of ICT you can loan the student loan (กยศ.) type 1.</p>
  //     <p className='pb-6'>You can learn more by clicking the link below</p>

  //     <a href='https://sites.google.com/view/musl-mahidol2564/' className="w-fit rounded-full text-md font-medium hover:text-[#F5F5F7] hover:bg-[#1D1D1F] bg-[#F5F5F7] px-4 p-2" >
  //     <Icon className="mr-1" as={BsLink} />
  //       Link
  //     </a>

  //   </>,
  //   allowFile: 'hidden',
  //   fileRoot: '',
  //   filename: '',
  //   fileName: '',
  // },
  // {
  //   question: "Everyone who graduated from Mahidol university is a doctor, isn't it",
  //   answer: 'ahhhhhh, maybe not.',
  //   allowFile: 'hidden',
  //   fileRoot: '',
  //   filename: '',
  //   fileName: '',
  // },
  // {
  //   question: 'How can I contact ICT staffs?',
  //   answer:     <div>
  //   <p>Here it is!</p>
  //   <div className="p-4 flex flex-col items-center"><Image width={478} height={692} alt='English Exemption documents' src='/asset/forQuestion/contact.webp' loading="lazy"/></div>
  //   </div>
  //   ,
  //   allowFile: 'hidden',
  //   fileRoot: '',
  //   filename: '',
  //   fileName: '',
  // },
  // {
  //   question: 'I gonna buy a new computer for studying in ICT, can you recommend me?',
  //   answer: <>
  //     <p className='font-medium'>1. Do I have to have my own computer or laptop?</p>
  //     <p ><b>Ans.</b> No, you don't. Faculty of ICT provided computers for all students in the class but if you want more privacy or continuity of working between your place and faculty you should go for it.</p>
  //     <p className='font-medium'>2. Can you recommend me the specs</p>
  //     <p><b>Ans.</b> Yes, I can. The faculty recomended </p>
  //     <p> -- CPU: Intel Core i5 or i7 Gen 11 or higher, AMD Ryzen 5 or 7 5500 series or higher</p>
  //     <p> -- Storage: SSD PCLe/NVMe M.2 512GB or higher</p>
  //     <p> -- Ram: DDR4 16GB or higher</p>
  //     <p> -- Graphic for general programming: NVIDIA GeForce MX450 2GB GDDR6 or AMD Radeon Graphics</p>
  //     <p> -- Graphic for multimedia purpose: NVIDIA GeForce GTX1650 4GB GDDR6 or AMD Radeon RX 5500M 4GB GDDR</p>
  //     <p>*note that this is the recommended specs for buying a new one, lower specs still okay.</p>
  //     <p className='font-medium'>3. How about Macs?</p>
  //     <p><b>Ans.</b> Macs are also recommended but some applications may not support but instructors always have alternative applications for Macs.</p>
  //   </>,
  //   allowFile: 'hidden',
  //   fileRoot: '',
  //   filename: '',
  //   fileName: '',
  // },
  // {
  //   question: 'Is there any scholarship for ICT students',
  //   answer: <><p>Yes, there is. For ICT students the faculty provides scholarships for students who demonstrate excellent academic and activity qualifications. The scholarships cover the tuition and university fees.</p>
  //   <p>More information in the file below.</p>
  //   </>
  //   ,
  //   allowFile: '',
  //   fileRoot: 'https://www.ict.mahidol.ac.th/wp-content/uploads/2023/02/16.-ICT-66-ทุนการศึกษา-66-ประกาศ-เรื่องการให้ทุนการศึกษาทุน-Talentพ.ศ.-2566-ID66-เป็นต้นไป.pdf',
  //   filename: '16.-ICT-66-ทุนการศึกษา-66-ประกาศ-เรื่องการให้ทุนการศึกษาทุน-Talentพ.ศ.-2566-ID66-เป็นต้นไป.pdf',
  //   fileName: 'ICT 66 Scholarships',
  // },
  // {
  //   question: 'If I choose Software Engineering track will I get B.Sc or B.E',
  //   answer:
  //   <p>Everyone graduated from any track of ICT will get The Bachelor of Science Program in Information and Communication Technology(B.Sc)</p>
  //   ,
  //   allowFile: 'hidden',
  //   fileRoot: '',
  //   filename: '',
  //   fileName: '',
  // },
];
