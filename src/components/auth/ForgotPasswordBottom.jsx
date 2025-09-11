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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';

export default function ForgotPasswordBottom({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = forgot, 2 = reset
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleForgotSubmit = () => {
    setSuccessMessage('');
    setTimeout(() => {
      setSuccessMessage('Password reset link has been sent.');
      setStep(2); // move to reset step after showing msg
    }, 1000);
  };

  const handleResetSubmit = () => {
    if (newPassword !== confirmPassword) {
      setSuccessMessage("Passwords don't match.");
      return;
    }
    setSuccessMessage('');
    setTimeout(() => {
      setSuccessMessage('Password updated successfully!');
      setTimeout(() => {
        onClose();
        // reset state
        setStep(1);
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
        setSuccessMessage('');
      }, 2000);
    }, 3000);
  };

  return (
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

        <DrawerBody
          display="flex"
          bg={'white'}
          borderRadius={'12px'}
          justifyContent="center"
          p={8}
        >
          <Box w="full" maxW="360px" textAlign="center" my="auto">
            {/* Lock Icon */}
            <VStack spacing={0} mb="40px">
              <Image src="/recover.png" alt="recoverIcon" mx="auto" />
            </VStack>

            {/* Step 1: Forgot Password */}
            {step === 1 && (
              <>
                <Heading
                  fontSize="24px"
                  lineHeight="28px"
                  fontWeight="700"
                  mb="8px"
                  color="primary.300"
                >
                  FORGOT PASSWORD
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="light"
                  color="secondary.400"
                  opacity={0.7}
                  mb="32px"
                >
                  Please enter your registered email address so we can send a
                  password reset link.
                </Text>

                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="main"
                  h="48px"
                  fontSize="14px"
                  bg="white"
                  mb="24px"
                />

                <Button
                  variant="brand"
                  mt="40px"
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
                  onClick={handleForgotSubmit}
                  isDisabled={!email}
                >
                  SEND RESET LINK
                </Button>

                {successMessage && (
                  <Text mt="12px" fontSize="14px" color="green.500">
                    {successMessage}
                  </Text>
                )}

                <Text
                  mt="60px"
                  fontSize="14px"
                  textAlign="center"
                  color="secondary.400"
                >
                  I remember it?{' '}
                  <Link color="primary.300" fontWeight="600" onClick={onClose}>
                    SIGN IN
                  </Link>
                </Text>
              </>
            )}

            {/* Step 2: Reset Password */}
            {step === 2 && (
              <>
                <Heading
                  fontSize="24px"
                  lineHeight="28px"
                  fontWeight="700"
                  mb="8px"
                  color="primary.300"
                >
                  RESET PASSWORD
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="light"
                  color="secondary.400"
                  opacity={0.7}
                  mb="32px"
                >
                  All good! Please create a new password to continue with the
                  app.
                </Text>

                <VStack spacing="16px" mb="24px">
                  <InputGroup>
                    <Input
                      placeholder="New Password"
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      variant="main"
                      h="48px"
                      fontSize="14px"
                    />
                    <InputRightElement>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <RiEyeCloseLine size={18} />
                        ) : (
                          <MdOutlineRemoveRedEye size={18} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup>
                    <Input
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      variant="outline"
                      h="48px"
                      fontSize="14px"
                    />
                    <InputRightElement>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <RiEyeCloseLine size={18} />
                        ) : (
                          <MdOutlineRemoveRedEye size={18} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </VStack>

                <Button
                  variant="brand"
                  mt="40px"
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
                  onClick={handleResetSubmit}
                  isDisabled={!newPassword || !confirmPassword}
                >
                  UPDATE PASSWORD
                </Button>

                {successMessage && (
                  <Text mt="12px" fontSize="14px" color="#71AB51">
                    {successMessage}
                  </Text>
                )}

                <Text
                  mt="60px"
                  fontSize="14px"
                  textAlign="center"
                  color="secondary.400"
                >
                  I remember it?{' '}
                  <Link color="#71AB51" fontWeight="600" onClick={onClose}>
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
