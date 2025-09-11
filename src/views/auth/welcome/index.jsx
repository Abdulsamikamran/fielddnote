import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigte = useNavigate();

  return (
    <Flex direction="column" minH="100vh" bg="white">
      {/* Top Section (blue background with image) */}
      <Box
        // bg="#082B4C"
        // flex="1"s
        display="flex"
        alignItems="center"
        justifyContent="center"
        // py={16}
        position="relative"
        zIndex={10}
      >
        <Box position="absolute" top={0} w="full">
          <Box>
            <Image
              src="/welcomeVector.png"
              alt="bg"
              w="full"
              h="full"
              maxH={'520px'}
            />
          </Box>
        </Box>
        <Image
          mt={4}
          zIndex={10}
          src="/welcomeBanner.png"
          alt="Welcome Illustration"
          maxH="397px"
        />
      </Box>

      {/* Bottom Section (text + button) */}
      <VStack
        mt={'100px'}
        gap={6}
        py={16}
        px={6}
        textAlign="center"
        maxW="464px"
        mx="auto"
      >
        <Heading fontSize="28px" fontWeight="700" color="#082B4C">
          Welcome to <br /> Field Note Ai! 👋
        </Heading>

        <Text fontSize="16px" color="#031227" opacity={0.7} lineHeight="26px">
          FieldNote lets you securely document field interactions using your
          voice. Capture live audio or upload recordings, and it will
          automatically transcribe them into structured, editable reports with
          AI. Stay focused in the field while FieldNote manages the paperwork.
        </Text>

        <Button
          mt={4}
          w="full"
          variant="brand"
          px={12}
          py={6}
          fontWeight="600"
          onClick={() => navigte('/')}
        >
          GET STARTED
        </Button>
      </VStack>
    </Flex>
  );
}
