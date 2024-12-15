"use client";
import { Link, NumberInput, NumberInputField } from "@chakra-ui/react";
import React from "react";

export default function Check() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-black text-4xl text-center">
          Check Your Interview Eligibility
        </h1>
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
          href={`/interviewees/${value}`}
          className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black hover:italic"
        >
          SEE YOUR FATE
        </Link>
      </div>
    </>
  );
}
