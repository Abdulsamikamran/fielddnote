import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const PDFCard = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="linear-gradient(180deg, rgba(1, 37, 64, 0.10) 22.66%, rgba(1, 37, 64, 0.10) 100%)"
      p="12px 16px"
      borderRadius="8px"
      w="full"
    >
      <HStack spacing="12px">
        <Box>
          <Image
            src="/pdfIcon.png" // move the PNG into /public
            alt="PDF Icon"
            // width={40}
            // height={40}
          />
        </Box>
        <VStack align="start" spacing="0">
          <Text fontSize="18px" fontWeight="600" color="#031227" opacity={0.8}>
            Reports from Transcript
          </Text>
          <Text fontSize="16px" fontWeight={500} opacity={0.4}>
            2.8 KB
          </Text>
        </VStack>
      </HStack>

      <IconButton
        aria-label="Download"
        icon={<FiDownload />}
        variant="ghost"
        fontSize="18px"
      />
    </Flex>
  );
};

export default PDFCard;
