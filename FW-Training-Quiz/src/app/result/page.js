"use client";
import { Link, NumberInput, NumberInputField } from "@chakra-ui/react";

// import React, { useState } from "react";
import React, { useRef } from "react";
export default function Check() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <div class="flex flex-col h-screen items-center justify-center">
        <h1 className={`text-black text-4xl text-center`}>Check Your Result</h1>
        <NumberInput
          className="py-12"
          min={6387001}
          max={6688299}
          onChange={(valueString) => setValue(valueString)}
        >
          <NumberInputField
            className="rounded-none"
            placeholder="Please Enter Your ID"
          />
        </NumberInput>
        <Link
          href={`/result/${value}`}
          className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black hover:italic"
        >
          SEE THE RESULT
        </Link>
      </div>
    </>
  );
}
