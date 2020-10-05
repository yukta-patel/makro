import { Box, Flex, Text, Button, Image, HStack, Link } from "@chakra-ui/core";
import headerImg from "../../images/header_img.png";
import LinkTo from "next/link";

const Banner = () => {
  return (
    <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
      <Box flex={1}>
        <Text
          fontSize={{ base: 20, md: 47 }}
          fontWeight="bold"
          mt={{ base: 5, md: "6.5rem" }}
          textAlign={{ base: "center", md: "left" }}
          mb={30}
          color="#051441"
          lineHeight="1"
        >
          We build and transform businesse strategy
        </Text>
        <Text
          mb={{ base: 15, md: 50 }}
          color="#6A7C92"
          fontSize={{ base: 14, md: 16 }}
          textAlign={{ base: "center", md: "left" }}
        >
          Faff about only a quid blower I don't want no agro bleeding chim pot
          burke tosser cras nice one boot fanny.
        </Text>
        <HStack>
          <Button
            color="#4154F1"
            backgroundColor="white"
            borderColor="#4154F1"
            borderWidth={1}
            borderRadius={45}
            p={{ base: "13px 24px", md: "18px 50px" }}
            fontWeight="semibold"
          >
            Get Started
          </Button>
          <LinkTo href="#">
            <Link
              borderBottomWidth={1}
              color="#6A7C92"
              _hover={{ color: "#4154F1" }}
            >
              Watch Video
            </Link>
          </LinkTo>
        </HStack>
      </Box>
      <Box flex={1}>
        <Image src={headerImg} height="647.88" width="660.8" />
      </Box>
    </Flex>
  );
};

export default Banner;
