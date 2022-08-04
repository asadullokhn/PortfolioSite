import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2
} from "react-icons/fi";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import { Link as NavLink } from "react-router-dom";
import Header from "./header";
import { BiCertification, BiWon } from "react-icons/bi";
import { RiCupFill, RiCupLine } from "react-icons/ri";
import { GiStrong, GiStrongMan } from "react-icons/gi";
import { FaCertificate } from "react-icons/fa";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NavLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box mb={6}>
        <Header mt={0} mb={0} underlineColor={""}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={GiStrong}>
              <ExternalLink color={"blue.200"} 
              url="https://t.me/najottalim/2308" text={"Grand "} />
              for Bootcamp course
            </TimelineItem>
            
            <TimelineItem icon={FaCertificate} skipTrail>
              Passed IELTS exam and got total 5.5 score
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2016
          </Heading>
          <Box>
            <TimelineItem icon={FiHome} skipTrail>
              Nominated on national challage named{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://scontent.ftas1-1.fna.fbcdn.net/v/t31.18172-8/14379601_314566238901283_4658571685209550465_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TGes6iKEU6oAX_bI3iK&_nc_oc=AQkVh-qxuK5N6vdSb3gJ81PPkC4XK4mYVrAfWE4UMncoJZZUiuaT_4FHx3ue4kEtFHw&_nc_ht=scontent.ftas1-1.fna&oh=00_AT8w8QUWNwhehthh0-rqFIuWfnpbGuFFLHlNJU--z8QIkA&oe=6310F054"
                text={"\"BestSoftChallage\""}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
