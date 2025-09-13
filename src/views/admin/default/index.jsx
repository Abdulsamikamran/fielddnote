import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Card from 'components/common/card';

export default function ConversationsPage() {
  const conversations = [
    {
      id: 1,
      user: 'Thomas Mark',
      avatar: '/avatar.png',
      title: 'Note',
      time: 'Today at 03:49 PM',
      duration: '5 min',
      section: 'Today',
    },
    {
      id: 2,
      user: 'Thomas Mark',
      avatar: '/avatar.png',
      title: 'Note',
      time: 'Yesterday at 03:49 PM',
      duration: '5 min',
      section: 'Yesterday',
    },
    {
      id: 3,
      user: 'Thomas Mark',
      avatar: '/avatar.png',
      title: 'Note',
      time: 'Yesterday at 03:49 PM',
      duration: '5 min',
      section: 'Yesterday',
    },
    {
      id: 4,
      user: 'Thomas Mark',
      avatar: '/avatar.png',
      title: 'Note',
      time: 'Yesterday at 03:49 PM',
      duration: '5 min',
      section: 'Yesterday',
    },
  ];

  return (
    <Card p="24px" minH="80vh">
      {/* Header */}
      <Flex justify="space-between" align="center" mb="24px">
        <Text fontSize="28px" fontWeight="600" color={'#031227"'}>
          CONVERSATIONS
        </Text>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="outline"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="6px"
            fontSize="14px"
            fontWeight="500"
            color="gray.700"
            bg="white"
            _hover={{ bg: 'gray.50' }}
            _expanded={{ bg: 'gray.50' }}
            px="16px"
            h="36px"
          >
            This Week
          </MenuButton>
          <MenuList
            borderRadius="6px"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            py="0"
            minW="150px"
          >
            <MenuItem fontSize="14px" fontWeight="500" py="8px">
              This Week
            </MenuItem>
            <MenuItem fontSize="14px" fontWeight="500" py="8px">
              Last Week
            </MenuItem>
            <MenuItem fontSize="14px" fontWeight="500" py="8px">
              This Month
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Conversation Sections */}
      <VStack spacing="20px" align="stretch">
        <Box>
          <Text fontSize="16px" fontWeight="600" mb="10px" color={'#012540'}>
            Today
          </Text>
          <VStack spacing="12px" align="stretch">
            {conversations
              .filter((c) => c.section === 'Today')
              .map((conv) => (
                <Card key={conv.id}>
                  <HStack spacing="12px" align={'start'}>
                    <Avatar src={conv.avatar} size="md" />
                    <Box bg="#e6e9ec" w="full" p={4} borderRadius={8}>
                      <Text fontSize="16px" fontWeight="600" color={'#012540'}>
                        {conv.title}
                      </Text>
                      <Text fontSize="16px" color="#9E9E9E">
                        {conv.time} • {conv.duration}
                      </Text>
                    </Box>
                  </HStack>
                </Card>
              ))}
          </VStack>
        </Box>

        <Box>
          <Text fontSize={'16px'} fontWeight="600" mb="10px" color={'#012540'}>
            Yesterday
          </Text>
          <VStack spacing="12px" align="stretch">
            {conversations
              .filter((c) => c.section === 'Yesterday')
              .map((conv) => (
                <Card key={conv.id}>
                  <HStack spacing="12px" align={'start'}>
                    <Avatar src={conv.avatar} size="md" />
                    <Box bg="#e6e9ec" w="full" p={4} borderRadius={8}>
                      <Text fontSize="16px" fontWeight="600" color={'#012540'}>
                        {conv.title}
                      </Text>
                      <Text fontSize="16px" color="#9E9E9E">
                        {conv.time} • {conv.duration}
                      </Text>
                    </Box>
                  </HStack>
                </Card>
              ))}
          </VStack>
        </Box>
      </VStack>
    </Card>
  );
}
