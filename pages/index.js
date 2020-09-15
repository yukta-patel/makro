import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/core";
// import logo from "./images/logo.png";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Home = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box maxWidth="1440px" width="90%" m="0 auto">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        color="black"
        {...props}
      >
        <Flex align="center">
          <Heading as="h1" size="lg">
            Chakra UI
          </Heading>
          {/* <img src={logo} /> */}
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="black"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems>Home</MenuItems>
          <MenuItems>Portfolio</MenuItems>
          <MenuItems>Gallery</MenuItems>
          <MenuItems>Pages</MenuItems>
          <MenuItems>News</MenuItems>
          <MenuItems>Shop</MenuItems>
        </Box>
        <Box
          display={{ base: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button bg="transparent" border="1px">
            Create account
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
