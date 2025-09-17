'use client';

import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaCrown, FaStar } from 'react-icons/fa';
import { RiVipDiamondFill } from 'react-icons/ri';
import { AiFillThunderbolt } from 'react-icons/ai';
import { useState } from 'react';
import UpgradePlanModal from 'components/modals/upgradePlanModal';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 1,
    name: 'SOLO',
    price: '$29',
    features: ['1 Seat per month', '900 minutes included'],
    btnClr: '#8C5DEC',
    bg: '/card1.png',
    icon: <RiVipDiamondFill color="white" size={18} />,
  },
  {
    id: 2,
    name: 'TEAM',
    price: '$21',
    features: [
      '2 - 25 Seats',
      '$21 per seat per month',
      '10,200 minutes/seat pooled',
    ],
    btnClr: '#F17B49',

    bg: '/card2.png',
    icon: <FaCrown color="white" size={18} />,
  },
  {
    id: 3,
    name: 'AGENCY',
    price: '$17',
    features: ['25+ Seats', '1500 minutes/seat pooled', 'Monthly minimum $400'],
    btnClr: '#309BD7',

    bg: '/card3.png',
    icon: <FaStar color="white" size={18} />,
  },
];

export default function SubscriptionPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Box bg="#fdfdfd" minH="100vh" p={8}>
      {/* Title */}
      <Text fontSize="28px" fontWeight="600" color="#012540" mb={6}>
        Upgrade Subscription Plan <span>👑</span>
      </Text>

      {/* Plan Cards */}
      <Flex gap={6}>
        {plans.map((plan) => (
          <Box
            key={plan.id}
            flex="1"
            w="350px"
            h="222px"
            bgImage={`url(${plan.bg})`}
            bgSize="cover"
            bgRepeat={'no-repeat'}
            bgPos="center"
            borderRadius="16px"
            p={'24px'}
            color="white"
            cursor={'pointer'}
            onClick={() =>
              navigate('/admin/settings/update-subscription/checkout')
            }
          >
            <Flex justify="space-between" align="center" mb={4}>
              <Text fontSize="18px" fontWeight="800">
                {plan.name}
              </Text>
              <Text fontSize="20px" fontWeight="700">
                {plan.price}
              </Text>
            </Flex>
            <VStack align="start" spacing={2} mb={6}>
              {plan.features.map((f, i) => (
                <HStack key={i} spacing={2}>
                  <CheckIcon boxSize={3} />
                  <Text fontSize="13px" fontWeight="500">
                    {f}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <HStack w="full" justifyContent="space-between">
              <Button
                w="auto"
                bg="white"
                color={plan.btnClr}
                borderRadius="full"
                fontSize="14px"
                fontWeight="600"
                _hover={{ opacity: 0.9 }}
                onClick={() =>
                  navigate('/admin/settings/update-subscription/checkout')
                }
              >
                Choose Plan
              </Button>
              <Box
                w="40px"
                h="40px"
                bg="#FFFFFF1A"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {plan.icon}
              </Box>
            </HStack>
          </Box>
        ))}
      </Flex>

      {/* Banner Section */}
      <Box
        mt={8}
        bgImage="url('/subscriptionBanner.png')"
        bgSize="cover"
        bgPos="center"
        borderRadius="12px"
        p={'24px'}
        color="white"
      >
        <Flex justify="space-between" align="center" flexWrap="wrap">
          <VStack align="start" gap={2} pl={10} w="full">
            <HStack w="full" justifyContent="space-between" align={'center'}>
              <Text fontSize="18px" fontWeight="700">
                AVERAGE
              </Text>
              <Text fontSize="20px" fontWeight="700" alignSelf="flex-start">
                $0.03
              </Text>
            </HStack>

            <HStack spacing={2}>
              <CheckIcon boxSize={3} />
              <Text fontSize="13px" fontWeight="500">
                Per Minute
              </Text>
            </HStack>
            <HStack spacing={2}>
              <CheckIcon boxSize={3} />
              <Text fontSize="13px" fontWeight="500">
                Priority Support $200/agency/month
              </Text>
            </HStack>
            <HStack w="full" justifyContent="space-between">
              <Button
                mt={4}
                bg="white"
                color="#012540"
                borderRadius="full"
                fontSize="14px"
                fontWeight="600"
                px={6}
                _hover={{ opacity: 0.9 }}
                onClick={() =>
                  navigate('/admin/settings/update-subscription/my-plan')
                }
              >
                Choose Plan
              </Button>
              <Box
                w="40px"
                h="40px"
                bg="#FFFFFF1A"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <AiFillThunderbolt color="white" size={18} />
              </Box>
            </HStack>
          </VStack>
        </Flex>
      </Box>
      <UpgradePlanModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
}
