import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#fff1e5">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="#333333">Contact Us</Heading>
        <Text fontSize="lg" color="#333333">For inquiries, please contact us at contact@financialtimes.com.</Text>
      </VStack>
    </Container>
  );
};

export default Contact;