import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Background />
      <div className="min-h-screen flex flex-col pt-[72px]">
        <main className="flex-grow flex flex-col items-center p-[5rem] z-10 bg-transparent">
          <div className="h-auto flex flex-col items-center">
            <div className="font-bold text-4xl md:text-[3rem] lg:text-6xl z-50 text-center">
              <div className="flex flex-col items-center overflow-hidden">
                <h1 className="animate-name text-yellow-400">
                  Waris Sripatoomrak
                </h1>
                <h1 className="animate-name text-pink-400">
                  วริศ ศรีปทุมรักษ์
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
            </div>
          </div>
          <p className="mt-[4rem] change-color text-md md:text-xl lg:text-2xl lg:mt-[5rem] z-50 text-center">
            A first-year undergraduate pursuing B.Sc. in ICT
          </p>
        </main>
        <Beam />
      </div>
    </>
  );
}

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50">
      <Image
        src="/images/bg.jpeg"
        alt="Background"
        objectFit="cover"
        w="full"
        h="full"
      />
    </div>
  );
};

const Beam = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <Image
        src="/images/beam.png"
        alt="Waris Sripatoomrak"
        objectFit="cover"
        h="75vh"
      />
    </div>
  );
};
