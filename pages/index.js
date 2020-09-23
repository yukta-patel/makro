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
} from "@chakra-ui/core";
import logo from "./images/logo.png";
import headerImg from "./images/header_img.png";
import videoImg from "./images/video-img.jpg";
import leftMan from "./images/left-man.png";
import rightMan from "./images/right-man.png";
import leftImg from "./images/left-img.png";
import rightImg from "./images/right-img.png";
import { SettingsIcon, ArrowForwardIcon, UnlockIcon } from "@chakra-ui/icons";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Home = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
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

          <Box
            display={{ base: "block", sm: "block", md: "none" }}
            onClick={handleToggle}
          >
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
              sm: show ? "block" : "none",
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
              fontSize={{ base: "20px", md: "47px" }}
              fontWeight="bold"
              mt={{ base: "5px", md: "6.5rem" }}
              textAlign={{ base: "center", md: "left" }}
              mb="30px"
              color="#051441"
              lineHeight="1"
            >
              We build and transform businesse strategy
            </Text>
            <Text
              mb={{ base: "15px", md: "50px" }}
              color="#6A7C92"
              fontSize={{ base: "14px", md: "16px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Faff about only a quid blower I don't want no agro bleeding chim
              pot burke tosser cras nice one boot fanny.
            </Text>
            <HStack>
              <Button
                border="1px"
                borderRadius="45px"
                color="#4154F1"
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

        <Box pb="120px">
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            textAlign="center"
            fontWeight="bold"
            lineHeight="1"
            color="#4154f1"
            letterSpacing="1.6px"
            mt={{ base: "4rem", md: "0px" }}
          >
            WE ARE THE BEST
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            color="#051441"
            fontSize={{ base: "26px", md: "42px" }}
          >
            Why Choose Makro
          </Text>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ Base: "center", md: "space-between" }}
            mt="2rem"
          >
            <Box
              flex="1"
              pr={{ base: "0px", md: "65px" }}
              textAlign={{ Base: "center", md: "left" }}
            >
              <SettingsIcon
                color="#0072e9"
                fontSize="46px"
                lineHeight="75px"
                textAlign="center"
                mb="30px"
              />
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="bold"
                fontColor="#051441"
                mb={{ base: "20px", md: "25px" }}
              >
                Management
              </Text>
              <Text
                color="#6a7c92"
                mb="20px"
                fontSize={{ base: "14px", md: "15px" }}
              >
                Why I say old chap that is spiffing bodge blag pardon me
                buggered mufty Oxfords butty bubble squeak
              </Text>
              <HStack
                justifyContent={{ base: "center", md: "left" }}
                color="#051441"
                fontWeight="semibold"
              >
                <Text>Read More</Text>
                <ArrowForwardIcon fontSize="18px" />
              </HStack>
            </Box>
            <Box
              flex="1"
              mt={{ base: "60px", md: "0px" }}
              pr={{ base: "0px", md: "65px" }}
              textAlign={{ Base: "center", md: "left" }}
            >
              <SettingsIcon
                color="#ec6c4f"
                fontSize="46px"
                lineHeight="75px"
                textAlign="center"
                mb="30px"
              />
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="bold"
                fontColor="#051441"
                mb={{ base: "20px", md: "25px" }}
              >
                Customer Support
              </Text>
              <Text
                color="#6a7c92"
                mb="20px"
                fontSize={{ base: "14px", md: "15px" }}
              >
                Why I say old chap that is spiffing bodge blag pardon me
                buggered mufty Oxfords butty bubble squeak
              </Text>
              <HStack
                justifyContent={{ base: "center", md: "left" }}
                color="#051441"
                fontWeight="semibold"
              >
                <Text>Read More</Text>
                <ArrowForwardIcon fontSize="18px" />
              </HStack>
            </Box>
            <Box
              flex="1"
              mt={{ base: "60px", md: "0px" }}
              pr={{ base: "0px", md: "65px" }}
              textAlign={{ Base: "center", md: "left" }}
            >
              <SettingsIcon
                color=" #40a50b"
                fontSize="46px"
                lineHeight="75px"
                textAlign="center"
                mb="30px"
              />
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="bold"
                fontColor="#051441"
                mb={{ base: "20px", md: "25px" }}
              >
                Collaborative
              </Text>
              <Text
                color="#6a7c92"
                mb="20px"
                fontSize={{ base: "14px", md: "15px" }}
              >
                Why I say old chap that is spiffing bodge blag pardon me
                buggered mufty Oxfords butty bubble squeak
              </Text>
              <HStack
                justifyContent={{ base: "center", md: "left" }}
                color="#051441"
                fontWeight="semibold"
              >
                <Text>Read More</Text>
                <ArrowForwardIcon fontSize="18px" />
              </HStack>
            </Box>

            <Box
              flex="1"
              mt={{ base: "60px", md: "0px" }}
              pr={{ base: "0px", md: "65px" }}
              textAlign={{ Base: "center", md: "left" }}
            >
              <SettingsIcon
                color="#6b3df0"
                fontSize="46px"
                lineHeight="75px"
                textAlign="center"
                mb="30px"
              />
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="bold"
                fontColor="#051441"
                mb={{ base: "20px", md: "25px" }}
              >
                Center software
              </Text>
              <Text
                color="#6a7c92"
                mb="20px"
                fontSize={{ base: "14px", md: "15px" }}
              >
                Why I say old chap that is spiffing bodge blag pardon me
                buggered mufty Oxfords butty bubble squeak
              </Text>
              <HStack
                justifyContent={{ base: "center", md: "left" }}
                color="#051441"
                fontWeight="semibold"
              >
                <Text>Read More</Text>
                <ArrowForwardIcon fontSize="18px" />
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box pt={{ base: "0px", md: "120px" }}>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          textAlign="center"
          fontWeight="700"
          lineHeight="1"
          color="#4154f1"
          letterSpacing="1.6px"
        >
          INTRO VIDEO
        </Text>
        <Text
          textAlign="center"
          fontWeight="bold"
          color="#051441"
          fontSize={{ base: "26px", md: "42px" }}
        >
          Watch our Platform
        </Text>
        <Flex mt={{ base: "2rem", md: "5rem" }} pb="120px">
          <Box border="1px" flex="1">
            <Image
              src={leftMan}
              height={{ base: "84.74px", md: "389.83px" }}
              width={{ base: "50px", md: "230px" }}
            />
          </Box>
          <Box border="1px" flex={{ base: "3", md: "2" }}>
            <Image
              src={videoImg}
              height={{ base: "146.1px", md: "482.14px" }}
              width={{ base: "250px", md: "825px" }}
            />
          </Box>
          <Box border="1px" flex="1">
            <Image
              src={rightMan}
              height={{ base: "75.72px", md: "389.49px" }}
              width={{ base: "35px", md: "180px" }}
            />
          </Box>
        </Flex>
      </Box>

      <Box pt={{ base: "60px", md: "120px" }}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box flex="1">
            <Image
              src={leftImg}
              height={{ base: "223.26px", md: "523.51px" }}
              width={{ base: "290px", md: "680px" }}
              float={{ base: "center", md: "right" }}
            />
          </Box>
          <Box
            mt={{ base: "32px", md: "0px" }}
            flex="1"
            pl={{ base: "0px", md: "30px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <SettingsIcon
              color="#ffba00"
              fontSize="48px"
              lineHeight="75px"
              mb="30px"
            />
            <Text
              fontWeight="bold"
              color="#051441"
              fontSize={{ base: "26px", md: "42px" }}
            >
              Perfect for Operation HR <br />
              and Finance
            </Text>

            <Text
              color="#6a7c92"
              mb={{ base: "20px", md: "30px" }}
              fontSize={{ base: "14px", md: "16px" }}
            >
              Why I say old chap that is, spiffing off his nut cor blimey guvnor
              geeza bloke knees up bobby, sloshed arse William cack Richard.
              Bloke fanny around chesed
            </Text>
            <HStack
              justifyContent={{ base: "center", md: "left" }}
              color="#051441"
              fontWeight="semibold"
            >
              <Text>Read More</Text>
              <ArrowForwardIcon fontSize="18px" />
            </HStack>
          </Box>
        </Flex>
        <Flex mt="120px" flexDirection={{ base: "column-reverse", md: "row" }}>
          <Box
            mt={{ base: "32px", md: "0px" }}
            flex="1"
            pl={{ base: "0px", md: "120px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <UnlockIcon
              color="#ff2486"
              fontSize="48px"
              lineHeight="75px"
              mb="30px"
            />
            <Text
              fontWeight="bold"
              color="#051441"
              fontSize={{ base: "26px", md: "42px" }}
            >
              With efficiency to unlock <br /> more opportunities
            </Text>

            <Text
              color="#6a7c92"
              mb={{ base: "20px", md: "30px" }}
              fontSize={{ base: "14px", md: "16px" }}
            >
              Why I say old chap that is, spiffing off his nut cor blimey guvnor
              geeza bloke knees up bobby, sloshed arse William cack Richard.
              Bloke fanny around chesed
            </Text>
            <HStack
              justifyContent={{ base: "center", md: "left" }}
              color="#051441"
              fontWeight="semibold"
            >
              <Text>Read More</Text>
              <ArrowForwardIcon fontSize="18px" />
            </HStack>
          </Box>
          <Box flex="1" pl={{ base: "0px", md: "30px" }}>
            <Image
              src={rightImg}
              height={{ base: "223.26px", md: "523.51px" }}
              width={{ base: "290px", md: "680px" }}
              // height="523.51px"
              // width="680px"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
