import { Box, Flex, Button, Image } from "@chakra-ui/core";
import logo from "../../images/logo.png";
import { MenuItems } from "../Home";

const Navigation = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box position="fixed" width="100%" backgroundColor="white" zIndex={1}>
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        color="#6A7C92"
        maxWidth={1200}
        width="90%"
        m="1.5rem auto"
        {...props}
      >
        <Flex align="center">
          <Image src={logo} height={45} width={147} alt="logoimage" />
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="black"
            width={20.13}
            height={23.2}
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
          <Button
            backgroundColor="#4154F1"
            borderRadius={45}
            border="none"
            color="white"
            p="12px 35px 13px"
            _hover={{ color: "white", bg: "#4154F1" }}
          >
            Sign In
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation;
