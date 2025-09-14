import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { BsUpload } from 'react-icons/bs';

const ExportMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <BsUpload />
      </MenuButton>
      <MenuList p={4} borderRadius={'22px'}>
        <MenuItem
          border={'1px solid #012540'}
          borderRadius={'6px'}
          mb={'10px'}
          fontSize="14px"
          fontWeight={500}
          color="#012540"
        >
          <Image src="/FileTxt.png" /> &nbsp; Export as TXT
        </MenuItem>
        <MenuItem
          border={'1px solid #012540'}
          borderRadius={'6px'}
          mb={'10px'}
          fontSize="14px"
          fontWeight={500}
          color="#012540"
        >
          <Image src="/MicrosoftWordLogo.png" /> &nbsp;Export as DOCX
        </MenuItem>
        <MenuItem
          border={'1px solid #012540'}
          borderRadius={'6px'}
          mb={'10px'}
          fontSize="14px"
          fontWeight={500}
          color="#012540"
        >
          <Image src="/email.png" /> &nbsp;Send via Secure Email
        </MenuItem>
        <MenuItem
          border={'1px solid #012540'}
          borderRadius={'6px'}
          mb={'10px'}
          fontSize="14px"
          fontWeight={500}
          color="#012540"
        >
          <Image src="/Queue.png" /> &nbsp;View Audit Log
        </MenuItem>
        <MenuItem
          border={'1px solid #012540'}
          borderRadius={'6px'}
          mb={'10px'}
          fontSize="14px"
          fontWeight={500}
          color="#012540"
        >
          <Image src="/Check.png" /> &nbsp;Mark Reviewed
        </MenuItem>
        <MenuItem
          border={'1px solid #012540'}
          borderRadius={'6px'}
          mb={'10px'}
          fontSize="14px"
          fontWeight={500}
          color="#012540"
        >
          <Image src="/Trash.png" /> &nbsp;Delete Report
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ExportMenu;
