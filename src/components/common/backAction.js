import { Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function BackAction({ title }) {
  const navigate = useNavigate();

  return (
    <Flex align="center" mb="20px">
      <IconButton
        icon={<ArrowBackIcon color={'#031227'} />}
        aria-label="Back"
        variant="ghost"
        mr="12px"
        fontSize={'30px'}
        onClick={() => navigate(-1)} // router -1
      />
      <Text fontSize="28px" fontWeight="600" color="#031227">
        {title}
      </Text>
    </Flex>
  );
}
