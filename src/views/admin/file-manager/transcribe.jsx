import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';
import ExportMenu from 'components/menu/ExportMenu';

export default function TranscribePage() {
  return (
    <Card p="24px" minH="100vh" borderRadius="12px">
      {/* Header */}
      <Flex justify="space-between" align="center" mb="20px">
        <BackAction title="Transcribe" />
        <ExportMenu />
      </Flex>

      {/* Transcript Box */}
      <Card
        p="20px"
        shadow="0 10px 60px 0 rgba(0, 0, 0, 0.06)"
        borderRadius="30px 12px 2px 12px"
      >
        <Text
          fontSize="22px"
          fontWeight="400"
          lineHeight={'19px'}
          color="#012540"
          mb="16px"
        >
          Transcript / AI Draft
        </Text>

        <Box
          bg="white"
          p="20px"
          borderRadius="12px"
          border="1px solid #D9E7EA"
          shadow="0 0 27.917px 0 rgba(0, 0, 0, 0.04)"
        >
          <Box borderRadius="10px" mb="16px">
            <Text
              fontSize={'16px'}
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
                ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
              <Text opacity={0.7}>
                ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
              <Text opacity={0.7}>
                ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </Text>
            </VStack>

            <Text fontWeight="700" fontSize="18px">
              Lorem Ipsum
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              color={'#031227'}
              opacity={0.7}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>
      </Card>
    </Card>
  );
}
