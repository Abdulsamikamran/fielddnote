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
import AddDeviceModal from 'components/modals/addDeviceModal';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoutModal from 'components/modals/logoutModal';

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logOutOpen, setLogoutOpen] = useState(false);

  const navigate = useNavigate();
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
      bg={'#F9FAFC'}
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
            <SearchIcon color="gray.400" fontSize={'12px'} />
          </InputLeftElement>
          <Input
            placeholder="Search by date, case ID or officer name."
            variant="search"
            fontSize={'12px'}
            borderRadius={'10px'}
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
              padding={'0px'}
              borderColor={'#012540B2'}
              onClick={() => setIsOpen(!isOpen)}
            />
            <IconButton
              aria-label="Notifications"
              icon={<FiBell fontSize={'18px'} />}
              variant="outline"
              borderRadius="15px"
              border={'2px solid'}
              padding={'0px'}
              borderColor={'#012540B2'}
              onClick={() => navigate('/admin/settings/notifications')}
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
                <IconButton
                  aria-label="Notifications"
                  icon={<FaChevronDown fontSize={'12px'} />}
                  variant="brand"
                  size={'sm'}
                  borderRadius="10px"
                  border={'2px solid'}
                  padding={'0px'}
                  borderColor={'#012540B2'}
                />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate('/admin/settings')}>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => navigate('/admin/settings/paired-devices')}
              >
                Settings
              </MenuItem>
              <MenuItem color="red.400" onClick={() => setLogoutOpen(true)}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      <AddDeviceModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <LogoutModal isOpen={logOutOpen} onClose={() => setLogoutOpen(false)} />
    </Box>
  );
}

AdminNavbar.propTypes = {
  routes: PropTypes.array,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
