import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Button,
  Grid,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { MdMusicNote, MdPause, MdPlayArrow } from 'react-icons/md';
import { FiScissors, FiMic, FiMoreHorizontal } from 'react-icons/fi';
import BackAction from 'components/common/backAction';
import Card from 'components/common/card';
import { FaMusic } from 'react-icons/fa';
import { PiCreditCardFill, PiScissorsFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export default function AudioFilesPage() {
  const audioFiles = [
    {
      id: 1,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case # 68971 | Officer: IMR-2134',
      date: '2025-08-12 14:56 UTC',
      duration: '00:08:14',
      device: 'RODE-001',
      status: 'Unreviewed',
      playing: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case # 68971 | Officer: IMR-2134',
      date: '2025-08-12 14:56 UTC',
      duration: '00:08:14',
      device: 'RODE-001',
      status: 'Reviewed',
      playing: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case # 68971 | Officer: IMR-2134',
      date: '2025-08-12 14:56 UTC',
      duration: '00:08:14',
      device: 'RODE-001',
      status: 'Reviewed',
      playing: false,
    },
    {
      id: 4,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case # 68971 | Officer: IMR-2134',
      date: '2025-08-12 14:56 UTC',
      duration: '00:08:14',
      device: 'RODE-001',
      status: 'Unreviewed',
      playing: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case # 68971 | Officer: IMR-2134',
      date: '2025-08-12 14:56 UTC',
      duration: '00:08:14',
      device: 'RODE-001',
      status: 'Reviewed',
      playing: false,
    },
    {
      id: 6,
      name: 'IMR-2134_CASE-09122025.wav',
      case: 'Case # 68971 | Officer: IMR-2134',
      date: '2025-08-12 14:56 UTC',
      duration: '00:08:14',
      device: 'RODE-001',
      status: 'Reviewed',
      playing: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <Card p="24px" minH="100vh" borderRadius="12px">
      {/* Header */}
      <Flex direction="column" gap={5} align="start" mb="20px">
        <BackAction title="Audio Files" />
        <Text
          fontSize="14px"
          lineHeight={'14px'}
          fontWeight="400"
          opacity={0.5}
        >
          ALL AUDIO REPORTS
        </Text>
      </Flex>

      {/* Audio Grid */}
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap={6}
      >
        {audioFiles.map((file) => (
          <AudioCard key={file.id} file={file} />
        ))}
      </Grid>
    </Card>
  );
}

function AudioCard({ file }) {
  const navigate = useNavigate();

  const isPlaying = file.playing;

  return (
    <Box
      bg="#F7F9FA"
      borderRadius="12px"
      p="16px"
      shadow="sm"
      border="1px solid #EDF2F7"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Top Row */}
      <Flex justify="space-between" align="start" mb="8px">
        <HStack align="start" spacing={3}>
          <Box
            w="42px"
            h="42px"
            borderRadius="10px"
            color="#012540"
            bg="#E2E8F0"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {isPlaying ? <MdPause size={20} /> : <FaMusic size={20} />}
          </Box>
          <VStack align="start">
            <Text
              fontSize="12px"
              lineHeight={'12px'}
              fontWeight="500"
              opacity={0.8}
              mb={'2px'}
            >
              {file.name}
            </Text>
            <Text fontSize="10px" fontWeight="500">
              {file.case}
            </Text>
            <Text fontSize="10px" opacity={0.4}>
              {file.date} · {file.duration} · {file.device}
            </Text>
          </VStack>
        </HStack>

        <VStack>
          {!isPlaying ? (
            <Text
              fontSize="12px"
              fontWeight="500"
              color={file.status === 'Reviewed' ? '#71AB51' : '#EE2E2E'}
            >
              {file.status}&nbsp;
              {file.status === 'Reviewed' ? ' ✅' : ' 🔴'}
            </Text>
          ) : (
            <Button
              // as="button"
              size={'sm'}
              p={'0px'}
              // py={0}
              borderRadius="12px"
              border="2px solid #012540B2"
              ml="8px"
            >
              <PiScissorsFill />
            </Button>
          )}
        </VStack>
      </Flex>

      <Divider borderColor="#BDC7D4" />

      {/* Middle Section */}
      {/* {isPlaying && file.description && (
        <Text fontSize="12px" color="gray.600" mt="6px" mb="8px">
          {file.description}
        </Text>
      )} */}

      {/* Controls */}
      <Flex justify="space-between" align="center" mt="auto" gap={2}>
        {!isPlaying ? (
          <>
            <Button
              leftIcon={<MdPlayArrow />}
              variant="brand"
              size="sm"
              borderRadius="full"
              flex={1}
              _hover={{ bg: '#02365E' }}
            >
              {file.playing ? 'Resume' : 'Play'}
            </Button>
            <Button
              leftIcon={<FiScissors />}
              variant="brand"
              size="sm"
              borderRadius="full"
              flex={1}
              onClick={() => navigate('/admin/file-manager/audio-files/trim')}
            >
              Trim
            </Button>
            <Button
              leftIcon={<FiMic />}
              variant="brand"
              size="sm"
              borderRadius="full"
              flex={1}
              onClick={() =>
                navigate('/admin/file-manager/audio-files/transcribe')
              }
            >
              Transcribe
            </Button>
          </>
        ) : (
          <>
            <Flex w="full" justify="center" align={'center'} gap={2} pl={4}>
              <Text fontSize="10px" color="#000" mt="6px" mb="8px">
                {file.description}
              </Text>
              <Button
                // as="button"
                size={'sm'}
                bg="gray.100"
                p={'2px'}
                py={0}
                borderRadius="12px"
                border="2px solid #012540B2"
                ml="8px"
                onClick={() =>
                  navigate('/admin/file-manager/audio-files/audio-details')
                }
              >
                <PiCreditCardFill />
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
}
