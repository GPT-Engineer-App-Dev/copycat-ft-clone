import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Financial Times</Heading>
        <Text fontSize="lg">The Financial Times is an international daily newspaper focused on business and economic news.</Text>
      </VStack>
    </Container>
  );
};

export default About;