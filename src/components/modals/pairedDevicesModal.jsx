'use client';

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineHeadset } from 'react-icons/md';
import { PiVibrate } from 'react-icons/pi';

const mockPairedDevices = [
  { id: 1, name: 'RØDE GO II', connected: true },
  { id: 2, name: 'RØDE GO II', connected: true },
  { id: 3, name: 'RØDE GO II', connected: true },
  { id: 4, name: 'RØDE GO II', connected: true },
];

export default function PairedDeviceModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="20px" overflow="hidden" p={4}>
        <ModalCloseButton />

        <ModalBody>
          {/* Header */}
          <Text
            mt="16px"
            mb="20px"
            fontWeight="700"
            fontSize="20px"
            textAlign="center"
            color="#012540"
          >
            Paired Device
          </Text>

          {/* Device List */}
          <VStack spacing={3} align="stretch">
            {mockPairedDevices.map((d) => (
              <Flex
                key={d.id}
                align="center"
                justify="space-between"
                p="12px"
                borderRadius="12px"
                bg="white"
                border="1px solid #EDF2F7"
              >
                {/* Left side */}
                <HStack spacing={3}>
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
                        <Box
                          w="12px"
                          h="12px"
                          borderRadius="full"
                          border="3px solid"
                          borderColor="red.500"
                        />
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
