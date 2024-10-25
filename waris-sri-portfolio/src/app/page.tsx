// "use client";
import { Button, Stack, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BsPersonFill, BsGlobe } from "react-icons/bs";

const ImageComponent = () => {
  return (
    <>
      <Image
        src="/images/pfp.jpg"
        alt="Waris Sripatoomrak"
        borderRadius="7px"
        boxSize="101px"
      />
    </>
  );
};

export default function Home() {
  return (
    <div className="grid items-center justify-items-start min-h-screen p-[4rem] md:p-[10rem] lg:p-[15rem] bg-black">
      <main className="flex flex-col gap-8">
        <ImageComponent />
        <div className="font-bold text-3xl md:text-[2.5rem] lg:text-6xl mb-[1.5rem] md:mb-[2rem] lg:mb-[3.5rem]">
          <h1 className="animate-name text-yellow-400">Waris Sripatoomrak</h1>
          <h1 className="animate-name text-pink-400">วริศ ศรีปทุมรักษ์</h1>
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
          </h1>
        </div>
        <p className="change-color text-md md:text-xl lg:text-2xl">
          A first-year undergraduate pursuing B.Sc. in ICT
        </p>

        <Stack direction="row" spacing={4}>
          <Link href="/about">
            <Button
              rightIcon={<BsPersonFill />}
              colorScheme="whiteAlpha"
              variant="solid"
            >
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              rightIcon={<BsGlobe />}
              colorScheme="whiteAlpha"
              variant="solid"
            >
              Social Media
            </Button>
          </Link>
        </Stack>
      </main>
    </div>
  );
}
