import { Box, Flex, Text, Button, HStack, Image } from "@chakra-ui/core";
import { SettingsIcon } from "@chakra-ui/icons";
import mobile from "../../images/mobile.png";
import computer from "../../images/computer.png";
import watch from "../../images/watch.png";

const Introduction = () => {
  return (
    <Box backgroundColor="#007bff" mt={120} mb={120}>
      <Flex pb={120} flexDirection={{ base: "column", md: "row" }}>
        <HStack flex={1}>
          <image src={mobile} borderColor="white" height={100} width={100} />
          <image src={computer} height={1000} width={1000} />
          <image src={watch} height={1000} width={1000} />
        </HStack>
        <Box
          textColor="white"
          mt={{ base: 0, md: 32 }}
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
            Why I say old chap that is, spiffing off his nut cor blimey guvnords
            geeza bloke knees up bobby, sloshed arse William cack Richard. Bloke
            fanny around chesed of bum bag old lost the pilot say there spiffing
            off his nut.
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
  );
};

export default Introduction;
