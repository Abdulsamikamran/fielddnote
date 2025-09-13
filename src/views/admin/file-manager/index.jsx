'use client';

import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  VStack,
  HStack,
  Icon,
  Badge,
  Image,
  Divider,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { MdMusicNote } from 'react-icons/md';
import { IoWarning } from 'react-icons/io5';
import { RiMenu3Line } from 'react-icons/ri';
import { FaMusic, FaPlay } from 'react-icons/fa';

export default function FileManagerPage() {
  const audioFiles = [
    {
      id: 1,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case: 64917 | Officer: IMR-2134',
      meta: '2025-08-12 16:14 UTC • 00:01:04 • RØDE-001',
      reviewed: false,
    },
    {
      id: 2,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case: 64917 | Officer: IMR-2134',
      meta: '2025-08-12 16:14 UTC • 00:01:04 • RØDE-001',
      reviewed: true,
    },
    {
      id: 3,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case: 64917 | Officer: IMR-2134',
      meta: '2025-08-12 16:14 UTC • 00:01:04 • RØDE-001',
      reviewed: false,
    },
    {
      id: 4,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case: 64917 | Officer: IMR-2134',
      meta: '2025-08-12 16:14 UTC • 00:01:04 • RØDE-001',
      reviewed: true,
    },
  ];

  const draftReports = [
    {
      id: 1,
      case: 'CASE-4587_IMR-2134',
      type: 'Assault',
      status: 'Draft',
      location: 'Main Street, Sector 4',
      date: 'Aug 13, 2025 – 14:35 UTC',
    },
    {
      id: 2,
      case: 'CASE-4587_IMR-2134',
      type: 'Assault',
      status: 'Draft',
      location: 'Main Street, Sector 4',
      date: 'Aug 13, 2025 – 14:35 UTC',
    },
    {
      id: 3,
      case: 'CASE-4587_IMR-2134',
      type: 'Assault',
      status: 'Draft',
      location: 'Main Street, Sector 4',
      date: 'Aug 13, 2025 – 14:35 UTC',
    },
  ];

  return (
    <Box p="24px" minH="100vh" bg="#F9FAFB">
      {/* Page Title */}
      <Text fontSize="28px" fontWeight="600" color="#012540" mb="20px">
        File Manager
      </Text>

      {/* Retention Alert Banner */}

      <Flex position="relative" mb="24px">
        {/* Gradient shadow layers */}
        <Box
          position="absolute"
          top={5}
          left={6}
          w="95%"
          h="110px"
          borderRadius="7.507px"
          opacity={0.2}
          bg="linear-gradient(180deg, #012540 22.66%, #012540 100%)"
          zIndex={0}
        />
        <Box
          position="absolute"
          top={8}
          left={12}
          w="90%"
          h="110px"
          borderRadius="7.507px"
          opacity={0.15}
          bg="linear-gradient(180deg, #012540 22.66%, #012540 100%)"
          zIndex={0}
        />

        {/* Main Box */}
        <Box
          bg="linear-gradient(180deg, #4F6BA1 8.46%, #2D3E5E 100%)"
          borderRadius="12px"
          p="16px"
          mb="24px"
          color="white"
          shadow="md"
          position="relative"
          //   maxH="118px"
          w="full"
          zIndex={1}
        >
          <Box position="absolute" top={0} right={0}>
            <Image
              src="/ellipseHero.png"
              w="full"
              h="full"
              objectFit={'contain'}
            />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="600"
            lineHeight="15px"
            mb="4px"
            display="inline-flex"
            align="center"
            gap={2}
          >
            Retention Alerts <IoWarning color="red" />
          </Text>
          <Text fontSize="16px" fontWeight={400} mb="10px">
            3 Draft Reports will be auto-deleted in 2 days.
          </Text>
          <Button
            size="sm"
            bg="white"
            color="#012540"
            borderRadius="full"
            fontSize={'11px'}
            fontWeight={500}
            p={4}
            _hover={{ bg: 'gray.100' }}
          >
            View Affected Files
          </Button>
        </Box>
      </Flex>

      {/* Search Input */}
      <Flex align="center" px="14px" py="8px" mb="28px">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" fontSize="14px" />
          </InputLeftElement>
          <Input
            placeholder="Search Category"
            border="none"
            _focus={{ boxShadow: 'none' }}
            bg={'#EDF1F4'}
          />
        </InputGroup>
        <Box
          as="button"
          bg="gray.100"
          px="2"
          py="2"
          borderRadius="12px"
          border="2px solid #012540B2"
          ml="8px"
        >
          <RiMenu3Line />
        </Box>
      </Flex>

      {/* Audio Files Section */}
      <Flex justify="space-between" align="center">
        <Text fontSize="14px" fontWeight="600" color="#012540" opacity={0.5}>
          AUDIO FILES
        </Text>
        <Button
          variant="link"
          fontSize="11px"
          lineHeight="11px"
          color="#012540"
        >
          VIEW ALL
        </Button>
      </Flex>

      <Flex gap={4} mb="32px" w="full">
        {audioFiles.map((file) => (
          <AudioCard key={file.id} file={file} />
        ))}
      </Flex>

      {/* Draft Reports Section */}
      <Flex justify="space-between" align="center">
        <Text fontSize="14px" fontWeight="600" opacity={0.5}>
          DRAFT REPORTS
        </Text>
        <Button
          variant="link"
          fontSize="11px"
          lineHeight="11px"
          color="#012540"
        >
          VIEW ALL
        </Button>
      </Flex>

      <Flex gap={4} w="full">
        {draftReports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </Flex>
    </Box>
  );
}

/* ---------------- Components ---------------- */

const AudioCard = ({ file }) => (
  <Box
    bg="#ebeef0"
    p="20px"
    borderRadius="12px"
    shadow="sm"
    border="1px solid #EDF2F7"
    w="full"
    // maxW={'270px'}
  >
    <HStack spacing={3} mb="12px" w="full" align="start">
      <Box
        w="42px"
        h="42px"
        borderRadius={'10px'}
        color="#012540"
        bg="#d4dade"
        p={3}
      >
        <FaMusic />
      </Box>
      <VStack align="start" gap={2} w="full">
        <Text
          fontSize="13px"
          fontWeight="500"
          opacity={0.8}
          lineHeight={'13px'}
        >
          {file.name}
        </Text>
        <Text fontSize="10px" fontWeight={400} opacity={0.8}>
          {file.case}
        </Text>
        <Text fontSize="10px" fontWeight={400} opacity={0.4}>
          {file.meta}
        </Text>
      </VStack>
    </HStack>
    <Divider borderColor="#BDC7D4" />

    <Flex w="full" justifyContent="space-between" align="center" pt={3}>
      <Text
        fontSize="12px"
        // color={file.reviewed ? 'green.600' : 'red.500'}
        opacity={0.5}
        mb="12px"
        lineHeight={'13px'}
      >
        {file.reviewed ? 'Reviewed ✅' : 'Unreviewed 🔴'}
      </Text>

      <Button
        size="sm"
        w="auto"
        borderRadius="full"
        bg="#012540"
        color="white"
        _hover={{ bg: '#0D2E52' }}
      >
        <FaPlay /> &nbsp; {file.reviewed ? 'Play' : 'Resume'}
      </Button>
    </Flex>
  </Box>
);

const ReportCard = ({ report }) => (
  <Box
    bg="white"
    p="16px"
    borderRadius="12px"
    shadow="sm"
    border="1px solid #EDF2F7"
    w="full"
  >
    <Flex justify="space-between" align="flex-start">
      {/* Left side */}
      <VStack align="start" spacing={2}>
        <Text
          fontSize="12px"
          lineHeight={'11px'}
          fontWeight="400"
          opacity={0.6}
        >
          Auto Generated
        </Text>
        <Text
          fontSize="14px"
          lineHeight={'13px'}
          fontWeight="400"
          opacity={0.8}
        >
          {report.case}
        </Text>

        <Text
          mt={'40px'}
          fontSize="12px"
          lineHeight={'11px'}
          fontWeight="400"
          color="gray.500"
        >
          Location
        </Text>
        <HStack gap={3} align="center">
          <Text
            fontSize="14px"
            lineHeight={'13px'}
            fontWeight="400"
            opacity={0.8}
          >
            {report.location}
          </Text>
          <Text fontSize="12px" color="gray.500">
            {report.date}
          </Text>
        </HStack>
      </VStack>

      {/* Right side */}
      <VStack align="end" spacing={2}>
        <Text
          fontSize="10px"
          lineHeight={'11px'}
          fontWeight="400"
          opacity={0.6}
        >
          {report.status}
        </Text>
        <Text
          fontSize="14px"
          lineHeight={'13px'}
          fontWeight="400"
          opacity={0.8}
        >
          {report.type}
        </Text>
      </VStack>
    </Flex>
  </Box>
);
