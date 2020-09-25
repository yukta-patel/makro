import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Link,
} from "@chakra-ui/core";
import ftrLogo from "../../images/ftr-logo.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box mt={120}>
      <Box backgroundColor="#007bff">
        <Flex
          maxWidth={1140}
          width="95%"
          m="0 auto"
          p="60px 0px"
          color="white"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={2} textAlign={{ base: "center", md: "left" }}>
            <Text
              fontSize={{ base: 28, md: 30 }}
              fontWeight="bold"
              m="15px 0px"
            >
              Want to get Started?
            </Text>
            <Text fontSize={{ base: 15, md: 16 }}>
              The free demo comes with no commitments and <br /> no credit card
              required.
            </Text>
          </Box>
          <Box flex={2} d="flex" alignItems="center" mt={{ base: 30, md: 0 }}>
            <Input variant="flushed" placeholder="Your Email" />
          </Box>
          <Box
            flex={1}
            d="flex"
            alignItems="center"
            justifyContent="center"
            mt={{ base: 30, md: 0 }}
          >
            <Button
              fontSize={18}
              textAlign="center"
              borderColor="white"
              borderWidth={1}
              borderRadius={45}
              p={{ base: "13px 24px", md: "18px 50px" }}
              fontWeight="semibold"
            >
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        backgroundColor="#07112d"
        borderBottomWidth={1}
        borderBottomColor="#6A7C92"
      >
        <Flex
          maxWidth={1140}
          width="95%"
          m="0 auto"
          p="100px 0px"
          color="white"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box flex={1.5}>
            <Image src={ftrLogo} height={45} width={147} alt="logoimage" />
            <Box mt={39} fontSize={{ base: 15, md: 16 }}>
              <Text>
                Email: <span style={{ color: "#6A7C92" }}>makro@gmail.com</span>
              </Text>
            </Box>
            <Box mt={15} fontSize={{ base: 15, md: 16 }}>
              <Text>
                Phone:{" "}
                <span style={{ color: "#6A7C92" }}>+948 256 347 968</span>
              </Text>
            </Box>
            <InputGroup fontSize={16} mt={39} size="lg" width={300}>
              <Input
                backgroundColor="#65778D80"
                borderRadius={45}
                placeholder="Email"
              />
              <InputRightElement
                children={<ArrowForwardIcon fontSize={18} />}
              />
            </InputGroup>
          </Box>
          <Box flex={1} mt={{ base: 19, md: 0 }}>
            <Text fontSize={{ base: 17, md: 20 }} fontWeight="bold">
              Makro Homes
            </Text>
            <Box
              mt={{ base: 15, md: 30 }}
              color="#6A7C92"
              lineHeight={{ base: 8, md: 10 }}
            >
              <Link>
                <Text>Agency</Text>
              </Link>
              <Link>
                <Text>App Landing</Text>
              </Link>
              <Link>
                <Text>Chat</Text>
              </Link>
              <Link>
                <Text>Digital Agency</Text>
              </Link>
              <Link>
                <Text>Digital Marketing</Text>
              </Link>
            </Box>
          </Box>
          <Box flex={1} mt={{ base: 29, md: 0 }}>
            <Text fontSize={{ base: 17, md: 20 }} fontWeight="bold">
              More Homes
            </Text>
            <Box
              mt={{ base: 15, md: 30 }}
              color="#6A7C92"
              lineHeight={{ base: 8, md: 10 }}
            >
              <Link>
                <Text>HR Management</Text>
              </Link>
              <Link>
                <Text>Payment</Text>
              </Link>
              <Link>
                <Text>Project Management</Text>
              </Link>
              <Link>
                <Text>SAAS</Text>
              </Link>
              <Link>
                <Text>Software</Text>
              </Link>
            </Box>
          </Box>
          <Box flex={1} mt={{ base: 29, md: 0 }}>
            <Text fontSize={{ base: 17, md: 20 }} fontWeight="bold">
              Useful Pages
            </Text>
            <Box
              mt={{ base: 15, md: 30 }}
              color="#6A7C92"
              lineHeight={{ base: 8, md: 10 }}
            >
              <Link>
                <Text>About Us</Text>
              </Link>
              <Link>
                <Text>Our Services</Text>
              </Link>
              <Link>
                <Text>Casestudy</Text>
              </Link>
              <Link>
                <Text>Jobs</Text>
              </Link>
              <Link>
                <Text>Contact Us</Text>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box backgroundColor="#07112d" fontSize={{ base: 15, md: 16 }}>
        <Flex
          maxWidth={1140}
          width="95%"
          m="0 auto"
          p="30px 0px"
          color="#6A7C92"
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box flex={1}>
            <Text>Copyright © 2020 Desing by DroitThemes</Text>
          </Box>
          <Box flex={1} mt={{ base: 15, md: 0 }}>
            Icons
          </Box>

          <Box flex={1} mt={{ base: 15, md: 0 }}>
            <Flex
              justifyContent="space-around"
              p={{ base: "0px 20px", md: "0px 55px" }}
            >
              <Link>Terms of Use</Link>
              <Text>|</Text>
              <Link>Privacy Policy</Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
