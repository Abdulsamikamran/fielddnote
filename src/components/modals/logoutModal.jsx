'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="20px" p={2} textAlign="center" maxW="360px">
        <ModalCloseButton />

        <ModalBody>
          {/* Icon */}
          <Flex w="full" justify="center" mb={4}>
            <Image src="/logout.png" alt="logout" />
          </Flex>

          {/* Title */}
          <Text fontSize="20px" fontWeight="700" mb={2}>
            Are you Sure?
          </Text>

          {/* Subtitle */}
          <Text fontSize="14px" color="gray.600" mb={6}>
            You’ll be logged out of your account.
          </Text>

          {/* Buttons */}
          <Flex justify="center" gap={4} mt={8}>
            <Button
              w="full"
              variant="outline"
              borderRadius="full"
              px={8}
              onClick={onClose}
            >
              NO
            </Button>
            <Button
              w="full"
              bg="#012540"
              color="white"
              borderRadius="full"
              px={8}
              _hover={{ bg: '#021a33' }}
              onClick={onConfirm}
            >
              YES
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
