// Chakra Imports
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  Text,
  HStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FiBell, FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { SidebarResponsive } from 'components/sidebar/Sidebar'; // keeps sidebar toggle

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => window.removeEventListener('scroll', changeNavbar);
  });

  const changeNavbar = () => {
    setScrolled(window.scrollY > 1);
  };

  let navbarBg = useColorModeValue('white', 'navy.800');
  let mainText = useColorModeValue('navy.700', 'white');

  return (
    <Box
      position="fixed"
      top={{ base: '12px', md: '16px' }}
      right={{ base: '12px', md: '30px' }}
      w={{
        base: 'calc(100vw - 6%)',
        md: 'calc(100vw - 8%)',
        lg: 'calc(100vw - 6%)',
        xl: 'calc(100vw - 290px)',
        '2xl': 'calc(100vw - 290px)',
      }}
      bg={'transparent'}
      px="20px"
      py="10px"
      zIndex="10"
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 3, md: 0 }}
      >
        {/* Search */}
        <InputGroup maxW="420px" flex="1">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Search by date, case ID or officer name."
            variant="search"
            px={4}
            py={5}
          />
        </InputGroup>

        {/* Right side */}
        <HStack gap="20px">
          <SidebarResponsive
            routes={props.routes}
            display={{ base: 'flex', md: 'none' }}
          />

          {/* Action buttons */}
          <HStack>
            <IconButton
              aria-label="Add"
              icon={<FiPlus fontSize={'18px'} />}
              variant="outline"
              borderRadius="15px"
              border={'2px solid'}
              padding={'10px'}
              borderColor={'#012540B2'}
            />
            <IconButton
              aria-label="Notifications"
              icon={<FiBell fontSize={'18px'} />}
              variant="outline"
              borderRadius="15px"
              border={'2px solid'}
              padding={'10px'}
              borderColor={'#012540B2'}
            />
          </HStack>

          {/* Profile */}
          <Menu ml="10px">
            <MenuButton>
              <HStack spacing="10px">
                <Avatar size="md" src="/avatar.png" />
                <Box textAlign="left" display={{ base: 'none', md: 'block' }}>
                  <Text fontSize="18px" fontWeight="medium" color={'#031227'}>
                    Thomas Mark
                  </Text>
                  <Text fontSize="14px" fontWeight="light" color="gray.500">
                    @thomas
                  </Text>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem color="red.400">Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}

AdminNavbar.propTypes = {
  routes: PropTypes.array,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
