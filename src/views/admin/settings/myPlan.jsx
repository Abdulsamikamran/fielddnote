'use client';

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { ArrowBackIcon, CheckIcon } from '@chakra-ui/icons';
import { FaCrown } from 'react-icons/fa';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';

export default function MyPlanPage() {
  return (
    <Card bg="#fdfdfd" minH="85vh" p={8}>
      {/* Header */}
      <Flex align="center" mb={8} gap={3}>
        <BackAction title={`My Subscription Plan 👑`} />
      </Flex>

      {/* Subscription Card */}
      <Card
        bg="white"
        borderRadius="12px"
        p={6}
        w="full"
        shadow=" 0 10px 60px 0 rgba(0, 0, 0, 0.06)"
      >
        {/* Top Row */}
        <Flex justify="space-between" align="center" mb={4}>
          <VStack align="start" gap={1}>
            <Text fontSize="18px" fontWeight="600" color="#71AB51" mb={4}>
              SUBSCRIPTION
            </Text>
            <Text fontSize="16px" lineHeight="12px" opacity={0.8}>
              Your Current Plan
            </Text>
            <Text fontSize="16px" lineHeight="12px" opacity={0.8}>
              Next Billing Date
            </Text>
          </VStack>

          <VStack align="end" gap={1}>
            <Text fontSize="20px" fontWeight="700" color="#012540" mb={4}>
              $21
            </Text>
            <Text ontSize="16px" lineHeight="12px" opacity={0.8}>
              Team Plan
            </Text>
            <Text ontSize="16px" lineHeight="12px" opacity={0.8}>
              JUNE 08, 2025
            </Text>
          </VStack>
        </Flex>

        {/* Features */}
        <Box mt={6}>
          <Flex w="full" justifyContent="space-between" align="center">
            <Text fontSize="16px" fontWeight="600" color="#71AB51" mb={3}>
              FEATURES
            </Text>
            <Box
              w="32px"
              h="32px"
              bg="gray.100"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaCrown} color="#012540" fontSize="14px" />
            </Box>
          </Flex>
          <VStack align="start" spacing={2}>
            {[
              '2 - 25 Seats',
              '$21 per seat per month',
              '1,200 minutes/seat pooled',
            ].map((feature, i) => (
              <HStack key={i} spacing={2}>
                <CheckIcon color="#BDC7D4" boxSize={3} />
                <Text fontSize="16px">{feature}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Badge Icon on Right Bottom */}
        <Flex justify="flex-end" mt={4}></Flex>
      </Card>

      {/* Cancel Button */}
      <Flex justify="center" mt={10}>
        <Button
          w="280px"
          bg="red.100"
          color="red.500"
          borderRadius="full"
          px={8}
          py={6}
          _hover={{ bg: 'red.200' }}
        >
          Cancel Plan
        </Button>
      </Flex>
    </Card>
  );
}
