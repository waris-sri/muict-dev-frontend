"use client";

import { Tooltip, Link, Button } from "@chakra-ui/react";
import {
  BsInstagram,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsFacebook,
  BsArrowLeft,
} from "react-icons/bs";

export default function Home() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/waris.beam/",
      icon: <BsInstagram />,
      label: "Instagram",
      name: "@waris.beam",
    },
    {
      href: "https://github.com/waris-sri/",
      icon: <BsGithub />,
      label: "GitHub",
      name: "waris-sri",
    },
    {
      href: "https://www.youtube.com/@warisbeam/",
      icon: <BsYoutube />,
      label: "YouTube",
      name: "@warisbeam",
    },
    {
      href: "https://www.linkedin.com/in/waris-sripatoomrak-316824276/",
      icon: <BsLinkedin />,
      label: "LinkedIn",
      name: "Waris Sripatoomrak",
    },
    {
      href: "https://www.facebook.com/waris.sripatoomrak/",
      icon: <BsFacebook />,
      label: "Facebook",
      name: "Waris Sripatoomrak",
    },
  ];

  return (
    <div className="grid items-center justify-items-start min-h-screen p-[4rem] md:p-[10rem] lg:p-[15rem] bg-black">
      <div className="font-bold text-3xl md:text-[2.5rem] lg:text-6xl mb-[1.5rem] md:mb-[2rem] lg:mb-[3.5rem]">
        <h1 className="animate-name text-yellow-400">Social Media</h1>
        <h1 className="animate-name text-pink-400">สื่อสังคม</h1>
        <h1 className="animate-name text-lime-400">ソーシャルメディア</h1>
        <h1 className="animate-name text-sky-400">社交媒体</h1>
        <main className="flex flex-col gap-3 md:gap-10 mt-[3.5rem] md:mt-[5rem] lg:mt-[7rem] text-[1.4rem] md:text-[2rem]">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="flex flex-col sm:flex-row items-start gap-2 text-gray-500 transition-colors hover:text-[#ededed] hover:transition-colors"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip
                label={link.label}
                bg="gray.600"
                color="#ededed"
                placement="bottom-start"
              >
                <span className="gap-4 flex items-center justify-center">
                  {link.icon}
                  {link.name}
                </span>
              </Tooltip>
            </a>
          ))}
          <Link href="/">
            <Button
              leftIcon={<BsArrowLeft />}
              colorScheme="gray"
              variant="link"
            >
              Back to home
            </Button>
          </Link>
        </main>
      </div>
    </div>
  );
}