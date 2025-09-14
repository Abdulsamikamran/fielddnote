'use client';

import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Text,
  Input,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FiCamera } from 'react-icons/fi';
import { FaCamera } from 'react-icons/fa';
import BackAction from 'components/common/backAction';

export default function EditProfilePage() {
  return (
    <Box bg="#fdfdfd" minH="100vh" p={8}>
      {/* Header */}
      <Flex align="center" mb={8}>
        <BackAction title="Profile" />
      </Flex>

      {/* Profile Block */}
      <Flex direction="column" align="center" mb={10}>
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
        <Text fontSize="18px" fontWeight="600" mt={4} color="#012540">
          Thomas Mark
        </Text>
        <Text fontSize="14px" color="gray.500">
          @thomas
        </Text>
      </Flex>

      {/* Info Grid */}
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={6}
        // maxW="800px"
        mx="auto"
      >
        <GridItem>
          <Text fontSize="14px" fontWeight="500" mb={2} opacity={0.7}>
            Full Name
          </Text>
          <Input
            value="Dummy Name"
            isReadOnly
            bg="rgba(189, 198, 212, 0.20)"
            p={6}
          />
        </GridItem>

        <GridItem>
          <Text fontSize="14px" fontWeight="500" mb={2} opacity={0.7}>
            Officer ID
          </Text>
          <Input
            p={6}
            value="Dummy ID 123"
            isReadOnly
            bg="rgba(189, 198, 212, 0.20)"
          />
        </GridItem>

        <GridItem>
          <Text fontSize="14px" fontWeight="500" mb={2} opacity={0.7}>
            Department Name
          </Text>
          <Input
            p={6}
            value="Dummy"
            isReadOnly
            bg="rgba(189, 198, 212, 0.20)"
          />
        </GridItem>

        <GridItem>
          <Text fontSize="14px" fontWeight="500" mb={2} opacity={0.7}>
            Rank/ Title
          </Text>
          <Input
            p={6}
            value="Dummy"
            isReadOnly
            bg="rgba(189, 198, 212, 0.20)"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
