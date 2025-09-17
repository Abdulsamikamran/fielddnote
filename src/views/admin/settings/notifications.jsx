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

export default function NotificationsPage() {
  // Example dummy data (you can replace with API data)
  const notifications = [
    {
      notification: 'Lorem ipsum dolor sit amet',
      detail:
        'Lorem ipsum dolor sit amet consectetur. Gravida semper lobortis venenatis erat vitae nulla. Leo tortor velit donec lacus purus aliquet imperdiet eget in.',
    },
    {
      notification: 'Lorem ipsum dolor sit amet',
      detail:
        'Lorem ipsum dolor sit amet consectetur. Gravida semper lobortis venenatis erat vitae nulla. Leo tortor velit donec lacus purus aliquet imperdiet eget in.',
    },
    {
      notification: 'Lorem ipsum dolor sit amet',
      detail:
        'Lorem ipsum dolor sit amet consectetur. Gravida semper lobortis venenatis erat vitae nulla. Leo tortor velit donec lacus purus aliquet imperdiet eget in.',
    },
    {
      notification: 'Lorem ipsum dolor sit amet',
      detail:
        'Lorem ipsum dolor sit amet consectetur. Gravida semper lobortis venenatis erat vitae nulla. Leo tortor velit donec lacus purus aliquet imperdiet eget in.',
    },
    {
      notification: 'Lorem ipsum dolor sit amet',
      detail:
        'Lorem ipsum dolor sit amet consectetur. Gravida semper lobortis venenatis erat vitae nulla. Leo tortor velit donec lacus purus aliquet imperdiet eget in.',
    },
  ];
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
        <BackAction title="Notifications" />
        <ExportMenu />
      </Flex>

      {/* File List */}
      <VStack spacing={4} align="stretch">
        {notifications.map((notif, idx) => (
          <>
            {(idx === 0 || idx === 2) && (
              <Text fontSize={'14px'} fontWeight={'500'} py={2}>
                {idx === 0 ? 'Today' : 'Yesterday'}
              </Text>
            )}

            <Card key={idx} shadow="0 0 27.917px 0 rgba(0, 0, 0, 0.04)">
              <VStack align="start">
                <Text fontSize={'18px'} fontWeight={'semibold'}>
                  {notif.notification}
                </Text>
                <Text fontSize={'16px'} fontWeight={'400'} color={'#646565'}>
                  {notif.detail}
                </Text>
              </VStack>
            </Card>
          </>
        ))}
      </VStack>
    </Card>
  );
}
