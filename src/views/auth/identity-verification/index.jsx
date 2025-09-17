import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  Checkbox,
  Link,
  Image,
  FormControl,
  FormLabel,
  Center,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { MdAdd } from 'react-icons/md';
import IdentityVerificationModal from 'components/modals/identityVerificaionModal';

const IDENTITY_INPUT_PROPS = {
  h: '44px',
  fontSize: '14px',
  borderRadius: '6px',
  bg: '#F7F9FB',
  border: '1px solid #E0E6ED',
  _focus: {
    borderColor: 'primary.300',
    boxShadow: '0 0 0 1px var(--chakra-colors-primary-300)',
  },
};

const Field = ({ id, label, ...rest }) => (
  <FormControl>
    <FormLabel
      htmlFor={id}
      mb="6px"
      fontSize="16px"
      fontWeight="500"
      color="secondary.400"
      opacity={0.7}
    >
      {label}
    </FormLabel>
    <Input id={id} {...IDENTITY_INPUT_PROPS} {...rest} />
  </FormControl>
);

export default function IdentityVerification() {
  const [agree, setAgree] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="linear-gradient(190deg, #FFF 36.3%, #F4F7FA 203.7%)"
      px={4}
      position="relative"
    >
      <Box position="absolute" top={0} w="full" zIndex={0}>
        <Image src="/ellipse.png" alt="bg" w="full" h="200px" />
      </Box>

      <Box w="full" maxW="400px" textAlign="center" zIndex={1}>
        <Heading fontSize="22px" fontWeight="700" mb="40px" color="primary.300">
          Identity Verification
        </Heading>

        <VStack spacing="20px" align="stretch">
          {/* Profile Photo Upload */}
          <Flex
            align="center"
            justify="space-between"
            border="1px dashed #BDC7D4"
            borderRadius="6px"
            px={3}
            py={3}
          >
            <HStack>
              <Box p={1} rounded="full" bg="primary.300">
                <MdAdd color="#fff" />
              </Box>
              <Text fontSize="18px" color="secondary.400">
                Add Profile Photo
              </Text>
            </HStack>
            <Button
              size="md"
              h="34px"
              borderRadius="full"
              fontSize="16px"
              px="16px"
              bg="primary.300"
              color="white"
              fontWeight="600"
              _hover={{ bg: 'primary.600' }}
            >
              Upload
            </Button>
          </Flex>

          {/* Labeled Inputs (no placeholders) */}
          <Field id="fullName" label="Full Name" />
          <Field id="officerId" label="Officer ID" />
          <Field id="departmentName" label="Department Name" />
          <Field id="rankTitle" label="Rank/ Title" />

          {/* Checkbox */}
          <Center>
            <Checkbox
              size="md"
              isChecked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              iconColor="white"
              // border="1px solid #E0E6ED"
              borderRadius="4px"
              bg="white"
              _hover={{ borderColor: 'primary.300' }}
              _checked={{
                // bg: 'primary.300',
                // borderColor: 'primary.300',
                color: 'white',
              }}
            >
              <Text
                fontSize="14px"
                color="#031227"
                fontWeight={300}
                display="inline"
              >
                I agree to{' '}
                <Link
                  color="primary.300"
                  fontWeight="300"
                  textDecoration={'underline'}
                >
                  Terms and Conditions
                </Link>{' '}
                &{' '}
                <Link
                  color="primary.300"
                  fontWeight="300"
                  textDecoration={'underline'}
                >
                  Privacy Policy
                </Link>
              </Text>
            </Checkbox>
          </Center>

          {/* Buttons */}
          <HStack justify="space-between" pt="20px">
            <Button
              variant="outline"
              borderRadius="full"
              fontSize="14px"
              px="20px"
              size={'md'}
            >
              <ArrowBackIcon />
            </Button>

            <Button
              bg="primary.300"
              color="white"
              fontWeight="600"
              borderRadius="full"
              fontSize="14px"
              px="32px"
              w="full"
              isDisabled={!agree}
              onClick={() => setIsOpen(true)}
            >
              NEXT
            </Button>
          </HStack>
        </VStack>
      </Box>
      <IdentityVerificationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Flex>
  );
}
