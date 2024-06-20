import { Container, VStack, Heading, Text, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaCalendarPlus, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarPlus />} colorScheme="teal" size="lg">Create Event</Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg">View Events</Button>
          <Button leftIcon={<FaUsers />} colorScheme="teal" size="lg">Manage Attendees</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;