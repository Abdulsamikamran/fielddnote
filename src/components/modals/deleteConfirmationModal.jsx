import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

export default function DeleteAccountModal({ isOpen, onClose, onDelete }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="20px" p={2} textAlign="center" maxW="370px">
        <ModalCloseButton />

        <ModalBody>
          {/* Icon */}
          <Flex w="full" justify="center">
            <Image src="/delete.png" alt="delete" />
          </Flex>

          {/* Title */}
          <Text fontSize="20px" fontWeight="700" mb={2}>
            Are you Sure?
          </Text>

          {/* Subtitle */}
          <Text fontSize="14px" color="gray.600" mb={6}>
            You’ll not be able to recover your account.
          </Text>

          {/* Buttons */}
          <Flex justify="center" gap={4}>
            <Button
              variant="outline"
              borderRadius="full"
              px={6}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="red"
              borderRadius="full"
              px={6}
              onClick={onDelete}
            >
              Delete
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
