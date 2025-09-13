/* eslint-disable */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';

export function SidebarLinks({ routes }) {
  const location = useLocation();

  const activeBg = '#012540'; // dark blue background
  const activeColor = 'white';
  const inactiveColor = '#1B2559';

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) =>
    routes.map((route, index) => {
      if (route.category) {
        return (
          <Text
            key={index}
            fontSize="md"
            fontWeight="bold"
            color={inactiveColor}
            mx="auto"
            ps={{ sm: '10px', xl: '16px' }}
            pt="18px"
            pb="12px"
          >
            {route.name}
          </Text>
        );
      } else if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        const isActive = activeRoute(route.path.toLowerCase());
        return (
          <NavLink key={index} to={route.layout + route.path}>
            <Flex
              align="center"
              px="14px"
              my={'24px'}
              py="10px"
              borderRadius="10px"
              outline={'none'}
              border={'none'}
              bg={isActive ? activeBg : 'transparent'}
              color={isActive ? activeColor : inactiveColor}
              fontWeight={isActive ? '600' : '400'}
              _hover={{
                bg: !isActive ? 'gray.100' : activeBg,
                color: !isActive ? 'black' : activeColor,
              }}
              mb="6px"
              transition="all 0.2s ease"
              gap={4}
            >
              {route.icon && (
                <>{route.icon}</>
                // <Icon
                //   as={route.icon}
                //   width="20px"
                //   height="20px"
                //   color="inherit"
                // />
                // <Box
                //   pt={1}
                //   boxSize="40px"
                //   color={isActive ? activeColor : inactiveColor}
                // >
                //   {route.icon}
                // </Box>
              )}
              <Text fontSize="18px" fontWeight={400}>
                {route.name}
              </Text>
            </Flex>
          </NavLink>
        );
      }
    });

  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;
