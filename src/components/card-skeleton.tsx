import * as React from "react";
import {
  Box,
  Stack,
  Skeleton,
  VStack,
  HStack,
  useColorModeValue, 
  useMediaQuery
} from "@chakra-ui/react";

const CardSkeleton = () => {
  const bgColor = useColorModeValue("white", "gray.900");

  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan982] = useMediaQuery("(min-width: 982px)");
  const screenWidth = window.innerWidth;

  let width = 390;
  if (isLargerThan982) 
    width = 390;
  else 
    width = isLargerThan720? 300 : screenWidth-50;
  
  const cards:number[] = width === screenWidth-50 ? [1,2,3,4] : [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {cards.map(id => {
        return (
          <Box
            key={id}
            boxSize="xl"
            py={2}
            rounded="xl"
            borderWidth="1px"
            bg={bgColor}
            width={width}
            height={100}
          >
            <Stack isInline justifyContent="space-between" py={2} px={[2, 3]}>
              <Box width="100%">
                <HStack isInline justifyContent="space-between">
                  <Skeleton height="14px" width="40%" />
                  <Skeleton height="14px" width="20%" />
                </HStack>
                <VStack align="start" marginTop={2}>
                  <Skeleton height="8px" width="30%" />
                </VStack>
                <Box marginTop={2}>
                  <Skeleton height="8px" width="100%" />
                  <Stack spacing={2} mt={1} isInline alignItems="center">
                    <Skeleton height="8px" width="80%" />
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        );
      })}
    </>
  );
};

export default CardSkeleton;
