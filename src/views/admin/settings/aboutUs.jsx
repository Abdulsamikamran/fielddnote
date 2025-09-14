'use client';

import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <Box bg="#f5f7fa" minH="100vh" position="relative">
      {/* Top Gradient Box */}
      <Box
        h="220px"
        bg="linear-gradient(180deg, rgba(1, 37, 64, 0.15) 22.66%, #012540 100%)"
        zIndex={999}
        borderRadius={'10px'}
        p={4}
      >
        {/* Back Arrow */}
        <Flex
          align="center"
          onClick={() => navigate(-1)} // router -1
        >
          <ArrowBackIcon color="white" boxSize={6} cursor="pointer" />
        </Flex>

        {/* Center Logo */}
        <Flex direction="column" align="center" justify="center" w="full">
          <Image src="/aboutLogo.png" alt="FieldNote Logo" />
        </Flex>
      </Box>

      {/* Bottom Content Box */}
      <Box
        bg="white"
        position="absolute"
        top={'200px'}
        borderTopRadius="30px"
        p={8}
        shadow="sm"
        h={'full'}
      >
        {/* About Us Section */}
        <Text
          fontSize="22px"
          fontWeight="600"
          opacity={0.9}
          mb={2}
          color="#012540"
        >
          About Us
        </Text>
        <Text fontSize="16px" fontWeight={300} mb={6} lineHeight="1.6">
          At FieldNote, we empower law enforcement officers with a cutting-edge
          tool designed for capturing field interactions seamlessly. Our
          innovative solution utilizes body-worn microphones to record audio,
          which is then automatically transcribed. With the help of AI, we
          transform these recordings into structured reports, enhancing
          efficiency and accuracy in reporting.
        </Text>

        {/* Mission Section */}
        <Box borderLeft="4px solid #012540">
          <Text fontSize="22px" fontWeight="600" opacity={0.9} mb={2} pl={2}>
            OUR MISSION
          </Text>
          <Text fontSize="16px" fontWeight={300} lineHeight="1.6" pl={2}>
            At FieldNote, we empower officers with a mobile app and website that
            simplify documenting field interactions. Our app allows live audio
            capture via phones or external microphones, which our AI technology
            then transcribes into structured, editable incident reports.
            Officers can easily review, modify, and share their work securely
            through email or cloud storage. With real-time recording on mobile
            devices and a streamlined workflow for external mic recordings on
            laptops, we focus on features like audio trimming, metadata tagging,
            and audit trails to ensure accuracy and compliance.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
