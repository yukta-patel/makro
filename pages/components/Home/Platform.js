import { Box, Flex, Text, Image, HStack } from "@chakra-ui/core";
import videoImg from "../../images/video-img.jpg";
import leftMan from "../../images/left-man.png";
import rightMan from "../../images/right-man.png";
import leaves from "../../images/leaves.png";

const Platform = () => {
  return (
    <Box pt={{ base: 0, md: 120 }}>
      <Text
        fontSize={{ base: 14, md: 16 }}
        textAlign="center"
        fontWeight="700"
        lineHeight="1"
        color="#4154f1"
        letterSpacing={1.6}
      >
        INTRO VIDEO
      </Text>
      <Text
        textAlign="center"
        fontWeight="bold"
        color="#051441"
        fontSize={{ base: 26, md: 42 }}
      >
        Watch our Platform
      </Text>
      <Flex mt={{ base: "2rem", md: "5rem" }} pb={120}>
        <Box flex={1}>
          <HStack>
            <Image
              src={leftMan}
              height={{ base: 84.74, md: 389.83 }}
              width={{ base: 50, md: 230 }}
            />
            <Image
              src={leaves}
              width={{ base: 30, md: 170 }}
              pt={{ base: 120, md: 340 }}
              mr={{ base: 70, md: 0 }}
            />
          </HStack>
        </Box>
        <Box flex={{ base: "3", md: "2" }}>
          <Image
            src={videoImg}
            height={{ base: 146.1, md: 482.14 }}
            width={{ base: 250, md: 825 }}
          />
        </Box>
        <Box flex={1}>
          <Image
            src={rightMan}
            height={{ base: 75.72, md: 389.49 }}
            width={{ base: 35, md: 180 }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Platform;
