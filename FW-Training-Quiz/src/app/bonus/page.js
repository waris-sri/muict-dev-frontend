import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import Image from "next/image";
export default function Bonus() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "5rem",
        }}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2"
          width={300}
          height={300}
          alt=""
        ></Image>
        {users.map((property) => (
          <React.Fragment key={property.key}>
            <h1 style={{ fontWeight: "bold" }}>({property.key + 1})</h1>
            <h1 style={{ fontWeight: "bold" }}>{property.question}</h1>
            <RadioGroup
              style={{
                marginBottom: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {property.options.map((option, idx) => (
                <Radio
                  key={idx}
                  value={idx.toString()}
                  style={{ marginRight: "0.5rem" }}
                >
                  {option}
                </Radio>
              ))}
            </RadioGroup>
          </React.Fragment>
        ))}
      </div>
      <div>

      </div>
    </>
  );
}

const users = [
  {
    key: 0,
    question:
      "What is the value of the 3ʳᵈ term of the following sum to find the determinant of the following matrix?",
    answer: [2],
    score: 4,
    options: ["12", "15", "20", "25"],
  },
  {
    key: 1,
    question:
      "Which intervals of 𝑥 should contain a root of a function f(𝑥) = 𝑥³ - 6𝑥² + 4𝑥 + 12?",
    answer: [2],
    score: 1,
    options: ["[-1, 1]", "[1.5, 2]", "[-1.5, -1]", "[2, 2.5]"],
  },
  {
    key: 2,
    question: "Are you a good student?",
    answer: [1],
    score: 1,
    options: ["No", "Yes"],
  },
  {
    key: 3,
    question: "Who is the instructor of this subject?",
    answer: [3],
    score: 1,
    options: ["Aj. Preecha", "Aj. Snit", "Aj. Petre", "Aj. Peter", "Aj. Petch"],
  },
  {
    key: 4,
    question: "What are the subject outcomes?",
    answer: [0, 1, 4],
    score: 1,
    options: [
      "to know things",
      "to learn things",
      "to have fun",
      "to be a normal human",
      "to hide your hidden inventory",
    ],
  },
];
