import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Image,
  HStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import OtpInputs from './OTPInput';
import DisclaimerModal from 'components/modals/disclaimerModal';
import { onCLS } from 'web-vitals';

export default function VerificationBottom({
  isOpen,
  onClose,
  openDisclaimer,
}) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verified, setVerified] = useState(false);

  const handleChange = (val, idx) => {
    if (/^[0-9]?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[idx] = val;
      setOtp(newOtp);

      if (newOtp.join('').length === 4) {
        setTimeout(() => setVerified(true), 500);
      }
    }
  };

  const handleSubmit = () => {
    debugger;
    console.log('submit called');
    onClose();
    openDisclaimer();
    setTimeout(() => {
      setOtp(['', '', '', '']);
      setVerified(false);
    }, 500);
  };

  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay bg="transparent" />
        <DrawerContent
          overflow="hidden"
          maxW="600px"
          mx="auto"
          mt="auto"
          mb="auto"
          bg="primary.300" // blue wrapper
          p={4}
        >
          {/* Blue Header with Close */}
          <Flex
            w="100%"
            h="100px"
            bg="primary.300"
            align="center"
            justify="flex-end"
            px={4}
          >
            <IconButton
              icon={<CloseIcon />}
              variant="ghost"
              color="white"
              onClick={onClose}
              aria-label="Close"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Flex>

          {/* White Box */}
          <DrawerBody
            display="flex"
            bg="white"
            borderRadius="12px"
            justifyContent="center"
            p={8}
          >
            <Box w="full" maxW="360px" textAlign="center" my="100px">
              {/* Icon */}
              <VStack spacing={0} mb="40px">
                <Image src="/verification.png" alt="verifyIcon" mx="auto" />
              </VStack>

              {/* Title */}
              <Heading
                fontSize="24px"
                lineHeight="28px"
                fontWeight="bold"
                mb="15px"
                color="primary.300"
              >
                VERIFICATION
              </Heading>

              {/* Subtitle */}
              <Text
                maxW={'344px'}
                mx={'auto'}
                fontSize="16px"
                fontWeight="light"
                color="secondary.400"
                opacity={0.7}
                mb="64px"
              >
                Please enter the 4 digit OTP sent to your Email Address.
              </Text>

              {/* OTP Inputs */}
              <OtpInputs
                length={4}
                onComplete={(code) => console.log('OTP:', code)}
              />

              {/* Status */}

              {/* Submit */}
              <Button
                variant="brand"
                mt="30px"
                bg="primary.300"
                color="white"
                fontSize="14px"
                fontWeight="600"
                px="32px"
                h="48px"
                borderRadius="full"
                mx="auto"
                display="block"
                w="full"
                onClick={handleSubmit}
                //   isDisabled={!verified}
              >
                SIGNUP
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
