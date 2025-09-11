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

const steps = [
  {
    id: 'microphone',
    title: 'Enable Microphone',
    description:
      'FieldNote requires microphone access to securely and accurately record interactions.',
    subtext:
      'Your recordings are automatically transcribed into structured incident reports.',
    img: '/microphone.png', // place mic.png inside /public
  },
  {
    id: 'notification',
    title: 'Enable Notification',
    description:
      'FieldNote requests permission to send notifications for important updates.',
    subtext:
      'Change your notification settings to receive updates on recordings and incident reports, including locations.',
    img: '/notification.png', // place bell.png inside /public
  },
  {
    id: 'location',
    title: 'Enable Location',
    description:
      'FieldNote needs access to your location to effectively and accurately log interactions.',
    subtext:
      'Your recordings are automatically transcribed into organized incident reports that include location details.',
    img: '/location.png', // place location.png inside /public
  },
];

export default function IdentityVerificationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const current = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      onClose();
      setStep(0);
      navigate('/auth/welcome'); // redirect to dashboard after finishing all steps
    }
  };

  const handleSkip = () => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setStep(0);
      }}
      isCentered
    >
      <ModalOverlay bg="rgba(0,0,0,0.6)" />
      <ModalContent
        maxW="586px"
        borderRadius="16px"
        textAlign="center"
        px={10}
        py={5}
      >
        <ModalCloseButton />
        <ModalBody p={0}>
          <VStack spacing={6} py={4}>
            {/* Image inside bordered circle */}
            <Flex w="full" justify="start" align="center">
              <Heading
                fontSize="22px"
                fontWeight="500"
                textAlign="left"
                color="#031227"
              >
                {current.title}
              </Heading>
            </Flex>
            <Center>
              <Image src={current.img} alt={current.id} />
            </Center>

            <Text
              fontSize="18px"
              fontWeight={500}
              color="#031227"
              opacity={0.8}
            >
              {current.description}
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              color="#031227"
              opacity={0.7}
            >
              {current.subtext}
            </Text>

            <HStack spacing={4} pt={4}>
              <Button
                variant="outline"
                borderRadius="full"
                fontWeight={400}
                px="20px"
                onClick={handleSkip}
              >
                Maybe Later
              </Button>
              <Button
                bg="primary.300"
                color="white"
                borderRadius="full"
                px="24px"
                onClick={handleNext}
                _hover={{ bg: 'primary.600' }}
              >
                Allow Access
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
