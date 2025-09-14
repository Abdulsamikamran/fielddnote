import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import Card from 'components/common/card';
import { IoClose } from 'react-icons/io5';

export default function TimestampList({ timestamps, onDelete }) {
  return (
    <Card
      borderRadius="8px"
      shadow="0 1.736px 41.658px 0 rgba(0, 0, 0, 0.04)"
      p="16px"
      w="full"
      mb="24px"
    >
      {timestamps.map((time, idx) => (
        <Flex
          key={idx}
          justify="space-between"
          align="center"
          borderBottom={
            idx !== timestamps.length - 1 ? '1px solid #E7E3E3' : 'none'
          }
          py="10px"
        >
          <Text fontWeight="600" color="#012540">
            {timestamps.length - idx}
          </Text>
          <Text>{time}</Text>
          <IconButton
            aria-label="delete"
            icon={<IoClose />}
            size="sm"
            variant="ghost"
            onClick={() => onDelete(idx)}
          />
        </Flex>
      ))}
    </Card>
  );
}
