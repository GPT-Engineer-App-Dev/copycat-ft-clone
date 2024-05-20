import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="#ffcc00" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="black" fontSize="lg" fontWeight="bold">
            Financial Times
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/about" color="black" mx={2}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="black" mx={2}>
            Contact
          </Link>
          <Link as={RouterLink} to="/stories" color="black" mx={2}>
            Stories
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;