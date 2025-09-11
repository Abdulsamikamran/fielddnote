// /* eslint-disable */
// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// // chakra imports
// import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

// export function SidebarLinks(props) {
//   //   Chakra color mode
//   let location = useLocation();
//   let activeColor = useColorModeValue("gray.700", "white");
//   let inactiveColor = useColorModeValue(
//     "secondaryGray.600",
//     "secondaryGray.600"
//   );
//   let activeIcon = useColorModeValue("brand.500", "white");
//   let textColor = useColorModeValue("secondaryGray.500", "white");
//   let brandColor = useColorModeValue("brand.500", "brand.400");

//   const { routes } = props;

//   // verifies if routeName is the one active (in browser input)
//   const activeRoute = (routeName) => {
//     return location.pathname.includes(routeName);
//   };

//   // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
//   const createLinks = (routes) => {
//     return routes.map((route, index) => {
//       if (route.category) {
//         return (
//           <>
//             <Text
//               fontSize={"md"}
//               color={activeColor}
//               fontWeight='bold'
//               mx='auto'
//               ps={{
//                 sm: "10px",
//                 xl: "16px",
//               }}
//               pt='18px'
//               pb='12px'
//               key={index}>
//               {route.name}
//             </Text>
//             {createLinks(route.items)}
//           </>
//         );
//       } else if (
//         route.layout === "/admin" ||
//         route.layout === "/auth" ||
//         route.layout === "/rtl"
//       ) {
//         return (
//           <NavLink key={index} to={route.layout + route.path}>
//             {route.icon ? (
//               <Box>
//                 <HStack
//                   spacing={
//                     activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
//                   }
//                   py='5px'
//                   ps='10px'>
//                   <Flex w='100%' alignItems='center' justifyContent='center'>
//                     <Box
//                       color={
//                         activeRoute(route.path.toLowerCase())
//                           ? activeIcon
//                           : textColor
//                       }
//                       me='18px'>
//                       {route.icon}
//                     </Box>
//                     <Text
//                       me='auto'
//                       color={
//                         activeRoute(route.path.toLowerCase())
//                           ? activeColor
//                           : textColor
//                       }
//                       fontWeight={
//                         activeRoute(route.path.toLowerCase())
//                           ? "bold"
//                           : "normal"
//                       }>
//                       {route.name}
//                     </Text>
//                   </Flex>
//                   <Box
//                     h='36px'
//                     w='4px'
//                     bg={
//                       activeRoute(route.path.toLowerCase())
//                         ? brandColor
//                         : "transparent"
//                     }
//                     borderRadius='5px'
//                   />
//                 </HStack>
//               </Box>
//             ) : (
//               <Box>
//                 <HStack
//                   spacing={
//                     activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
//                   }
//                   py='5px'
//                   ps='10px'>
//                   <Text
//                     me='auto'
//                     color={
//                       activeRoute(route.path.toLowerCase())
//                         ? activeColor
//                         : inactiveColor
//                     }
//                     fontWeight={
//                       activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
//                     }>
//                     {route.name}
//                   </Text>
//                   <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
//                 </HStack>
//               </Box>
//             )}
//           </NavLink>
//         );
//       }
//     });
//   };
//   //  BRAND
//   return createLinks(routes);
// }

// export default SidebarLinks;

/* eslint-disable */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Flex, Text, HStack, useColorModeValue } from '@chakra-ui/react';

export function SidebarLinks({ routes }) {
  const location = useLocation();

  const activeBg = '#052F52'; // dark blue background
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
              borderRadius="8px"
              bg={isActive ? activeBg : 'transparent'}
              color={isActive ? activeColor : inactiveColor}
              fontWeight={isActive ? '600' : '400'}
              _hover={{
                bg: !isActive ? 'gray.100' : activeBg,
                color: !isActive ? 'black' : activeColor,
              }}
              mb="6px"
              transition="all 0.2s ease"
            >
              {route.icon && (
                <Box
                  as="span"
                  fontSize="18px"
                  me="12px"
                  color={isActive ? activeColor : inactiveColor}
                >
                  {route.icon}
                </Box>
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
