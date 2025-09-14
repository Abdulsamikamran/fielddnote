'use client';

import { Box, Flex, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineHeadset } from 'react-icons/md';
import { PiVibrate } from 'react-icons/pi';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';

const mockDevices = [
  { id: 1, name: 'RØDE GO II', connected: true },
  { id: 2, name: 'RØDE GO II', connected: true },
  { id: 3, name: 'RØDE GO II', connected: true },
  { id: 4, name: 'RØDE GO II', connected: true },
];

export default function PairedDevicePage() {
  return (
    <Card bg="#fdfdfd" minH="100vh" p={6}>
      {/* Header */}
      <Flex align="center" mb={6}>
        <BackAction title="Settings" />
      </Flex>

      {/* Title */}
      <Text fontSize="22px" fontWeight="500" mb={4} color="#012540">
        Paired Devices
      </Text>

      {/* Devices List */}
      <Card
        shadow="0 0 19.42px 0 rgba(0, 37, 94, 0.10)"
        borderRadius="12px"
        p={4}
        bg="white"
      >
        <VStack gap={1} align="stretch">
          {mockDevices.map((d) => (
            <Flex
              key={d.id}
              align="center"
              justify="space-between"
              px="12px"
              py={2}
              bg="white"
            >
              {/* Left side */}
              <HStack spacing={3} m={0}>
                {/* Device icon */}
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg={d.connected ? '#012540' : 'gray.400'}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <MdOutlineHeadset color="white" size={20} />
                </Box>

                <VStack spacing={1} align="start">
                  <Text fontSize="14px" fontWeight="500" color="#012540">
                    {d.name}
                  </Text>

                  {/* Volume + Recording row */}
                  <HStack gap={4}>
                    <HStack gap="2px">
                      <PiVibrate size={14} color="#555" />
                      <Text fontSize="10px" fontWeight={500} color="#454545">
                        Volume
                      </Text>
                    </HStack>

                    <HStack gap="2px">
                      <Box w="10px" h="10px" borderRadius="full" bg="red.500" />
                      <Text fontSize="10px" fontWeight={500} color="#454545">
                        Recording
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </HStack>

              {/* Right side */}
              <Flex align="center" gap={2}>
                <Text fontSize="11px" fontWeight="600" color="#71AB51">
                  Connected
                </Text>
                <IconButton
                  icon={<FiMoreVertical />}
                  aria-label="options"
                  variant="ghost"
                  fontSize="18px"
                  size="sm"
                />
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Card>
    </Card>
  );
}
