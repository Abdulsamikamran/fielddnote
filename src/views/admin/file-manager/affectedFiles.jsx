'use client';

import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { FaFileAlt, FaRegFileAlt } from 'react-icons/fa';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';
import ExportMenu from 'components/menu/ExportMenu';

export default function AffectedFilesPage() {
  // Example dummy data (you can replace with API data)
  const files = [
    {
      id: 'CASE-4521_IMR-2134',
      date: 'Jul 12, 2025 – 09:22 UTC',
      location: 'Central Park North',
      status: 'Draft – Deletes in 2 days',
    },
    {
      id: 'CASE-4521_IMR-2134',
      date: 'Jul 12, 2025 – 09:22 UTC',
      location: 'Central Park North',
      status: 'Draft – Deletes in 2 days',
    },
    {
      id: 'CASE-4521_IMR-2134',
      date: 'Jul 12, 2025 – 09:22 UTC',
      location: 'Central Park North',
      status: 'Draft – Deletes in 2 days',
    },
    {
      id: 'CASE-4521_IMR-2134',
      date: 'Jul 12, 2025 – 09:22 UTC',
      location: 'Central Park North',
      status: 'Draft – Deletes in 2 days',
    },
  ];

  return (
    <Card p={6} minH="100vh">
      {/* Header */}
      <Flex
        gap={5}
        align="center"
        justifyContent="space-between"
        mb="20px"
        position="relative"
      >
        <BackAction title="Affected Files" />
        <ExportMenu />
      </Flex>

      {/* File List */}
      <VStack spacing={4} align="stretch">
        {files.map((file, idx) => (
          <Card key={idx} shadow="0 0 27.917px 0 rgba(0, 0, 0, 0.04)">
            <Flex
              bg="white"
              p={4}
              borderRadius="8px"
              justify="space-between"
              align="center"
            >
              <HStack align="flex-start" spacing={3}>
                <FaFileAlt size={20} color="#0D1B2A" />
                <Box>
                  <Flex
                    justify="space-between"
                    align="center"
                    w="full"
                    flexWrap="wrap"
                    gap={2}
                    mb={1}
                  >
                    <Text
                      fontWeight="600"
                      fontSize="14px"
                      opacity={0.8}
                      lineHeight={'13px'}
                      color="#0D1B2A"
                    >
                      {file.id}
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                      {file.date}
                    </Text>
                  </Flex>
                  <Text fontSize="13px" opacity={0.8} color={'#031227'}>
                    <b
                      style={{
                        color: '#031227',
                        fontSize: '12px',
                        fontWeight: '400',
                        opacity: 0.6,
                      }}
                    >
                      Location:
                    </b>{' '}
                    {file.location}
                  </Text>
                  <Text fontSize="12px" opacity={0.8}>
                    <b
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        opacity: 0.6,
                      }}
                    >
                      Status:
                    </b>{' '}
                    {file.status}
                  </Text>
                </Box>
              </HStack>

              {/* Action Buttons */}
              <VStack spacing={3} w="full" maxW={'150px'}>
                <Button
                  size="sm"
                  variant="outline"
                  w="full"
                  borderColor="#012540"
                  color="#0D1B2A"
                  fontSize="13px"
                >
                  Edit
                </Button>
                <Button
                  w="full"
                  size="sm"
                  bg="#0D1B2A"
                  color="white"
                  _hover={{ bg: '#1B263B' }}
                  fontSize="13px"
                >
                  Export
                </Button>
              </VStack>
            </Flex>
          </Card>
        ))}
      </VStack>
    </Card>
  );
}
