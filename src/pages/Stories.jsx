import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Stories = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#fff1e5">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="#333333">Stories</Heading>
        <Text fontSize="lg" color="#333333">Read the latest stories from the Financial Times.</Text>
        <Box boxSize="sm" bg="gray.200" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl" color="#333333">Story 1: Market Trends</Text>
        </Box>
        <Box boxSize="sm" bg="gray.200" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl" color="#333333">Story 2: Economic Insights</Text>
        </Box>
        <Box boxSize="sm" bg="gray.200" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl" color="#333333">Story 3: Financial Analysis</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Stories;