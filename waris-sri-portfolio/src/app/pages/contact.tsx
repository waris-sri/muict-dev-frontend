"use client";

// import { Tooltip } from "@chakra-ui/react";
// import { BsInstagram, BsGithub, BsYoutube, BsLinkedin } from "react-icons/bs";
// import Image from "next/image";

export default function Home() {
  // const socialLinks = [
  //   {
  //     href: "https://www.instagram.com/waris.beam/",
  //     icon: <BsInstagram />,
  //     label: "Instagram",
  //   },
  //   {
  //     href: "https://github.com/waris-sri/",
  //     icon: <BsGithub />,
  //     label: "GitHub",
  //   },
  //   {
  //     href: "https://www.youtube.com/@warisbeam/",
  //     icon: <BsYoutube />,
  //     label: "YouTube",
  //   },
  //   {
  //     href: "https://www.linkedin.com/in/waris-sripatoomrak-316824276/",
  //     icon: <BsLinkedin />,
  //     label: "LinkedIn",
  //   },
  // ];

  return (
    <div className="grid items-center justify-items-start min-h-screen pl-[20vw] pr-[20vw] bg-black">
      <main className="flex flex-col gap-8">
        <div className="font-bold text-3xl md:text-[2.5rem] lg:text-6xl mb-[1.5rem] md:mb-[2rem] lg:mb-[3.5rem]">
          <h1 className="animate-name text-yellow-400">
            Waris Sripatoomrak <span className="text-gray-500">(Beam)</span>
          </h1>
          <h1 className="animate-name text-pink-400">
            วริศ ศรีปทุมรักษ์ <span className="text-gray-500">(บีม)</span>
          </h1>
          <h1 className="animate-name text-lime-400">
            <ruby>
              李<rp>(</rp>
              <rt>り</rt>
              <rp>)</rp>学<rp>(</rp>
              <rt>まな</rt>
              <rp>)</rp>武<rp>(</rp>
              <rt>ぶ</rt>
              <rp>)</rp>
            </ruby>
            <span className="text-gray-500">（ビーム）</span>
          </h1>
          <h1 className="animate-name text-sky-400">
            <ruby>
              李<rp>(</rp>
              <rt>Lǐ</rt>
              <rp>)</rp>学<rp>(</rp>
              <rt>Xué</rt>
              <rp>)</rp>武<rp>(</rp>
              <rt>Wǔ</rt>
              <rp>)</rp>
            </ruby>
            <span className="text-gray-500">
              （比<rp>(</rp>
              <rt>Bǐ</rt>
              <rp>)</rp>姆<rp>(</rp>
              <rt>mǔ</rt>
              <rp>)</rp>）
            </span>
          </h1>
        </div>
        <p className="change-color text-sm md:text-lg lg:text-xl">
          A first-year undergraduate pursuing B.Sc. in ICT
        </p>
        <link rel="title" href="favicon.ico" />
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {socialLinks.map((link, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={link.label}
            bg="gray.600"
            color="#ededed"
          >
            <a
              className="flex items-center gap-2"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          </Tooltip>
        ))}
      </footer> */}
    </div>
  );
}
