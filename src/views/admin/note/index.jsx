import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import BackAction from 'components/common/backAction';
import Card from 'components/common/card';
import ConversationBubble from 'components/common/conversationBubble';
import AudioPlayer from 'components/players/audioPlayer';
import { useState } from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import AiReport from 'components/dashboard/aiReports';
import { IoSend } from 'react-icons/io5';
import { LuMic } from 'react-icons/lu';

export default function NotePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [note, setNote] = useState('');

  return (
    <Card
      px="24px"
      py="20px"
      minH="90vh"
      position="relative"
      overflowX={'hidden'}
    >
      {/* Back & Title */}
      <Flex w="full" justifyContent="space-between" align="center">
        <BackAction title="Note" />
        <IconButton
          icon={<RiUserAddLine color={'#0B1E42'} />}
          aria-label="Back"
          variant="ghost"
          fontSize={'20px'}
        />
      </Flex>

      {/* Tabs */}
      <Flex w="100%" justify="center" align="center" mb="14px">
        <TabsNav
          tabs={['Conversations', 'AI Report', 'Takeaways']}
          active={activeTab}
          onChange={setActiveTab}
        />
      </Flex>

      {activeTab === 0 && (
        <>
          <ConversationBubble />
          <Box mt="40px">
            <AudioPlayer />
          </Box>
        </>
      )}

      {activeTab === 1 && <AiReport />}
      {activeTab === 2 && (
        <Flex direction="column" flex="1" mt={'60px'}>
          <Flex
            flex="1"
            direction="column"
            align="center"
            justify="center"
            maxW={'390px'}
            mx={'auto'}
          >
            {/* Illustration */}
            <Image
              src="/takeaway.png" // place exported asset in /public
              alt="Takeaways"
              //   maxW="300px"
              mb="12px"
            />
            <Text
              fontSize="18px"
              fontWeight={400}
              opacity={0.4}
              textAlign="left"
            >
              Highlight important notes, or type a note below to get started
            </Text>
          </Flex>

          {/* Input fixed at bottom */}
          <Box
            w="100%"
            maxW="98%"
            mt="auto"
            position={'absolute'}
            bottom={0}
            px={4}
            overflowX={'hidden'}
            py={4}
          >
            <InputGroup>
              <Input
                placeholder="Type a note"
                borderRadius="8px"
                variant={'subtle'}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                fontSize="22px"
                bg="white"
                border="none"
                outline={'none'}
                p={8}
                shadow={'0 4px 40px 0 rgba(0, 0, 0, 0.06)'}
                _focus={{
                  outline: '1px solid #e0e0e0',
                  border: 'none',
                }}
              />
              <InputRightElement mr={14} mt={3}>
                <Flex w="full" gap={1}>
                  <IconButton
                    aria-label="Voice Note"
                    icon={<LuMic />}
                    fontSize={'20px'}
                    variant="ghost"
                    color="#012540"
                  />
                  <IconButton
                    aria-label="Voice Note"
                    icon={<IoSend />}
                    variant="ghost"
                    fontSize={'20px'}
                    color="#012540"
                  />
                </Flex>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      )}
    </Card>
  );
}

function TabsNav({ tabs, active, onChange }) {
  return (
    <HStack
      gap="30px"
      maxW={'560px'}
      width={'100%'}
      mb="24px"
      bg="#EDF1F4"
      p="10px"
      borderRadius="full"
      justifyContent="space-between"
    >
      {tabs.map((tab, i) => (
        <Button
          key={i}
          onClick={() => onChange(i)}
          variant="brand"
          px={5}
          py={3}
          borderRadius="full"
          bg={active === i ? '#012540' : 'transparent'}
          color={active === i ? 'white' : '#031227'}
          opacity={active === i ? 1 : 0.7}
          fontWeight="500"
          fontSize={'18px'}
          boxShadow={active === i ? 'sm' : 'none'}
          _hover={{ bg: active === i ? '#012540' : 'gray.100' }}
        >
          {tab}
        </Button>
      ))}
    </HStack>
  );
}
