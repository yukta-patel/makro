import Head from "next/head";
// import styles from "../styles/Home.module.css";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/core";
import logo from "./images/logo.png";
import headerImg from "./images/header_img.png";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Home = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box maxWidth="1200px" width="90%" m="0 auto">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        mt="1.5rem"
        color="#6A7C92"
        {...props}
      >
        <Flex align="center">
          <Image src={logo} height="45px" width="147px" alt="logoimage" />
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="black"
            width="20.13px"
            height="23.2px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Box
          display={{
            base: show ? "block" : "none",
            md: "flex",
          }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          justifyContent="center"
          color="#051441"
          fontWeight="500"
        >
          <MenuItems mr="40px" p="35px 0px">
            Home
          </MenuItems>
          <MenuItems mr="40px" p="35px 0px">
            Portfolio
          </MenuItems>
          <MenuItems mr="40px" p="35px 0px">
            Gallery
          </MenuItems>
          <MenuItems mr="40px" p="35px 0px">
            Pages
          </MenuItems>
          <MenuItems mr="40px" p="35px 0px">
            News
          </MenuItems>
          <MenuItems p="35px 0px">Shop</MenuItems>
        </Box>
        <Box
          display={{ base: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            bg="#4154F1"
            borderRadius="45px"
            border="none"
            color="white"
            p="12px 35px 13px"
            _hover={{ color: "white", bg: "#4154F1" }}
          >
            Sign In
          </Button>
        </Box>
      </Flex>
      <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
        <Box flex="1">
          <Text
            // fontSize="47px"
            fontSize={{ base: "20px", md: "47px" }}
            fontWeight="bold"
            // mt="6.5rem"
            mt={{ base: "5px", md: "6.5rem" }}
            textAlign={{ base: "center", md: "left" }}
            mb="30px"
            color="#051441"
            lineHeight="1"
          >
            We build and transform businesse strategy
          </Text>
          <Text
            // mb="50px"
            mb={{ base: "15px", md: "50px" }}
            color="#6A7C92"
            fontSize="16px"
            textAlign={{ base: "center", md: "left" }}
          >
            Faff about only a quid blower I don't want no agro bleeding chim pot
            burke tosser cras nice one boot fanny.
          </Text>
          <HStack>
            <Button
              border="1px"
              borderRadius="45px"
              color="#4154F1"
              // p="18px 50px 19px"
              p={{ base: "13px 24px", md: "18px 50px" }}
              fontWeight="semibold"
            >
              Get Started
            </Button>
            <Text
              borderBottom="1px"
              color="#6A7C92"
              _hover={{ color: "#4154F1" }}
            >
              Watch Video
            </Text>
          </HStack>
        </Box>
        <Box flex="1">
          <Image src={headerImg} height="647.88" width="660.8" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
