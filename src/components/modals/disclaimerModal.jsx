import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  VStack,
  Text,
  Heading,
  Button,
  Image,
} from '@chakra-ui/react';

export default function DisclaimerModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="440px" borderRadius="16px" py={6} textAlign="center">
        <ModalBody>
          {/* Success Icon */}
          <VStack spacing={4}>
            <Image src="/success.png" alt="success" />

            <Heading fontSize="20px" color="primary.300">
              Disclaimer!
            </Heading>

            <Text
              fontSize="16px"
              color="secondary.400"
              lineHeight="26px"
              opacity={0.7}
              textAlign="center"
              fontWeight={400}
            >
              FieldNote lets you securely document field interactions using
              voice commands. Record audio live or upload existing files, which
              are automatically transcribed into organized, editable reports
              with AI. Focus on your tasks while FieldNote handles the
              documentation.
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            bg="primary.300"
            color="white"
            fontSize="14px"
            fontWeight="600"
            px="32px"
            h="40px"
            borderRadius="full"
            onClick={onClose}
          >
            GOT IT
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
