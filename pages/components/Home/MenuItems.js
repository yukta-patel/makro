import { Link } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Link
    mt={{ base: 4, md: 0 }}
    mr={10}
    display="block"
    _hover={{ textDecoration: "none", color: "#4154f1" }}
  >
    {children}
  </Link>
);

export default MenuItems;
