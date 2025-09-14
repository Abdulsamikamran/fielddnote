'use client';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Card from 'components/common/card';
import { FaCamera } from 'react-icons/fa';
import { useState } from 'react';
import DeleteAccountModal from 'components/modals/deleteConfirmationModal';
import LogoutModal from 'components/modals/logoutModal';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [delOpen, setDelOpen] = useState(false);
  const [logOutOpen, setLogoutOpen] = useState(false);
  return (
    <Card minH="100vh" p={5}>
      {/* Header */}
      <Text fontSize="28px" fontWeight="600" color="#012540" mb={6}>
        Settings
      </Text>

      {/* Profile Block */}
      <Flex align="start" mb={8} direction="column">
        <Box position="relative">
          <Avatar
            size="2xl"
            name="Thomas Mark"
            src="/profileImage.png" // replace with actual avatar
          />
          {/* Camera Icon */}
          <IconButton
            icon={<FaCamera color="#57A99A" />}
            size="sm"
            bg="white"
            borderRadius="full"
            boxShadow="sm"
            position="absolute"
            bottom="4px"
            right="4px"
            aria-label="Change photo"
          />
        </Box>
        <Box>
          <Text fontSize="18px" fontWeight="600" color="#012540">
            Thomas Mark
          </Text>
          <Text fontSize="14px" color="gray.500">
            @thomas
          </Text>
        </Box>
      </Flex>

      <VStack spacing={0} align="stretch">
        {/* GENERAL Section */}
        <Text
          fontSize="18px"
          fontWeight="600"
          textTransform="uppercase"
          opacity={0.6}
          mb={2}
        >
          General
        </Text>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
          onClick={() => navigate('/admin/settings/edit-profile')}
        >
          <Text
            fontSize="16px"
            fontWeight={400}
            opacity={0.9}
            lineHeight={'14px'}
          >
            Edit Profile
          </Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
        >
          <Text
            fontSize="16px"
            fontWeight={400}
            opacity={0.9}
            lineHeight={'14px'}
          >
            Update Email Address
          </Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
        >
          <Text
            fontSize="16px"
            fontWeight={400}
            opacity={0.9}
            lineHeight={'14px'}
          >
            Change Password
          </Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
        >
          <Text
            fontSize="16px"
            fontWeight={400}
            opacity={0.9}
            lineHeight={'14px'}
          >
            Notifications
          </Text>
          <Switch size="md" colorScheme="navy" />
        </Flex>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
          onClick={() => navigate('/admin/settings/update-subscription')}
        >
          <Text
            fontSize="16px"
            fontWeight={400}
            opacity={0.9}
            lineHeight={'14px'}
          >
            Upgrade Subscription Plan{' '}
            <span style={{ color: '#f59e0b' }}>👑</span>
          </Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        {/* APP PREFERENCES Section */}
        <Text
          fontSize="18px"
          fontWeight="600"
          textTransform="uppercase"
          opacity={0.6}
          my={2}
          pt={4}
        >
          App Preferences
        </Text>

        <Flex
          mt={2}
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
          onClick={() => navigate('/admin/settings/paired-devices')}
        >
          <Text>Settings</Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
          onClick={() => navigate('/admin/settings/faq')}
        >
          <Text>FAQs</Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
          onClick={() => navigate('/admin/settings/about-us')}
        >
          <Text>About Us</Text>
          <ChevronRightIcon color="gray.400" />
        </Flex>

        {/* Delete Account */}
        <Flex
          py={4}
          justify="space-between"
          align="center"
          borderBottom="1px solid #eee"
          cursor="pointer"
          onClick={() => setDelOpen(true)}
        >
          <Text color="red.500">Delete Account</Text>
        </Flex>
      </VStack>

      {/* Logout Button */}
      <Flex justify="start" mt={4}>
        <Button
          bg="#feeded"
          color="#F34F48"
          w="full"
          maxW="400px"
          borderRadius="full"
          fontWeight="600"
          _hover={{ bg: 'red.600', color: 'white' }}
          onClick={() => setLogoutOpen(true)}
        >
          Logout
        </Button>
      </Flex>
      <DeleteAccountModal isOpen={delOpen} onClose={() => setDelOpen(false)} />
      <LogoutModal isOpen={logOutOpen} onClose={() => setLogoutOpen(false)} />
    </Card>
  );
}
