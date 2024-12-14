"use client";

import Image from "next/image";
import { Box, Link, SimpleGrid } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-ma gap-100 lg:p-32 p-6">
        <SimpleGrid columns={[1, 1, 2]} spacingX="40px" spacingY="20px">
          <div>
            <Image
              src="head_banner.svg"
              width={1000}
              height={1000}
              alt="banner"
              className="w-full"
            />
          </div>
          <div>
            <h1 className="text-6xl">
              did someone tell you that your knowledge cannot be implemented in
              the real-world problems?
            </h1>
            <h1 className="italic text-6xl">They were wrong!</h1>
            <p className="pt-12 text-xl">
              At Dev Club ICT Mahidol, we belive that every knowledge can be
              implemented in the real-world problems. We are a sandbox for
              everyone to learn, to try, and to experience the real-world
              problems of working in software developement field, not only
              developers we also welcome other important roles for software
              developement such as 📋{" "}
              <a className="italic"> Quality Assurance</a> and 🎨{" "}
              <a className="italic">UX/UI Designer and Art</a>. Cannot wait to
              see you here.{" "}
            </p>
            {/* <Link href="/result"><button  className="bg-[#000000] text-white text-2xl hover:text-black hover:bg-[#FFFFFF] border-2 border-black mr-6 hover:italic py-4 px-16  mt-6">See the Result</button></Link> */}
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}
