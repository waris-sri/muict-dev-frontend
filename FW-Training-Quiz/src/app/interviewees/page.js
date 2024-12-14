"use client";
import { Link, NumberInputField } from "@chakra-ui/react";

// import React, { useState } from "react";
import React, { useRef } from "react";
export default function Check() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className={`text-black text-4xl text-center`}>
          Check Your Interview Eligiblility
        </h1>
        <NumberInputField
          className="py-12"
          min={6387001}
          max={6688299}
          onChange={(valueString) => setValue(valueString)}
        >
          <NumberInputField
            className="rounded-none"
            placeholder="Please Enter Your ID"
          />
        </NumberInputField>
        <Link
          href={`/interviewees/${value}`}
          className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black hover:italic"
        >
          SEE YOUR FATE
        </Link>
      </div>
    </>
  );
}
