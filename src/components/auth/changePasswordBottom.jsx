import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  Link,
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

// OTP Box Renderer
const OTPInput = ({ length = 4, value, onChange }) => {
  const handleChange = (val, idx) => {
    if (/^[0-9]?$/.test(val)) {
      const newVal = [...value];
      newVal[idx] = val;
      onChange(newVal);
    }
  };

  return (
    <HStack justify="center" spacing={4} mb="24px">
      {Array.from({ length }).map((_, idx) => (
        <Input
          key={idx}
          value={value[idx] || ''}
          onChange={(e) => handleChange(e.target.value, idx)}
          maxLength={1}
          textAlign="center"
          fontSize="20px"
          fontWeight="600"
          w="56px"
          h="56px"
          borderRadius="8px"
          border="1px solid"
          borderColor="#E0E6ED"
          _focus={{
            borderColor: 'primary.300',
            boxShadow: '0 0 0 1px var(--chakra-colors-primary-300)',
          }}
        />
      ))}
    </HStack>
  );
};

export default function ChangePasswordBottom({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = Forgot, 2 = OTP, 3 = New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => setStep((s) => s + 1);

  const handleReset = () => {
    onClose();
    // reset state
    setStep(1);
    setEmail('');
    setOtp(['', '', '', '']);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay bg="rgba(0,0,0,0.4)" />
      <DrawerContent
        overflow="hidden"
        maxW="600px"
        mx="auto"
        mt="auto"
        mb="auto"
        bg="primary.300"
        p={4}
      >
        {/* Top bar */}
        <Flex
          w="100%"
          h="80px"
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
          />
        </Flex>

        {/* White content box */}
        <DrawerBody
          display="flex"
          bg="white"
          borderRadius="12px"
          justifyContent="center"
          p={8}
        >
          <Box w="full" maxW="380px" textAlign="center" my="auto">
            {/* Icon */}

            {/* Step 1: Forgot */}
            {step === 1 && (
              <>
                <VStack spacing={0} mb="40px">
                  <Image
                    src="/changePassword.png"
                    alt="recoverIcon"
                    mx="auto"
                  />
                </VStack>
                <Heading
                  fontSize="20px"
                  fontWeight="700"
                  mb="10px"
                  color="secondary.800"
                >
                  CHANGE PASSWORD
                </Heading>
                <Text
                  fontSize="14px"
                  color="secondary.400"
                  opacity={0.7}
                  mb="24px"
                >
                  Please enter your registered email address so we can send a
                  password reset link.
                </Text>

                <Input
                  placeholder="Email"
                  type="email"
                  variant={'main'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  h="44px"
                  fontSize="14px"
                  borderRadius="6px"
                  bg="#F7F9FB"
                  border="1px solid #E0E6ED"
                  mb="24px"
                />

                <Button
                  variant={'brand'}
                  fontWeight="600"
                  fontSize="14px"
                  h="44px"
                  borderRadius="full"
                  w="full"
                  onClick={handleNext}
                >
                  VERIFY EMAIL
                </Button>

                <Text
                  mt="40px"
                  fontSize="13px"
                  textAlign="center"
                  color="secondary.400"
                >
                  I remember it!{' '}
                  <Link color="green.500" fontWeight="600" onClick={onClose}>
                    SIGN IN
                  </Link>
                </Text>
              </>
            )}

            {/* Step 2: OTP */}
            {step === 2 && (
              <>
                <VStack spacing={0} mb="40px">
                  <Image src="/verification.png" alt="recoverIcon" mx="auto" />
                </VStack>
                <Heading
                  fontSize="20px"
                  fontWeight="700"
                  mb="10px"
                  color="secondary.800"
                >
                  VERIFICATION
                </Heading>
                <Text
                  fontSize="14px"
                  color="secondary.400"
                  opacity={0.7}
                  mb="24px"
                >
                  Please enter the 4 digit OTP sent to your Email Address.
                </Text>

                <OtpInputs
                  length={4}
                  onComplete={(code) => console.log('OTP:', code)}
                />

                <Button
                  variant={'brand'}
                  fontWeight="600"
                  fontSize="14px"
                  h="44px"
                  borderRadius="full"
                  w="full"
                  onClick={handleNext}
                >
                  SIGNUP
                </Button>
              </>
            )}

            {/* Step 3: New Password */}
            {step === 3 && (
              <>
                <VStack spacing={0} mb="40px">
                  <Image
                    src="/changePassword.png"
                    alt="recoverIcon"
                    mx="auto"
                  />
                </VStack>
                <Heading
                  fontSize="20px"
                  fontWeight="700"
                  mb="10px"
                  color="secondary.800"
                >
                  CHANGE PASSWORD
                </Heading>
                <Text
                  fontSize="14px"
                  color="secondary.400"
                  opacity={0.7}
                  mb="24px"
                >
                  All good! Please create a new password.
                </Text>

                <VStack spacing={4} mb="24px">
                  <Input
                    placeholder="Current Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    h="44px"
                    fontSize="14px"
                    borderRadius="6px"
                    variant={'main'}
                  />
                  <Input
                    placeholder="New Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    h="44px"
                    fontSize="14px"
                    borderRadius="6px"
                    variant={'main'}
                  />
                </VStack>

                <Button
                  variant={'brand'}
                  h="44px"
                  borderRadius="full"
                  w="full"
                  onClick={handleReset}
                >
                  CHANGE PASSWORD
                </Button>

                <Text
                  mt="40px"
                  fontSize="13px"
                  textAlign="center"
                  color="secondary.400"
                >
                  I remember it!{' '}
                  <Link color="green.500" fontWeight="600" onClick={onClose}>
                    SIGN IN
                  </Link>
                </Text>
              </>
            )}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
