'use client';

import { Box, VStack, IconButton, Text } from '@chakra-ui/react';
import { MdMic } from 'react-icons/md';

export default function RecordCard({ onClick }) {
  return (
    <Box
      w="170px"
      mx={'auto'}
      h="213px"
      borderRadius="12px"
      bg="#012540"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      p="10px"
      alignItems="center"
      shadow="0 0 20px rgba(0,0,0,0.1)"
    >
      {/* Mic Icon with ripple */}
      <Box
        w="130px"
        h="130px"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="rgba(255,255,255,0.08)"
        mb="16px"
        position="relative"
      >
        <Box
          w="90px"
          h="90px"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="rgba(255,255,255,0.05)"
          position="absolute"
        />
        <MdMic size={32} color="white" />
      </Box>

      {/* Footer Button */}
      <Box
        as="button"
        // w="120px"
        w={'full'}
        py="8px"
        borderRadius="8px"
        bg="white"
        color="#012540"
        fontSize="14px"
        fontWeight="500"
        textAlign="center"
        _hover={{ bg: 'gray.100' }}
        onClick={onClick}
      >
        Record
      </Box>
    </Box>
  );
}
