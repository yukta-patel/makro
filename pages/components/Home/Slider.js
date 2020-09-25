import { Box, Flex, Text, Avatar, Image } from "@chakra-ui/core";
import avatar from "../../images/avatar.png";
import symbol1 from "../../images/symbol1.png";
import symbol2 from "../../images/symbol2.png";
import symbol3 from "../../images/symbol3.png";
import symbol4 from "../../images/symbol4.png";
import symbol5 from "../../images/symbol5.png";
import symbol6 from "../../images/symbol6.png";
import symbol7 from "../../images/symbol7.png";
import symbol8 from "../../images/symbol8.png";
import symbol9 from "../../images/symbol9.png";

const Slider = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: 14, md: 16 }}
        textAlign="center"
        fontWeight="700"
        lineHeight="1"
        color="#4154f1"
        letterSpacing={1.6}
      >
        TESTIMONIALS
      </Text>
      <Text
        textAlign="center"
        fontWeight="bold"
        color="#051441"
        fontSize={{ base: 26, md: 42 }}
      >
        Love from Clients
      </Text>
      <Box
        textAlign="center"
        maxWidth={635}
        width="75%"
        m="0 auto"
        mt={{ base: 50, md: 80 }}
      >
        <Avatar src={avatar} height={80} width={80}></Avatar>
        <Text fontSize={24} mt={10} color="#051441" fontWeight="bold">
          Mr. Ridoy Rock
        </Text>
        <Text fontSize={14} color="#6A7C92" mb={30}>
          UI/UX designer
        </Text>
        <Text
          color="#6a7c92"
          mb={{ base: 20, md: 30 }}
          fontSize={{ base: 14, md: 16 }}
          //   textAlign={{ base: "justify", md: "center" }}
        >
          Why say old chap that is spiffing barney nancy boys bleeder and
          chimney pot Richard cheers the little rotter so I said, easy peasy
          buggered blower bevvy A bit of how's your father.Why say older chap
          that is spiffing barney
        </Text>
      </Box>
      <Box
        textAlign="center"
        mt={{ base: 60, md: 120 }}
        maxWidth={1140}
        width="95%"
        m="0 auto"
      >
        <Text
          fontSize={{ base: 24, md: 42 }}
          p="0px 50px"
          p={{ base: "0px", md: "0px 50px" }}
          color="#051441"
          fontWeight="bold"
        >
          Relied on marketers trusted by engineers and beloved by executives
        </Text>
        <Flex flexWrap="wrap" justifyContent="space-around" mt={80}>
          <Image src={symbol1} />
          <Image src={symbol2} />
          <Image src={symbol3} />
          <Image src={symbol4} />
          <Image src={symbol5} />
        </Flex>
        <Flex flexWrap="wrap" justifyContent="space-around" pt={39}>
          <Image src={symbol6} />
          <Image src={symbol7} />
          <Image src={symbol8} />
          <Image src={symbol9} />
        </Flex>
      </Box>
    </Box>
  );
};
export default Slider;
