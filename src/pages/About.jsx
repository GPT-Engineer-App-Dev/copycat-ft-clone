import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#fff1e5">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="#333333">About Financial Times</Heading>
        <Text fontSize="lg" color="#333333">The Financial Times is an international daily newspaper focused on business and economic news.</Text>
      </VStack>
    </Container>
  );
};

export default About;