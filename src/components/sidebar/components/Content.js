// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import React from 'react';
import RecordCard from './AudioRecorderCard';
import { useNavigate } from 'react-router-dom';

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  const navigate = useNavigate();
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      pt="25px"
      px="16px"
      borderRadius="30px"
    >
      <Brand />
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: '16px', '2xl': '1px' }} mt={4}>
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box mt="60px" mb="40px" borderRadius="30px" w={'full'}>
        {/* <SidebarCard /> */}
        <RecordCard onClick={() => navigate('/admin/audio-recording')} />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
