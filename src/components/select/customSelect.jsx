import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function CustomSelect({ options, placeholder, onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (val) => {
    setValue(val);
    if (onChange) onChange(val);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        w="full"
        h="50px"
        textAlign="left"
        justifyContent="space-between"
        variant="outline"
        borderColor={'rgba(135, 140, 189, 0.3)'}
        _hover={{ borderColor: 'secondary.400', bg: 'transparent' }}
        borderRadius="md"
        fontSize="14px"
        fontWeight="400"
        bg="transparent"
        color={'secondaryGray.900'}
        opacity={0.8}
        rightIcon={<ChevronDownIcon />}
      >
        {value || placeholder}
      </MenuButton>
      <MenuList w="400px" p={0} borderRadius="6px">
        <MenuOptionGroup type="radio" value={value} onChange={handleChange}>
          {options.map((opt) => (
            <MenuItemOption
              key={opt}
              value={opt}
              borderBottom={'1px solid #BDC7D4B2'}
            >
              <Flex align="center" w="full" p={1}>
                <Text fontSize="14px">{opt}</Text>
              </Flex>
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
