import {
  Flex,
  Text,
  IconButton,
  HStack,
  VStack,
  Box,
  Divider,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function CalendarStrip() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [activeDay, setActiveDay] = useState(6);

  return (
    <Box
      bg="white"
      borderRadius="12px"
      p="20px"
      boxShadow="0 0 28px rgba(0, 0, 0, 0.04)"
      mb="20px"
    >
      <HStack justify="space-between" w="full" maxW="700px" mx="auto">
        {days.map((day, i) => (
          <VStack
            key={day}
            spacing={2}
            cursor="pointer"
            onClick={() => setActiveDay(i + 1)}
          >
            <Text fontSize="12px" color="gray.500">
              {day}
            </Text>
            <Box
              w="28px"
              h="28px"
              borderRadius={activeDay === i + 1 ? 'full' : 'none'}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg={activeDay === i + 1 ? '#57A99A1A' : 'transparent'}
              shadow={
                activeDay === i + 1 ? '0 4px 4px 0 rgba(0, 0, 0, 0.25)' : 'none'
              }
              color={'#031227'}
              fontWeight="500"
              fontSize="15px"
              borderBottom={activeDay !== i + 1 ? '2px solid #57A99A' : 'none'}
              borderBottomHeight={'2px'}
            >
              {i + 1}
            </Box>
          </VStack>
        ))}
      </HStack>
      <Divider maxW="700px" mx="auto" py={2} />
      <Flex
        justify="space-between"
        align="center"
        mb="12px"
        maxW="700px"
        mx="auto"
        w="full"
      >
        <Flex align="center" gap={2}>
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Previous Month"
            variant="ghost"
            size="sm"
          />
          <Text fontSize="14px" fontWeight="500">
            August 2025
          </Text>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next Month"
            variant="ghost"
            size="sm"
          />
        </Flex>

        <Text
          fontSize="12px"
          fontWeight="400"
          color="#031227"
          opacity={0.5}
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
        >
          All Reports
        </Text>
      </Flex>
    </Box>
  );
}
