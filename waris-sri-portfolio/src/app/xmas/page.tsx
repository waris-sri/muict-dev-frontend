import { Image } from "@chakra-ui/react";
export default function Home() {
  return (
    <div
      className="grid items-center min-h-screen pt-0 pb-0 p-[4rem]
    md:p-[10rem] lg:p-[15rem] bg-gradient-to-b from-green-900 to-black"
    >
      <div
        className="sway drop-shadow-lg fixed top-0 left-0 right-0
      flex justify-center z-20"
      >
        <div className="scale-top">
          <Image
            src="/images/mistletoe.png"
            alt="mistletoe"
            objectFit="cover"
            h="30vh"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center drop-shadow-lg font-bold sm:mt-[-1rem] md:mt-[7rem] lg:mt-[5rem]
        text-[1.67rem] md:text-[2.5rem] lg:text-[2.9rem] mb-[1.5rem] md:mb-[2rem] lg:mb-[3.5rem]"
      >
        <h1 className="animate-name text-red-300">🎁 Merry Christmas! ❄️</h1>
        <h1 className="animate-name text-green-300">
          🧩 สุขสันต์วันคริสต์มาส! 🎄
        </h1>
        <h1 className="animate-name text-yellow-300">
          🔔 メリークリスマス! 🌟
        </h1>
        <h1 className="animate-name text-sky-300">🍪 圣诞快乐! 🥛</h1>
        <main className="flex flex-col gap-3 md:gap-10 mt-[3.5rem] md:mt-[5rem] lg:mt-[7rem] text-[1.5rem] md:text-[2rem]">
          <p className="blur-up font-normal text-center text-[#ededed] text-base md:text-md lg:text-lg">
            I&apos;d been thinking what to get for you on Christmas, but
            it&apos;s kinda tough realizing that you don&apos;t need anything.
            However, I know that you&apos;ve been playing games, so it might be
            nice if I bought you a Steam giftcard. It&apos;s not the most
            thoughtful act I&apos;ve done, but I see it as a little gesture
            towards what brings you joy.
            <br /> <br />
            <b>
              Have fun and happy holidays,
              <br />
              Your partner
              <br />
              ❤︎
            </b>
          </p>
        </main>
      </div>
    </div>
  );
}
