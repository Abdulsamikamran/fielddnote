import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import PDFCard from 'components/common/pdfCard';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const AiReport = () => {
  return (
    <Flex direction="column" align="center" mt="120px">
      <Text
        fontSize="28px"
        fontWeight="600"
        color="#031227"
        textAlign="center"
        mb="4px"
        opacity={0.4}
      >
        Hello John!
      </Text>
      <Text
        fontSize="18px"
        color="#031227"
        opacity={0.4}
        textAlign="center"
        mb="15px"
      >
        I&apos;m AI Report. Automatically generate incident reports from text
        transcripts..
      </Text>

      <Box
        bg="#7E9ACD26"
        py="24px"
        px={'40px'}
        borderRadius="30px 12px 2px 12px"
        maxW="606px"
        w="100%"
        boxShadow="sm"
      >
        <Text fontWeight="700" fontSize={'18px'} opacity={0.8} mb="8px">
          Lorem Ipsum
        </Text>
        <Text fontSize="16px" fontWeight={400} opacity={0.7} mb="16px">
          Lorem ipsum dolor sit amet consectetur. Euismod facilisi porttitor
          nunc nisi eget facilisis sit. Nullam vivamus auctor massa eget vitae
          duis purus. Nibh tincidunt mattis vitae malesuada. Dignissim diam
          fermentum amet magna nunc sed risus elit pharetra.
        </Text>

        {/* File Card */}
        <PDFCard />
      </Box>
    </Flex>
  );
};

export default AiReport;
