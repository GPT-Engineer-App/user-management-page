import { useState } from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Button, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import { FaEye, FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import UserForm from "./UserForm.jsx";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
    onClose();
  };

  return (
    <Container maxW="container.lg" mt={4}>
      <VStack spacing={4} align="stretch">
        <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={onOpen}>
          Create User
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>S/N</Th>
              <Th>Username</Th>
              <Th>Password</Th>
              <Th>Role</Th>
              <Th>Created Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={user.id}>
                <Td>{index + 1}</Td>
                <Td>{user.username}</Td>
                <Td>{user.password}</Td>
                <Td>{user.role}</Td>
                <Td>{user.createdAt}</Td>
                <Td>
                  <IconButton aria-label="View" icon={<FaEye />} mr={2} />
                  <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                  <IconButton aria-label="Delete" icon={<FaTrash />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
      <UserForm isOpen={isOpen} onClose={onClose} onSubmit={handleCreateUser} />
    </Container>
  );
};

export default UserManagement;
