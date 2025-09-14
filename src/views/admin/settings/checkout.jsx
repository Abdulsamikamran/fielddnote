'use client';

import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Checkbox,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import BackAction from 'components/common/backAction';
import Card from 'components/common/card';
import { useState } from 'react';
import UpgradePlanModal from 'components/modals/upgradePlanModal';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Card bg="#fdfdfd" minH="70vh" p={8}>
      {/* Header */}
      <Flex align="center" mb={8} gap={3}>
        <BackAction title="Checkout" />
      </Flex>

      <VStack
        align="start"
        spacing={6}
        w="full"
        maxW="620px"
        mx="auto"
        h={'full'}
      >
        {/* Payment Method */}
        <Box>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="#012540"
            mb={2}
            opacity={0.9}
          >
            Choose Payment Method
          </Text>
          <Box
            border="1px solid #71AB51"
            borderRadius="12px"
            p={3}
            w="88px"
            h="68px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/smallCard.png" alt="Card" />
          </Box>
        </Box>

        {/* Card Form */}
        <VStack spacing={4} w="full" align="stretch" mt={'10px'}>
          <Box>
            <Text fontSize="16px" fontWeight="400" opacity={0.9} mb={1}>
              Name on Card
            </Text>
            <Input placeholder="Full Name" borderRadius="8px" />
          </Box>

          <Box>
            <Text fontSize="16px" fontWeight="400" opacity={0.9} mb={1}>
              Card Number
            </Text>
            <Input placeholder="0000-0000-0000" borderRadius="8px" />
          </Box>

          <HStack spacing={4}>
            <Box flex="1">
              <Text fontSize="16px" fontWeight="400" opacity={0.9} mb={1}>
                Expiry Date
              </Text>
              <Input placeholder="MM/YY" borderRadius="8px" />
            </Box>
            <Box flex="1">
              <Text fontSize="16px" fontWeight="400" opacity={0.9} mb={1}>
                CVV
              </Text>
              <Input placeholder="CVV" borderRadius="8px" />
            </Box>
          </HStack>

          <Checkbox
            color="#012540"
            fontSize="13px"
            opacity={0.9}
            fontWeight={300}
          >
            Remember card for future use
          </Checkbox>
        </VStack>

        {/* Submit Button */}
        <Flex w="full" justify="center" mt={'60px'}>
          <Button variant={'brand'} w="full" onClick={() => setIsOpen(true)}>
            PAY AMOUNT
          </Button>
        </Flex>
      </VStack>
      <UpgradePlanModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          navigate(-1);
        }}
      />
    </Card>
  );
}
