import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  HStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ShareReportModal({ isOpen, onClose }) {
  const [format, setFormat] = useState('.txt');
  const [method, setMethod] = useState('email');

  const formats = [
    { value: '.docx', label: 'formatted report' },
    { value: '.txt', label: 'plain text' },
  ];

  const methods = [
    { value: 'device', label: 'Save to device' },
    { value: 'email', label: 'Send via Secure Email' },
    { value: 'cloud', label: 'Upload to Secure Cloud' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        w="full"
        maxW={'650px'}
        borderRadius="16px"
        p="20px"
        bg="white"
        shadow="0 0 28px rgba(0,0,0,0.08)"
      >
        <ModalHeader
          textAlign="center"
          fontSize="20px"
          fontWeight="700"
          lineHeight={'20px'}
          opacity={0.9}
          color="#012540"
        >
          Share Report
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody p={0}>
          {/* Format Selection */}
          <Text
            fontSize="14px"
            lineHeight="14px"
            fontWeight="400"
            opacity={0.9}
            color="#012540"
            mb={3}
          >
            Format Selection
          </Text>
          <VStack spacing={3} mb={6}>
            {formats.map((f) => (
              <RadioRow
                key={f.value}
                isActive={format === f.value}
                title={f.value}
                description={f.label}
                onClick={() => setFormat(f.value)}
              />
            ))}
          </VStack>

          {/* Delivery Method */}
          <Text
            fontSize="14px"
            lineHeight="14px"
            fontWeight="400"
            opacity={0.9}
            color="#012540"
            mb={3}
          >
            Delivery Method
          </Text>
          <VStack spacing={3}>
            {methods.map((m) => (
              <RadioRow
                key={m.value}
                isActive={method === m.value}
                title={m.label}
                description=""
                onClick={() => setMethod(m.value)}
              />
            ))}
          </VStack>
        </ModalBody>

        {/* Footer */}
        <ModalFooter justifyContent="center" gap={4} py={6}>
          <Button
            w={'25%'}
            borderRadius="full"
            border="1px solid #012540"
            variant="outline"
            px="24px"
            h="40px"
            color="#012540"
            _hover={{ bg: 'gray.50' }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant={'brand'}
            w={'25%'}
            onClick={() => {
              console.log('Exporting as', format, 'via', method);
              onClose();
            }}
          >
            Export Now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

/* Custom Row Component */
function RadioRow({ isActive, title, description, onClick }) {
  return (
    <HStack
      justify="space-between"
      align="center"
      w="full"
      p="12px"
      borderRadius="12px"
      //   border="1px solid"
      //   borderColor={'#9E9E9E'}
      outline={'1px solid #9E9E9E'}
      //   bg={isActive ? 'rgba(1,37,64,0.03)' : 'white'}
      cursor="pointer"
      onClick={onClick}
      _hover={{ borderColor: '#012540' }}
    >
      <VStack spacing={0} align="start">
        <Text
          fontSize="14px"
          fontWeight="500"
          color={isActive ? '#012540' : '#9E9E9E'}
        >
          {title}
        </Text>
        {description && (
          <Text fontSize="12px" color="gray.500">
            {description}
          </Text>
        )}
      </VStack>

      {/* Custom Radio Indicator */}
      <Box
        w="18px"
        h="18px"
        borderRadius="full"
        border="2px solid"
        borderColor={isActive ? '#012540' : '#CBD5E0'}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {isActive && <Box w="8px" h="8px" borderRadius="full" bg="#012540" />}
      </Box>
    </HStack>
  );
}
