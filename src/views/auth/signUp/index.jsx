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
  Checkbox,
  HStack,
} from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import CustomSelect from 'components/select/customSelect';
import VerificationBottom from 'components/auth/VerificationBottom';
import DisclaimerModal from 'components/modals/disclaimerModal';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [agree, setAgree] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setVerificationOpen(true);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="linear-gradient(190deg, #FFF 36.3%, #012540 203.7%)"
      px={4}
    >
      <Box w="full" maxW="400px" textAlign="center">
        {/* Logo */}
        <VStack spacing={0} mb="100px">
          <Image
            src="/logo.png"
            alt="FieldNote Logo"
            w="302px"
            h="131px"
            mx="auto"
          />
        </VStack>

        {/* Sign Up Box */}
        <Box textAlign="left">
          <Heading
            fontSize="26px"
            lineHeight="28px"
            fontWeight="extrabold"
            mb="4px"
            color="primary.300"
          >
            SIGN UP
          </Heading>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="secondary.400"
            opacity={0.5}
            mb="40px"
          >
            Please enter your details to create an account.
          </Text>

          <VStack spacing="24px" align="stretch">
            {/* Email */}
            <Input
              placeholder="Email"
              type="email"
              variant="main"
              h="50px"
              fontSize="14px"
            />

            <CustomSelect
              options={['Solo', 'Team', 'Agency']}
              placeholder="Select User"
              onChange={(val) => setUserType(val)}
            />

            {/* Password */}
            <InputGroup>
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

            {/* Confirm Password */}
            <InputGroup>
              <Input
                placeholder="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="main"
                h="50px"
                fontSize="14px"
              />
              <InputRightElement h="full">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <RiEyeCloseLine size={18} />
                  ) : (
                    <MdOutlineRemoveRedEye size={18} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Checkbox
              size="md"
              isChecked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              iconColor="white"
              borderColor="#BDC7D4"
              _checked={{
                borderColor: '#9E9E9E',
              }}
              _hover={{
                borderColor: '#9E9E9E',
              }}
            >
              <Text fontSize="14px" color="secondary.400" display="inline">
                I agree to the{' '}
                <Link color="primary.300" fontWeight="600">
                  Terms & Conditions
                </Link>
              </Text>
            </Checkbox>
          </VStack>

          {/* Submit */}
          <Button
            variant="brand"
            mt="40px"
            bg="primary.300"
            color="white"
            fontSize="16px"
            fontWeight="600"
            px="40px"
            w="full"
            borderRadius="full"
            mx="auto"
            display="block"
            // isDisabled={!agree}
            onClick={handleSignUpClick}
          >
            SIGN UP
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
              Already have an account?{' '}
            </Text>
            <Link
              color="primary.300"
              fontWeight="600"
              opacity={1}
              href="/auth/sign-in"
            >
              SIGN IN
            </Link>
          </HStack>
        </Box>
      </Box>
      <VerificationBottom
        isOpen={verificationOpen}
        openDisclaimer={() => setShowDisclaimer(true)}
        onClose={() => setVerificationOpen(false)}
      />
      <DisclaimerModal
        isOpen={showDisclaimer}
        onClose={() => {
          setShowDisclaimer(false);
          navigate('/auth/identity-verification');
        }}
      />
    </Flex>
  );
}
