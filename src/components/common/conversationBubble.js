import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ConversationBubble = () => {
  return (
    <>
      <Box
        bg="#7E9ACD26"
        p={'15px'}
        px={'20px'}
        // borderRadius="full"
        borderRadius=" 44px 44px 44px 2px"
        display="inline-block"
        mb="12px"
        w="fit-content"
      >
        <Text fontSize={'13px'} fontWeight={400} color={'#031227'}>
          Hi John!
        </Text>
      </Box>
      <Box
        bg="#7E9ACD26"
        borderRadius="30px 12px 2px 12px"
        px="20px"
        py={'24px'}
        mb="16px"
      >
        <Text
          mb="12px"
          fontSize={'18px'}
          color={'#031227'}
          fontWeight={400}
          opacity={0.7}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Text
          fontSize={'22px'}
          color={'#031227'}
          fontWeight={400}
          opacity={0.7}
          mb="8px"
        >
          Etiam hendrerit justo risus:
        </Text>

        <VStack spacing="4px" align="start" mb="16px">
          <Text color="#57A99A" fontSize="16px" fontWeight="600">
            Lorem Ipsum:
            <Text
              as="span"
              fontWeight="400"
              fontSize="16px"
              color="#031227"
              opacity={0.7}
            >
              {' '}
              Lorem ipsum dolor sit amet
            </Text>
          </Text>
          <Text color="#57A99A" fontSize="16px" fontWeight="600">
            Lorem Ipsum:
            <Text
              as="span"
              fontWeight="400"
              fontSize="16px"
              color="#031227"
              opacity={0.7}
            >
              {' '}
              Lorem ipsum dolor sit amet
            </Text>
          </Text>
          <Text color="#57A99A" fontSize="16px" fontWeight="600">
            Lorem Ipsum:
            <Text
              as="span"
              fontWeight="400"
              fontSize="16px"
              color="#031227"
              opacity={0.7}
            >
              {' '}
              Lorem ipsum dolor sit amet
            </Text>
          </Text>
        </VStack>

        <VStack
          gap={4}
          align="start"
          bg="rgba(1, 37, 64, 0.1)"
          p="12px"
          borderRadius="8px"
          mb="16px"
          fontSize={'16px'}
          fontWeight={400}
          color={'#031227'}
        >
          <Text opacity={0.7}>
            ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text opacity={0.7}>
            ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text opacity={0.7}>
            ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </VStack>

        <Text fontWeight="700" fontSize="13px">
          Lorem Ipsum
        </Text>
        <Text fontSize="16px" fontWeight={400} color={'#031227'} opacity={0.7}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <Text
          textAlign="right"
          fontSize="16px"
          color="#0B1E42"
          mt="8px"
          opacity={0.4}
        >
          08:33 PM
        </Text>
      </Box>
    </>
  );
};

export default ConversationBubble;
