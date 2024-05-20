import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Financial Times</Heading>
        <Text fontSize="lg">Welcome to the Financial Times. Stay updated with the latest news.</Text>
        <Box boxSize="sm" bg="gray.200" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl">Financial Times Logo</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;