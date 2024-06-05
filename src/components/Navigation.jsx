import { Link } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex as="nav" p={4} bg="teal.500" color="white" justifyContent="space-between">
      <Button as={Link} to="/" variant="ghost" color="white">
        Home
      </Button>
      <Button as={Link} to="/user-management" variant="ghost" color="white">
        User Management
      </Button>
    </Flex>
  );
};

export default Navigation;
