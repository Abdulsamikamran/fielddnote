import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  IconButton,
  Image,
  Spinner,
  Icon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiMoreVertical, FiRefreshCw, FiVolume2 } from 'react-icons/fi';
import { MdOutlineHeadset } from 'react-icons/md';
import { TbHandStop } from 'react-icons/tb';
import { PiVibrate } from 'react-icons/pi';

const mockDevices = [
  { id: 1, name: 'RØDE GO II', status: 'Recording' },
  { id: 2, name: 'RØDE GO II', status: 'Recording' },
];

export default function AddDeviceModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [devices, setDevices] = useState(mockDevices);
  const [connectedId, setConnectedId] = useState(null);

  // Reset modal when closed
  const handleClose = () => {
    setStep(1);
    setConnectedId(null);
    setDevices(mockDevices);
    onClose();
  };

  // Auto transition from Step 1 → Step 2
  //   useEffect(() => {
  //     if (isOpen && step === 1) {
  //       const timer = setTimeout(() => setStep(2), 2000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [isOpen, step]);

  // Handle device select
  const handleDeviceSelect = (id) => {
    setConnectedId(id);
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: 'Connected' }
          : { ...d, status: 'Recording' },
      ),
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="40px" overflow="hidden" h={'700px'}>
        <ModalCloseButton />
        <ModalBody>
          {/* STEP 1: Searching */}
          <Text
            mt={'50px'}
            mb={'14px'}
            fontWeight="700"
            fontSize="26px"
            textAlign="center"
            color="#012540"
          >
            Add Device
          </Text>
          {step === 1 && (
            <>
              <VStack spacing={6} align="center" pb={6}>
                <Box
                  w="full"
                  borderRadius="12px"
                  p="16px"
                  shadow="0 0 20px 0 rgba(0, 37, 94, 0.10)"
                >
                  <Flex w="full" justifyContent="space-between">
                    <Text
                      fontWeight="500"
                      fontSize="18px"
                      mb="10px"
                      color="#012540"
                    >
                      Finding your devices
                    </Text>
                    <Spinner size="xs" />
                  </Flex>
                  <Text fontSize="16px" fontWeight={500} color="#474747">
                    1 device found ..
                  </Text>
                  <Text fontSize="16px" fontWeight={400} color="#474747" mt="2">
                    Please be patient, we are doing our best for you
                  </Text>

                  <Button
                    mt="20px"
                    w="full"
                    justifyContent="flex-start"
                    leftIcon={<TbHandStop />}
                    borderRadius="full"
                    border="1px solid #012540"
                    bg="white"
                    color="#012540"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ bg: 'gray.50' }}
                    _active={{ bg: 'gray.100' }}
                    onClick={() => setStep(2)}
                  >
                    Stop Searching
                  </Button>
                </Box>

                {/* Radar animation placeholder */}
                <Box boxSize="335px">
                  <Image src="/addDeviceCover.png" />
                </Box>
              </VStack>
            </>
          )}

          {/* STEP 2: Devices found */}
          {step === 2 && (
            <VStack spacing={6} align="stretch">
              <Box
                w="full"
                borderRadius="12px"
                p="16px"
                boxShadow="sm"
                border="1px solid #EDF2F7"
              >
                <Text fontWeight="500" fontSize="14px" mb="4" color="#012540">
                  Finding completed
                </Text>

                {devices.map((d) => (
                  <Flex
                    key={d.id}
                    align="center"
                    justify="space-between"
                    p="12px"
                    borderRadius="12px"
                    w="full"
                    bg="white"
                    mb="2"
                    border={
                      d.id === connectedId
                        ? '1px solid #71AB51'
                        : '1px solid transparent'
                    }
                    cursor="pointer"
                    onClick={() => handleDeviceSelect(d.id)}
                  >
                    {/* Left side */}
                    <HStack spacing={3}>
                      {/* Device icon */}
                      <Box
                        w="48px"
                        h="48px"
                        borderRadius="full"
                        bg="#012540"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <MdOutlineHeadset color="white" size={24} />
                      </Box>

                      <VStack spacing={1} align="start">
                        <Flex
                          w="full"
                          align="center"
                          justifyContent="space-between"
                        >
                          <Text
                            fontSize="14px"
                            fontWeight="500"
                            color="#012540"
                          >
                            {d.name}
                          </Text>
                        </Flex>

                        {/* Volume + Recording row */}
                        <HStack gap={4}>
                          <HStack gap={'2px'}>
                            <PiVibrate size={18} color="#555" />
                            <Text
                              fontSize="10px"
                              fontWeight={500}
                              color="#454545"
                            >
                              Volume
                            </Text>
                          </HStack>

                          <HStack gap={'2px'}>
                            <Box
                              w="16px"
                              h="16px"
                              borderRadius="full"
                              border="5px solid"
                              borderColor={'red.500'}
                            />
                            <Text
                              fontSize="10px"
                              fontWeight={500}
                              color="#454545"
                            >
                              Recording
                            </Text>
                          </HStack>
                        </HStack>
                      </VStack>
                    </HStack>

                    {/* Right side */}
                    {d.status === 'Connected' && (
                      <Flex>
                        <Text fontSize="11px" fontWeight="600" color="#71AB51">
                          Connected
                        </Text>
                        <IconButton
                          icon={<FiMoreVertical />}
                          aria-label="options"
                          variant="ghost"
                          fontSize="20px"
                        />
                      </Flex>
                    )}
                  </Flex>
                ))}

                {/* Buttons */}
                <VStack spacing={3} mt={4}>
                  <Button
                    w="full"
                    borderRadius="full"
                    bg="#012540"
                    color="white"
                    justifyContent="flex-start"
                    fontSize={'14px'}
                    fontWeight={500}
                    p={6}
                    leftIcon={<FaCheck />}
                    isDisabled={!connectedId}
                    _hover={{ bg: '#031e35' }}
                    onClick={handleClose}
                  >
                    I Found It
                  </Button>

                  <Button
                    w="full"
                    borderRadius="full"
                    variant="ghost"
                    color="#012540"
                    fontSize={'14px'}
                    fontWeight={500}
                    leftIcon={<FiRefreshCw />}
                    justifyContent="flex-start"
                    _hover={{ bg: 'gray.50' }}
                    onClick={() => {
                      setStep(1);
                      setConnectedId(null);
                      setDevices(mockDevices);
                    }}
                  >
                    Try Again
                  </Button>
                </VStack>
              </Box>
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
