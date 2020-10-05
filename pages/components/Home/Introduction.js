import { Box, Flex, Text, Button, HStack, Image } from "@chakra-ui/core";
import { SettingsIcon } from "@chakra-ui/icons";
import mobile from "../../images/mobile.png";
import computer from "../../images/computer.png";
import watch from "../../images/watch.png";

const Introduction = () => {
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        transform="rotateX(150deg)"
        width="100%"
        mb={-250}
        mt={-1000}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 500 500">
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            fill="#007bff"
            stroke="none"
          ></path>
        </svg>
      </Box>
      <Box backgroundColor="#007bff" mt={120} mb={120}>
        <Flex pb={120} flexDirection={{ base: "column", md: "row" }}>
          <HStack flex={1}>
            <Image
              src={mobile}
              alt="mobile"
              width={{ base: 80, md: 150 }}
              position="relative"
              top={{ base: 19, md: 80 }}
            />

            <Image
              src={computer}
              alt="computer"
              width={{ base: 280, md: 680 }}
              position="relative"
              left={{ base: -60, md: -120 }}
            />

            <Image
              src={watch}
              alt="watch"
              width={{ base: 36, md: 70 }}
              position="relative"
              left={{ base: -98, md: -185 }}
              top={{ base: 45, md: 120 }}
            />
          </HStack>
          <Box
            textColor="white"
            mt={{ base: 50, md: 32 }}
            flex={1}
            pl={{ base: 0, md: 30 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <SettingsIcon fontSize={48} lineHeight={75} mb={30} />
            <Text fontWeight="bold" fontSize={{ base: 26, md: 42 }}>
              We love to build awesome <br />
              and useful softwares
            </Text>

            <Text mb={{ base: 20, md: 30 }} fontSize={{ base: 14, md: 16 }}>
              Why I say old chap that is, spiffing off his nut cor blimey
              guvnords geeza bloke knees up bobby, sloshed arse William cack
              Richard. Bloke fanny around chesed of bum bag old lost the pilot
              say there spiffing off his nut.
            </Text>
            <Button
              backgroundColor="#007bff"
              textAlign="center"
              color="white"
              borderColor="white"
              borderWidth={1}
              borderRadius={45}
              p={{ base: "13px 24px", md: "18px 50px" }}
              fontWeight="semibold"
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Introduction;
