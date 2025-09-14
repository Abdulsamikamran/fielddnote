'use client';

import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import BackAction from 'components/common/backAction';
import Card from 'components/common/card';

export default function FAQPage() {
  const faqs = [
    {
      q: 'What is FieldNote?',
      a: 'FieldNote, we empower law enforcement officers with a cutting-edge tool designed for capturing field interactions seamlessly.',
    },
    {
      q: 'Lorem ipsum dolor sit amet?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at quam turpis.',
    },
    {
      q: 'Lorem ipsum dolor sit amet, consectetur ?',
      a: 'Aliquam eget sapien sapien. Curabitur in metus urna.',
    },
    {
      q: 'Lorem ipsum dolor sit amet?',
      a: 'Donec ut libero sed arcu vehicula ultricies a non tortor.',
    },
  ];

  return (
    <Card bg="#fdfdfd" minH="100vh" p={6}>
      {/* Header */}
      <Flex align="center" mb={6}>
        <BackAction title="FAQs" />
      </Flex>

      {/* Title */}
      <Text fontSize="22px" fontWeight="500" mb={4} color="#012540">
        Frequently Asked Questions
      </Text>

      {/* Accordion */}
      <Accordion allowToggle border={'none'}>
        {faqs.map((item, idx) => (
          <AccordionItem
            key={idx}
            borderRadius="8px"
            mb={3}
            bg="white"
            border={'none'}
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  bg={'rgba(126, 154, 205, 0.05)'}
                  _expanded={{ bg: 'rgba(126, 154, 205, 0.05)' }}
                  _hover={{ bg: 'none' }}
                  _focus={{ bg: 'rgba(126, 154, 205, 0.05)' }}
                  px={4}
                  py={3}
                >
                  <Flex flex="1" textAlign="left">
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      color="#012540"
                      opacity={0.9}
                    >
                      {item.q}
                    </Text>
                  </Flex>
                  {/* Custom icon */}
                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    color={isExpanded ? '#57A99A' : '#BDC7D4'}
                    borderColor={isExpanded ? '#57A99A' : '#BDC7D4'}
                    border={'1px solid '}
                    rounded={'full'}
                    px={1}
                  >
                    {isExpanded ? '–' : '+'}
                  </Text>
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  px={4}
                  fontSize="14px"
                  fontWeight={300}
                  opacity={0.9}
                  bg={'rgba(126, 154, 205, 0.05)'}
                >
                  {item.a}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
