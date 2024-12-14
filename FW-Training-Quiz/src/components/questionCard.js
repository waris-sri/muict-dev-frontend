import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Icon,
  Image,
} from "@chakra-ui/react";

import { BsFillArrowDownCircleFill, BsPlusCircle } from "react-icons/bs";

const questionCard = ({
  question,
  answer,
  allowFile,
  fileRoot,
  filename,
  fileName,
}) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton className="">
              <div className="flex w-full justify-between items-center pb-5 pt-5">
                <h1
                  className="font-medium text-left
                                text-base
                                sm:text-xl
                                md:text-2xl"
                >
                  {question}
                </h1>
                <AccordionIcon
                  fontSize={{ base: "xl", md: "3xl" }}
                  m="1"
                  as={BsPlusCircle}
                  transform={isExpanded ? "rotate(-135deg)" : null}
                />
              </div>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div
              className="text-base
                                sm:text-lg
                                md:text-xl"
            >
              {answer}
            </div>
            <div className="p-4 flex flex-col items-center">
              {/* <Image className={`${allowImg} w-96`} width={478} height={692} alt={imgAlt} src={imgL}/> */}
              <div
                className={`${allowFile} flex flex-col lg:flex-row w-full sm:w-4/6 md:w-3/6 p-6 mt-4 rounded-3xl bg-[#EDEDED] justify-center items-center`}
              >
                <Image
                  width={32}
                  height={32}
                  src="pdfIcon.svg"
                  alt="PDF Icon"
                />
                <div className="flex flex-col gap-4 items-center">
                  <p className=" text-sm md:text-base font-medium">
                    {fileName}
                  </p>

                  <a
                    href={fileRoot}
                    download={filename}
                    className="w-fit rounded-full font-medium hover:text-[#FFFFFF] hover:bg-[#000000] bg-[#FFFFFF] px-4 p-2"
                  >
                    Download File
                    <Icon className="ml-1" as={BsFillArrowDownCircleFill} />
                  </a>
                </div>
              </div>
            </div>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default questionCard;
