"use client";

import Image from "next/image";
import { Box, Icon, Link, SimpleGrid } from "@chakra-ui/react";

import { BsArrowUpRight } from "react-icons/bs";

export default function Location() {
  return (
    <>
      <div className="grid grid-flow-col mt-12 auto-cols-ma gap-100 lg:mx-32 p-6 bg-black">
        <SimpleGrid columns={[1, 1, 2]} spacingX="40px" spacingY="20px">
          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2"
              width={1000}
              height={1000}
              alt="ICT Building"
              className="w-full"
            />
          </div>
          <div className="items-center">
            <h1 className="text-5xl text-white">
              Dev Club is currently temporarily located in room MUAI2 at the
              Mahidol AI Center
              <br />
              Faculty of ICT, Mahidol University
            </h1>
            <Link href="https://maps.app.goo.gl/QgykA6nfCLHqc7Mh6">
              <button className="bg-[#FFFFFF] text-black text-2xl hover:text-white hover:bg-[#000000] border-2 border-white mr-6 hover:italic py-4 px-6 mt-6">
                <Icon m="1">
                  <BsArrowUpRight />
                </Icon>
                Open in Map
              </button>
            </Link>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}
