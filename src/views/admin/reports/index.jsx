import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  VStack,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { useState } from 'react';
import Card from 'components/common/card';
import CalendarStrip from 'components/calendar/calendarStrip';
import { useNavigate } from 'react-router-dom';

export default function ReportsPage() {
  const navigate = useNavigate();
  const [reports] = useState([
    {
      id: 1,
      caseNumber: 'Auto Generated',
      officerId: 'Dummy Location',
      type: 'Assault',
      status: 'Draft',
      date: '6 Aug,25',
    },
    {
      id: 2,
      caseNumber: 'Auto Generated',
      officerId: 'Dummy Location',
      type: 'Assault',
      status: 'Draft',
      date: '6 Aug,25',
    },
    {
      id: 3,
      caseNumber: 'Auto Generated',
      officerId: 'Dummy Location',
      type: 'Assault',
      status: 'Draft',
      date: '6 Aug,25',
    },
  ]);

  return (
    <Card p="24px" minH="100vh">
      {/* Page Title */}
      <HStack w="full" justifyContent="space-between" align="center" mb="16px">
        <Text fontSize="28px" fontWeight="600" color="#012540">
          Reports
        </Text>
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
      </HStack>

      {/* Top Bar - Search */}
      <CalendarStrip />

      {/* Reports Header */}
      <Flex justify="space-between" align="center" mb="12px">
        <Text fontSize="24px" fontWeight="600" color="#012540">
          Reports Generated
        </Text>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="outline"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="6px"
            fontSize="14px"
            fontWeight="500"
            color="gray.700"
            bg="white"
            _hover={{ bg: 'gray.50' }}
            _expanded={{ bg: 'gray.50' }}
            px="16px"
            h="36px"
          >
            Sort By
          </MenuButton>
          <MenuList
            borderRadius="6px"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            py="0"
            minW="150px"
          >
            <MenuItem fontSize="14px" fontWeight="500" py="8px">
              Date
            </MenuItem>
            <MenuItem fontSize="14px" fontWeight="500" py="8px">
              Status
            </MenuItem>
            <MenuItem fontSize="14px" fontWeight="500" py="8px">
              Type
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Reports List */}
      <VStack spacing={4}>
        {reports.map((report) => (
          <Card
            key={report.id}
            cursor="pointer"
            shadow="0 0 27.917px 0 rgba(0, 0, 0, 0.04)"
            onClick={() => navigate('/admin/reports/review')}
          >
            <Flex justify="space-between" align="center" p="16px" w="full">
              <VStack gap={5} align="start">
                <VStack align="start">
                  <Text
                    fontSize="14px"
                    fontWeight={400}
                    opacity={0.6}
                    lineHeight={'11px'}
                  >
                    Auto Generated
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    opacity={0.8}
                    lineHeight={'13px'}
                    color={'#031227'}
                  >
                    Case Number
                  </Text>
                </VStack>
                <VStack align="start">
                  <Text
                    fontSize="14px"
                    fontWeight={400}
                    opacity={0.6}
                    lineHeight={'11px'}
                  >
                    Officer ID
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    opacity={0.8}
                    lineHeight={'13px'}
                    color={'#031227'}
                  >
                    {report.officerId}
                  </Text>
                </VStack>
              </VStack>

              <VStack gap={'2px'} align="end">
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  lineHeight={'18px'}
                  opacity={0.6}
                >
                  {report.status}
                </Text>
                <Text
                  fontSize="18px"
                  fontWeight={400}
                  lineHeight={'13px'}
                  opacity={0.8}
                >
                  {report.type}
                </Text>
                <Text pt={4} fontSize="16px" opacity={0.4} lineHeight={'11px'}>
                  {report.date}
                </Text>
              </VStack>
            </Flex>
          </Card>
        ))}
      </VStack>
    </Card>
  );
}
