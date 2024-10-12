import {
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="h-auto w-fit m-auto p-10">
        <h1 className="mb-10 font-bold text-black text-xl p-4 border-4 border-[#EC7524] rounded-xl">
          Page Banner
        </h1>

        {/* <Spinner color="blue.400" size="xl" /> */}

        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <BsArrowRight />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <BsArrowRight />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Tabs>
          <TabList>
            <Tab>หนึ่ง</Tab>
            <Tab>สอง</Tab>
            <Tab>สาม</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (
            <Tag
              size={size}
              key={size}
              borderRadius="full"
              variant="solid"
              colorScheme="orange"
            >
              <TagLabel>Orange</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
        </HStack>
      </div>
    </>
  );
}
