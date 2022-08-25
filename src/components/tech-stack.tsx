import * as React from "react";
import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from "@chakra-ui/react";

import { PageSlideFade } from "./page-transitions";
import Section from "./section";
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { GiStrongMan } from "react-icons/gi";
import SkillCard from "./skill-card";
import { skills } from "data/data";
import Header from "./header";
import { MotionBox } from "./motion";
import { container } from "./page-transitions";
import { FiDatabase } from "react-icons/fi";
import { BiPlug } from "react-icons/bi";

const TechStack = () => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab: string | any[]) => {
    if (tab.length) setSkillsList(skills.filter(skill => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <PageSlideFade>
      <VStack spacing={8}>
        <Section>
          <VStack>
            <Header mt={0} mb={1} underlineColor={""}>
              Tech Stack
            </Header>
            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              A list of my favorite tools and technologies that I use on a
              regular basis.
            </Text>
          </VStack>
        </Section>
        <Section>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabList display="flex" flexWrap="wrap">
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "green.800",
                  bg: "green.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("")}
              >
                <HStack spacing={1}>
                  <Icon as={AiTwotoneThunderbolt} fontWeight="fill"/>
                  <Text>All</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{ 
                  color: "blue.800",
                  bg: "blue.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("languageFramework")}
              >
                <HStack spacing={1}>
                  <Icon as={GiStrongMan} fontWeight="fill" />
                  <Text>Languages And Frameworks</Text>
                </HStack>
              </Tab>
              
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{
                  color: "pink.800",
                  bg: "pink.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("database")}
                >
                <HStack spacing={1}>
                  <Icon as={FiDatabase} fontWeight="fill" />
                  <Text>Databases</Text>
                </HStack>
              </Tab>

              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{
                  color: "yellow.800",
                  bg: "yellow.100"
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("devops")}
                >
                <HStack spacing={1}>
                  <Icon as={AiOutlineCloudServer} fontWeight="fill" />
                  <Text>Devops</Text>
                </HStack>
              </Tab>

              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{
                  color: useColorModeValue("gray.100", "gray.800"),
                  bg: useColorModeValue("gray.900", "gray.100")
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("addition")}
                >
                <HStack spacing={1}>
                  <Icon as={BiPlug} fontWeight="fill" />
                  <Text>Additional</Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels minHeight={"45vh"}>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}                        
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </VStack>
    </PageSlideFade>
  );
};

export default TechStack;
