import { Box, useColorModeValue } from '@chakra-ui/react';

export default function Card({ children, ...rest }) {
  return (
    <Box
      bg={'white'}
      borderRadius="10px"
      px="16px"
      py="12px"
      w="100%"
      {...rest}
    >
      {children}
    </Box>
  );
}
