import { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Input, Select, Button, Text, useToast, IconButton, InputGroup, InputRightElement, InputLeftElement } from "@chakra-ui/react";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();

  const handleSubmit = () => {
    if (!username || !password || !confirmPassword || !role) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Simulate user creation
    toast({
      title: "Success",
      description: "User created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          User Management
        </Text>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaUser color="gray.300" />} />
            <Input type="text" placeholder="Enter username" maxLength={50} value={username} onChange={(e) => setUsername(e.target.value)} />
          </InputGroup>
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
            <Input type={showPassword ? "text" : "password"} placeholder="Enter password" minLength={8} maxLength={255} value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputRightElement>
              <IconButton aria-label="Toggle Password Visibility" icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={() => setShowPassword(!showPassword)} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
            <Input type={showConfirmPassword ? "text" : "password"} placeholder="Re-enter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <InputRightElement>
              <IconButton aria-label="Toggle Confirm Password Visibility" icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="role" isRequired>
          <FormLabel>Role</FormLabel>
          <Select placeholder="Select role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </Select>
        </FormControl>
        <FormControl id="created-at">
          <FormLabel>Created At</FormLabel>
          <Input type="datetime-local" value={new Date().toISOString().slice(0, 16)} readOnly />
        </FormControl>
        <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={handleSubmit}>
          Create User
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
