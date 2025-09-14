import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  Heading,
  HStack,
  Center,
  Box,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function SuccessModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      isCentered
    >
      <ModalOverlay bg="rgba(0,0,0,0.6)" />
      <ModalContent
        maxW="390px"
        borderRadius="16px"
        textAlign="center"
        px={10}
        py={5}
      >
        <ModalCloseButton />
        <ModalBody p={0}>
          <VStack spacing={6} py={4}>
            <Center>
              <Image src="/success.png" />
            </Center>

            <Text
              fontSize="20px"
              fontWeight={700}
              color="#031227"
              opacity={0.9}
            >
              Automated Transcription<br></br> (Whisper AI)
            </Text>
            <Text
              fontSize="16px"
              fontWeight={500}
              lineHeight={'22px'}
              color="#031227"
              opacity={0.7}
            >
              The clip is securely sent to Whisper for speech-to-text
              conversion. The data is currently being transcribed, and the
              secure transfer of information is in progress. Auto-save
              transcript when done.
            </Text>

            <Button
              variant="brand"
              borderRadius="full"
              fontWeight={400}
              w="60%"
              onClick={onClose}
            >
              Got It
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
