import React, { useState, useRef } from 'react';
import { HStack, Input, Text } from '@chakra-ui/react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

export default function OtpInputs({ length = 4, onComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [verified, setVerified] = useState(false);
  const inputsRef = useRef([]);

  const handleChange = (val, idx) => {
    if (!/^[0-9]?$/.test(val)) return; // only digits allowed
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    // Auto move to next
    if (val && idx < length - 1) {
      inputsRef.current[idx + 1].focus();
    }

    // If all filled, mark verified & trigger callback
    if (newOtp.every((digit) => digit !== '')) {
      setVerified(true);
      onComplete?.(newOtp.join(''));
    } else {
      setVerified(false);
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  return (
    <>
      <HStack spacing={4} justify="center" mb={verified ? '20px' : '80px'}>
        {otp.map((digit, idx) => (
          <Input
            key={idx}
            ref={(el) => (inputsRef.current[idx] = el)}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            maxLength={1}
            textAlign="center"
            fontSize="20px"
            fontWeight="600"
            h="60px"
            w="60px"
            borderRadius="8px"
            bg="#F5FAF7"
            color="#71AB51"
            border="1px solid #E0E0E0"
            _focus={{
              borderColor: 'primary.300',
              boxShadow: '0 0 0 1px #71AB51',
            }}
          />
        ))}
      </HStack>

      {verified && (
        <HStack
          w="full"
          justify="center"
          mt="10px"
          spacing={2}
          align={'center'}
        >
          <IoIosCheckmarkCircleOutline color="#71AB51" />
          <Text fontSize="16px" color="#71AB51" fontWeight="600" mb="12px">
            Code Verified!
          </Text>
        </HStack>
      )}
    </>
  );
}
