'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

export default function UpgradePlanModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="20px" p={4} textAlign="center" maxW="340px">
        <ModalCloseButton />

        <ModalBody>
          {/* Icon */}
          <Flex justify="center" mb={4}>
            <Box>
              <Image src="/great.png" alt="success" />
            </Box>
          </Flex>

          {/* Text */}
          <Text fontSize="14px" color="gray.700" mb={6} lineHeight="1.6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          {/* Button */}
          <Button
            bg="#012540"
            color="white"
            borderRadius="full"
            px={8}
            py={6}
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: '#031e35' }}
            onClick={onClose}
          >
            Thats Great!
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
