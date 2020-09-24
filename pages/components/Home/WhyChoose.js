import { Box, Flex, Text, HStack } from "@chakra-ui/core";
import { SettingsIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const WhyChoose = () => {
  return (
    <Box pb={120}>
      <Text
        fontSize={{ base: 14, md: 16 }}
        textAlign="center"
        fontWeight="bold"
        lineHeight="1"
        color="#4154f1"
        letterSpacing={1.6}
        mt={{ base: "4rem", md: 0 }}
      >
        WE ARE THE BEST
      </Text>
      <Text
        textAlign="center"
        fontWeight="bold"
        color="#051441"
        fontSize={{ base: 26, md: 42 }}
      >
        Why Choose Makro
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        mt="2rem"
      >
        <Box
          flex="1"
          pr={{ base: 0, md: 65 }}
          textAlign={{ Base: "center", md: "left" }}
        >
          <SettingsIcon
            color="#0072e9"
            fontSize={46}
            lineHeight={75}
            textAlign="center"
            mb={30}
          />
          <Text
            fontSize={{ base: 20, md: 24 }}
            fontWeight="bold"
            fontColor="#051441"
            mb={{ base: 20, md: 25 }}
          >
            Management
          </Text>
          <Text color="#6a7c92" fontSize={{ base: 14, md: 15 }} mb={19}>
            Why I say old chap that is spiffing bodge blag pardon me buggered
            mufty Oxfords butty bubble squeak
          </Text>
          <HStack
            justifyContent={{ base: "center", md: "left" }}
            color="#051441"
            fontWeight="semibold"
          >
            <Text>Read More</Text>
            <ArrowForwardIcon fontSize={18} />
          </HStack>
        </Box>
        <Box
          flex="1"
          mt={{ base: 60, md: 0 }}
          pr={{ base: 0, md: 65 }}
          textAlign={{ Base: "center", md: "left" }}
        >
          <SettingsIcon
            color="#ec6c4f"
            fontSize={46}
            lineHeight={75}
            textAlign="center"
            mb={30}
          />
          <Text
            fontSize={{ base: 20, md: 24 }}
            fontWeight="bold"
            fontColor="#051441"
            mb={{ base: 20, md: 25 }}
          >
            Customer Support
          </Text>
          <Text color="#6a7c92" mb={19} fontSize={{ base: 14, md: 15 }}>
            Why I say old chap that is spiffing bodge blag pardon me buggered
            mufty Oxfords butty bubble squeak
          </Text>
          <HStack
            justifyContent={{ base: "center", md: "left" }}
            color="#051441"
            fontWeight="semibold"
          >
            <Text>Read More</Text>
            <ArrowForwardIcon fontSize={18} />
          </HStack>
        </Box>
        <Box
          flex="1"
          mt={{ base: 60, md: 0 }}
          pr={{ base: 0, md: 65 }}
          textAlign={{ Base: "center", md: "left" }}
        >
          <SettingsIcon
            color=" #40a50b"
            fontSize={46}
            lineHeight={75}
            textAlign="center"
            mb={30}
          />
          <Text
            fontSize={{ base: 20, md: 24 }}
            fontWeight="bold"
            fontColor="#051441"
            mb={{ base: 20, md: 25 }}
          >
            Collaborative
          </Text>
          <Text color="#6a7c92" mb={19} fontSize={{ base: 14, md: 15 }}>
            Why I say old chap that is spiffing bodge blag pardon me buggered
            mufty Oxfords butty bubble squeak
          </Text>
          <HStack
            justifyContent={{ base: "center", md: "left" }}
            color="#051441"
            fontWeight="semibold"
          >
            <Text>Read More</Text>
            <ArrowForwardIcon fontSize={18} />
          </HStack>
        </Box>

        <Box
          flex="1"
          mt={{ base: 60, md: 0 }}
          pr={{ base: 0, md: 65 }}
          textAlign={{ Base: "center", md: "left" }}
        >
          <SettingsIcon
            color="#6b3df0"
            fontSize={46}
            lineHeight={75}
            textAlign="center"
            mb={30}
          />
          <Text
            fontSize={{ base: 20, md: 24 }}
            fontWeight="bold"
            fontColor="#051441"
            mb={{ base: 20, md: 25 }}
          >
            Center software
          </Text>
          <Text color="#6a7c92" mb={19} fontSize={{ base: 14, md: 15 }}>
            Why I say old chap that is spiffing bodge blag pardon me buggered
            mufty Oxfords butty bubble squeak
          </Text>
          <HStack
            justifyContent={{ base: "center", md: "left" }}
            color="#051441"
            fontWeight="semibold"
          >
            <Text>Read More</Text>
            <ArrowForwardIcon fontSize={18} />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyChoose;
