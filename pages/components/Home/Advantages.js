import LinkTo from "next/link";
import { Box, Flex, Text, Image, HStack, Link } from "@chakra-ui/core";
import leftImg from "../../images/left-img.png";
import rightImg from "../../images/right-img.png";
import { SettingsIcon, ArrowForwardIcon, UnlockIcon } from "@chakra-ui/icons";

const Advantages = () => {
  return (
    <Box pt={{ base: 60, md: 120 }}>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box d="flex" flex={1} justifyContent={{ base: "center", md: "left" }}>
          <Image
            borderWidth={1}
            src={leftImg}
            height={{ base: 223.26, md: 523.51 }}
            width={{ base: 290, md: 680 }}
          />
        </Box>
        <Box
          mt={{ base: 32, md: 0 }}
          flex={1}
          pl={{ base: 0, md: 30 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <SettingsIcon color="#ffba00" fontSize={48} lineHeight={75} mb={30} />
          <Text
            fontWeight="bold"
            color="#051441"
            fontSize={{ base: 26, md: 42 }}
          >
            Perfect for Operation HR <br />
            and Finance
          </Text>

          <Text
            color="#6a7c92"
            mb={{ base: 20, md: 30 }}
            fontSize={{ base: 14, md: 16 }}
          >
            Why I say old chap that is, spiffing off his nut cor blimey guvnor
            geeza bloke knees up bobby, sloshed arse William cack Richard. Bloke
            fanny around chesed
          </Text>
          <HStack
            justifyContent={{ base: "center", md: "left" }}
            color="#051441"
            fontWeight="semibold"
            _hover={{ color: "#007bff" }}
          >
            <LinkTo href="#">
              <Link _hover={{ textDecoration: "none" }}>Read More</Link>
            </LinkTo>
            <ArrowForwardIcon fontSize={18} />
          </HStack>
        </Box>
      </Flex>
      <Flex mt={120} flexDirection={{ base: "column-reverse", md: "row" }}>
        <Box
          mt={{ base: 32, md: 0 }}
          flex={1}
          pl={{ base: 0, md: 120 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <UnlockIcon color="#ff2486" fontSize={48} lineHeight={75} mb={30} />
          <Text
            fontWeight="bold"
            color="#051441"
            fontSize={{ base: 26, md: 42 }}
          >
            With efficiency to unlock <br /> more opportunities
          </Text>

          <Text
            color="#6a7c92"
            mb={{ base: 20, md: 30 }}
            fontSize={{ base: 14, md: 16 }}
          >
            Why I say old chap that is, spiffing off his nut cor blimey guvnor
            geeza bloke knees up bobby, sloshed arse William cack Richard. Bloke
            fanny around chesed
          </Text>
          <HStack
            justifyContent={{ base: "center", md: "left" }}
            color="#051441"
            fontWeight="semibold"
            _hover={{ color: "#007bff" }}
          >
            <LinkTo href="#">
              <Link _hover={{ textDecoration: "none" }}>Read More</Link>
            </LinkTo>
            <ArrowForwardIcon fontSize={18} />
          </HStack>
        </Box>
        <Box
          d="flex"
          flex={1}
          pl={{ base: 0, md: 30 }}
          justifyContent={{ base: "center", md: "right" }}
        >
          <Image
            src={rightImg}
            height={{ base: 223.26, md: 523.51 }}
            width={{ base: 290, md: 680 }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Advantages;
