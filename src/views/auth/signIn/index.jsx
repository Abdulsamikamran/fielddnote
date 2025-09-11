import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Link,
  VStack,
  Image,
  HStack,
} from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import ForgotPasswordBottom from 'components/auth/ForgotPasswordBottom';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="linear-gradient(190deg, #FFF 36.3%, #012540 203.7%)"
      px={4}
    >
      <Box w="full" maxW="400px" textAlign="center">
        {/* Logo + Title */}
        <VStack spacing={0} mb="100px">
          <Image
            src="/logo.png" // replace with your FieldNote logo path
            alt="FieldNote Logo"
            w="302px"
            h="131px"
            mx="auto"
          />
        </VStack>

        {/* Sign In Box */}
        <Box textAlign="left">
          <Heading
            fontSize="26px"
            lineHeight="28px"
            fontWeight="700"
            mb="4px"
            color="primary.300"
          >
            SIGN IN
          </Heading>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="secondary.400"
            opacity={0.7}
            mb="40px"
          >
            Please sign in your account to continue.
          </Text>

          <VStack spacing="24px" align="stretch">
            {/* Email */}
            <Input
              placeholder="Email"
              type="email"
              variant="main"
              size="lg"
              h="50px"
              fontSize="14px"
            />

            {/* Password */}
            <InputGroup size="lg">
              <Input
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                variant="main"
                h="50px"
                fontSize="14px"
              />
              <InputRightElement h="full">
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

            {/* Forgot Password */}
            <Flex justify="flex-end" mt="-10px">
              <Link
                fontSize="14px"
                color="primary.300"
                fontWeight="500"
                onClick={() => setForgotOpen(true)}
              >
                Forgot your Password?
              </Link>
            </Flex>
          </VStack>

          {/* Submit */}
          <Button
            variant="brand"
            mt="60px"
            bg="primary.300"
            color="white"
            fontSize="16px"
            fontWeight="600"
            px="40px"
            w="full"
            borderRadius="full"
            mx="auto"
            display="block"
            // onClick={() => navigate('/sign-up')}
          >
            SIGN IN
          </Button>

          {/* Footer */}
          <HStack
            align="center"
            mt="60px"
            fontSize="14px"
            w="full"
            mx="auto"
            justify="center"
            spacing={1}
            alignItems="center"
          >
            <Text
              textAlign="center"
              color="secondary.400"
              fontWeight="light"
              opacity={0.7}
            >
              Don't have an account?{' '}
            </Text>
            <Link
              color="primary.300"
              fontWeight="600"
              opacity={1}
              href="/auth/sign-up"
            >
              SIGN UP
            </Link>
          </HStack>
        </Box>
      </Box>
      <ForgotPasswordBottom
        isOpen={forgotOpen}
        onClose={() => setForgotOpen(false)}
      />
    </Flex>
  );
}
