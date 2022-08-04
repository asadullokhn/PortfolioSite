import * as React from "react";
import {
  Text,
  VStack,
  Heading,
  Box,
  Image,
  HStack,
  Divider,
  IconButton,
  useMediaQuery, 
  useDisclosure
} from "@chakra-ui/react";
import { StoryTimeline } from "./story-timeline";
import { FaGraduationCap, FaAward, FaMedal } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import placeholder from "assets/images/placeholder.png";
import { companies, institutes } from "data/data";
import Header from "./header";
import Section from "./section";
import { PageSlideFade } from "./page-transitions";

const MyStory = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan982] = useMediaQuery("(min-width: 982px)");
  const screenWidth = window.innerWidth;
  
  let columnWidth = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {
      columnWidth = screenWidth-50;
    }
  }
  
  return (
    <VStack>
      <Section mb={14}>
        <PageSlideFade>
          <VStack>
            <Header mt={0} mb={1} underlineColor={""}>
              Developer Story
            </Header>
          </VStack>
        </PageSlideFade>
      </Section>
      {columnWidth === screenWidth-50 ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Header margin={5} alignContent={"center"} underlineColor={""} >This feature is not awailable on mobile clients</Header>
          </Box>
        ) : 
      <VStack textAlign="start" align="flex-start" mb={0}>
        <Box>
          <StoryTimeline year={"2022"} index={0} />
          {companies.map((company, index) => (
            <StoryTimeline
              icon={BsFillBriefcaseFill}
              index={index}
            >
              {" "}
              <HStack>
                <Image
                  rounded="full"
                  w={[6, 8]}
                  h={[6, 8]}
                  objectFit="cover"
                  fallbackSrc={placeholder}
                  src={company.logo}
                  alt={company.alt}
                />
                <VStack align="start">
                  <Heading
                    fontSize={[12, 13, 15]}
                    lineHeight="shorter"
                    fontWeight="bold"
                  >
                    <Box>{company.title}</Box>
                    <Box mt={1}>{company.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              <Text fontSize={[12, 13, 15]}>{company.role}</Text>
            </StoryTimeline>
          ))}
          <StoryTimeline year={"2017"} index={0} />
          {institutes.map((institute, index) => (
            <>
              <StoryTimeline
                icon={FaGraduationCap}
                index={index > 0 ? index + 1 : index}
              >
                {" "}
                <HStack>
                  <Image
                    rounded="full"
                    w={[6, 8]}
                    h={[6, 8]}
                    objectFit="cover"
                    fallbackSrc={placeholder}
                    src={institute.logo}
                    alt={institute.alt}
                  />
                  <VStack align="start">
                    <Heading
                      fontSize={[12, 13, 15]}
                      lineHeight="shorter"
                      fontWeight="bold"
                    >
                      <Box>{institute.short_title}</Box>
                      <Box mt={1}>{institute.period}</Box>
                    </Heading>
                  </VStack>
                </HStack>
                <Divider my={2} />
                <Text fontSize={[12, 13, 15]}>{institute.role}</Text>
              </StoryTimeline>
              {institute.awards &&
                institute.awards.map((award, index1) => (
                  <StoryTimeline icon={FaAward} index={index1 + index + 1}>
                    {" "}
                    <HStack>
                      <IconButton
                        colorScheme="blue"
                        rounded="full"
                        size="sm"
                        aria-label="medal"
                        icon={<FaMedal />}
                      />

                      <VStack align="start">
                        <Heading
                          fontSize={[12, 13, 15]}
                          lineHeight="shorter"
                          fontWeight="bold"
                        >
                          <Box>{award.title}</Box>
                          <Box mt={1}>{award.date}</Box>
                        </Heading>
                      </VStack>
                    </HStack>
                    <Divider my={2} />
                    <Text fontSize={[12, 13, 15]}>{award.description}</Text>
                  </StoryTimeline>
                ))}

              <StoryTimeline
                year={institute.startingYear}
                index={0}
                skipTrail={index === institutes.length - 1 ? true : false}
              />
            </>
          ))}
        </Box>
      </VStack>
      }
    </VStack>
  );
};

export default MyStory;
