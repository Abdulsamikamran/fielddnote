'use client';

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Divider,
  Button,
} from '@chakra-ui/react';
import { BsUpload } from 'react-icons/bs';
import { useState } from 'react';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';
import PDFCard from 'components/common/pdfCard';
import ShareReportModal from 'components/modals/shareReportModal';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function ReportReview() {
  const [activePage, setActivePage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card p="24px" minH="85vh">
        {/* Header */}
        <Flex justify="space-between" align="center" mb="16px">
          <BackAction title="Report Review" />
          <IconButton
            icon={<BsUpload />}
            aria-label="Share"
            variant="ghost"
            fontSize="20px"
            onClick={() => setIsOpen(!isOpen)}
          />
        </Flex>

        {/* Content Switcher */}
        <Card
          shadow="0 10px 60px 0 rgba(0, 0, 0, 0.06)"
          bg="white"
          borderRadius="30px 12px 2px 12px"
          p="16px"
        >
          {activePage === 0 ? <ReportDetails /> : <AuditLog />}
        </Card>

        {/* Paginator */}
      </Card>
      <HStack justify="center" my={8} spacing={6}>
        {/* Left Arrow */}
        <IconButton
          icon={<ChevronLeftIcon boxSize={10} />} // 👈 bigger icon (6 = 24px)
          aria-label="Previous"
          size="md" // medium button
          variant="ghost"
          onClick={() => setActivePage((prev) => Math.max(prev - 1, 0))}
        />

        {/* Dots */}
        <HStack spacing={3}>
          {[0, 1].map((i) => (
            <Box
              key={i}
              w="10px"
              h="10px"
              borderRadius="full"
              bg={activePage === i ? '#57A99A' : 'gray.300'}
              cursor="pointer"
              onClick={() => setActivePage(i)}
            />
          ))}
        </HStack>

        {/* Right Arrow */}
        <IconButton
          icon={<ChevronRightIcon boxSize={10} />} // 👈 bigger icon
          aria-label="Next"
          size="md"
          variant="ghost"
          onClick={() => setActivePage((prev) => Math.min(prev + 1, 1))}
        />
      </HStack>
      <ShareReportModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* Report Details Page */
function ReportDetails() {
  return (
    <VStack gap={5} align="stretch" p={2}>
      {/* Report Details */}
      <Box>
        <Text
          fontWeight="500"
          mb={4}
          fontSize="18px"
          lineHeight="16px"
          color="#012540"
        >
          Report Details
        </Text>
        <Flex justify="space-between" fontSize="14px" mb={5}>
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            Officer ID
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            DummyID123
          </Text>
        </Flex>
        <Flex justify="space-between" fontSize="14px" mb={5}>
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            Date &amp; Time
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            12:30 PM · 10 Aug 2025
          </Text>
        </Flex>
        <Flex justify="space-between" fontSize="14px" mb={5}>
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            Location
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            DummyLocation123
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={4}
          justify="space-between"
          fontSize="14px"
        >
          <Text
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            Case Number
          </Text>
          <Text
            py={4}
            px={5}
            borderRadius="6px"
            bg="rgba(189, 198, 212, 0.20)"
            fontSize="16px"
            fontWeight={400}
            lineHeight="14px"
            opacity={0.7}
          >
            Dummy123
          </Text>
        </Flex>
      </Box>

      {/* Transcript / Draft */}
      <Text
        fontWeight="400"
        // mb={1}
        fontSize="22px"
        opacity={0.7}
        lineHeight={'19px'}
      >
        Transcript / AI Draft
      </Text>
      <Box
        bg="white"
        p="20px"
        borderRadius="12px"
        border="1px solid #D9E7EA"
        shadow="0 0 27.917px 0 rgba(0, 0, 0, 0.04)"
      >
        <Box borderRadius="10px" mb="16px">
          <Text
            fontSize={'16px'}
            color={'#031227'}
            fontWeight={400}
            opacity={0.7}
            mb="8px"
          >
            Etiam hendrerit justo risus:
          </Text>

          <VStack spacing="4px" align="start" mb="16px">
            <Text color="#57A99A" fontSize="16px" fontWeight="600">
              Lorem Ipsum:
              <Text
                as="span"
                fontWeight="400"
                fontSize="16px"
                color="#031227"
                opacity={0.7}
              >
                {' '}
                Lorem ipsum dolor sit amet
              </Text>
            </Text>
            <Text color="#57A99A" fontSize="16px" fontWeight="600">
              Lorem Ipsum:
              <Text
                as="span"
                fontWeight="400"
                fontSize="16px"
                color="#031227"
                opacity={0.7}
              >
                {' '}
                Lorem ipsum dolor sit amet
              </Text>
            </Text>
            <Text color="#57A99A" fontSize="16px" fontWeight="600">
              Lorem Ipsum:
              <Text
                as="span"
                fontWeight="400"
                fontSize="16px"
                color="#031227"
                opacity={0.7}
              >
                {' '}
                Lorem ipsum dolor sit amet
              </Text>
            </Text>
          </VStack>

          <VStack
            gap={4}
            align="start"
            bg="rgba(1, 37, 64, 0.1)"
            p="12px"
            borderRadius="8px"
            mb="16px"
            fontSize={'16px'}
            fontWeight={400}
            color={'#031227'}
          >
            <Text opacity={0.7}>
              ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text opacity={0.7}>
              ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text opacity={0.7}>
              ● &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </VStack>

          <Text fontWeight="700" fontSize="18px">
            Lorem Ipsum
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            color={'#031227'}
            opacity={0.7}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
      </Box>

      {/* Metadata Summary */}
      <Text fontWeight="500" lineHeight={'16px'} fontSize="16px">
        Metadata Summary
      </Text>
      <Card
        bg="white"
        p="20px"
        borderRadius="12px"
        border="1px solid #D9E7EA"
        shadow="0 0 27.917px 0 rgba(0, 0, 0, 0.04)"
      >
        <VStack spacing={2} align="stretch" fontSize="14px">
          <Flex justify="space-between">
            <Text color="gray.600">File Name</Text>
            <Text color="gray.800">Auto-generated</Text>
          </Flex>
          <Flex justify="space-between">
            <Text color="gray.600">Device ID</Text>
            <Text color="gray.800">RODE-01</Text>
          </Flex>
          <Flex justify="space-between">
            <Text color="gray.600">Recording Duration</Text>
            <Text color="gray.800">05:20</Text>
          </Flex>
          <Flex justify="space-between">
            <Text color="gray.600">Audio Source</Text>
            <Text color="gray.800">External Mic</Text>
          </Flex>
        </VStack>
      </Card>
    </VStack>
  );
}

/* Audit Log Page */
function AuditLog() {
  return (
    <VStack spacing={6} align="stretch">
      <Text fontWeight="500" fontSize="18px" color="#012540">
        Audit Log
      </Text>
      <Card
        bg="white"
        p="16px"
        borderRadius="10px"
        shadow=" 0 0 27.917px 0 rgba(0, 0, 0, 0.04)"
        border="1px solid #D9E7EA"
      >
        <VStack gap={4} align="start" color={'#031227'}>
          <Box>
            <Text
              fontSize="14px"
              fontWeight={400}
              opacity={0.6}
              lineHeight={'11px'}
              mb={2}
            >
              Last Modified
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              opacity={0.8}
              lineHeight={'13px'}
            >
              11 Aug 2025 at 04:33 PM
            </Text>
          </Box>

          <Box>
            <Text
              fontSize="14px"
              fontWeight={400}
              opacity={0.6}
              lineHeight={'11px'}
              mb={2}
            >
              Edited By
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              opacity={0.8}
              lineHeight={'13px'}
            >
              Officer ID
            </Text>
          </Box>

          <Box>
            <Text
              fontSize="14px"
              fontWeight={400}
              opacity={0.6}
              lineHeight={'11px'}
              mb={2}
            >
              Actions Count
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              opacity={0.8}
              lineHeight={'13px'}
            >
              3 Edits, 1 Export
            </Text>
          </Box>
        </VStack>
      </Card>

      <Box bg="white" p="20px">
        <Box w={'full'} maxW={'800px'} mx={'auto'}>
          <Box
            bg="#7E9ACD26"
            py="24px"
            px={'40px'}
            borderRadius="30px 12px 2px 12px"
            //    maxW="606px"
            w="100%"
            boxShadow="sm"
          >
            <Text fontWeight="700" fontSize={'18px'} opacity={0.8} mb="8px">
              Lorem Ipsum
            </Text>
            <Text fontSize="16px" fontWeight={400} opacity={0.7} mb="16px">
              Lorem ipsum dolor sit amet consectetur. Euismod facilisi porttitor
              nunc nisi eget facilisis sit. Nullam vivamus auctor massa eget
              vitae duis purus. Nibh tincidunt mattis vitae malesuada. Dignissim
              diam fermentum amet magna nunc sed risus elit pharetra.
            </Text>

            {/* File Card */}
            <PDFCard />
          </Box>
        </Box>
      </Box>
    </VStack>
  );
}
