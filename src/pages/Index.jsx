import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#fff1e5">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="#333333">Financial Times</Heading>
        <Text fontSize="lg" color="#333333">Welcome to the Financial Times. Stay updated with the latest news.</Text>
        <Box boxSize="sm" display="flex" justifyContent="center" alignItems="center">
          <Image src="/images/logo.png" alt="Financial Times Logo" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;