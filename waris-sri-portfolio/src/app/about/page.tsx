// "use client";

import { Link, Button } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid items-center justify-items-start min-h-screen pt-0 pb-0 p-[4rem] md:p-[10rem] lg:p-[15rem] bg-black">
      <div className="font-bold text-3xl md:text-[2.5rem] lg:text-6xl mb-[1.5rem] md:mb-[2rem] lg:mb-[3.5rem]">
        <h1 className="animate-name text-yellow-400">About</h1>
        <h1 className="animate-name text-pink-400">เกี่ยวกับ</h1>
        <h1 className="animate-name text-lime-400">就いて</h1>
        <h1 className="animate-name text-sky-400">涉及</h1>
        <main className="flex flex-col gap-3 md:gap-10 mt-[3.5rem] md:mt-[5rem] lg:mt-[7rem] text-[1.5rem] md:text-[2rem]">
          <p className="font-normal text-pretty text-[#ededed] text-base md:text-lg lg:text-xl">
            <b>Hi, I&apos;m Waris Sripatoomrak (Beam). </b>
            I&apos;m an undergraduate student at Mahidol University pursuing a
            degree in Information and Communication Technology (ICT), passionate
            about exploring DSA and NLP. Apart from ICT-related skills, I&apos;m
            also interested in linguistics, and self-improvement. I also have
            developed strong adaptability, management, active listening,
            communication, and other leadership skills throughout my experience.
            Looking ahead to the next few years, I&apos;m excited to apply
            multidisciplinary concepts to practical projects and work with peers
            and professors.
          </p>
          <Link href="/">
            <Button
              leftIcon={<BsArrowLeft />}
              colorScheme="gray"
              variant="link"
              className="underline-offset-8"
            >
              Back to home
            </Button>
          </Link>
        </main>
      </div>
    </div>
  );
}
