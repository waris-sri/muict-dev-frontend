import { Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { BsPersonFill, BsGlobe } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white py-4 px-5 bg-black bg-opacity-[0.4] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <Link
            className="text-2xl font-bold hover:animate-colorCycle"
            href="/"
          >
            WS
          </Link>
        </div>
        <Stack direction="row" spacing={4}>
          <Link href="/about">
            <Button
              rightIcon={<BsPersonFill />}
              colorScheme="undefined"
              variant="ghost"
              className="hover:ring-1 ring-[#ffffff5a]"
            >
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              rightIcon={<BsGlobe />}
              colorScheme="undefined"
              variant="ghost"
              className="hover:ring-1 ring-[#ffffff5a]"
            >
              Contact
            </Button>
          </Link>
        </Stack>
      </div>
    </nav>
  );
}
