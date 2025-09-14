'use client';

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Button,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import BackAction from 'components/common/backAction';
import Card from 'components/common/card';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { RiForward10Fill, RiReplay10Fill } from 'react-icons/ri';
import { BsUpload } from 'react-icons/bs';
import ExportMenu from 'components/menu/ExportMenu';
import DetailAUdioPlayer from 'components/players/detailAudioPlayer';

export default function AudioClipDetails() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Card p="24px" minH="100vh" borderRadius="12px">
      {/* Back + Title */}
      <Flex
        gap={5}
        align="center"
        justifyContent="space-between"
        mb="20px"
        position="relative"
      >
        <BackAction title="Audio Clip Details" />
        <ExportMenu />
      </Flex>

      {/* File Row */}
      <DetailAUdioPlayer />

      {/* Report Details */}
      <Card
        p="16px"
        mb="16px"
        shadow="0 10px 60px 0 rgba(0, 0, 0, 0.06)"
        borderRadius="30px 12px 2px 12px"
      >
        <Text fontSize="18px" fontWeight="500" color="#012540" mb="10px">
          Report Details
        </Text>
        <VStack gap={3} align="stretch">
          <Flex justify="space-between">
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              File
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              DummyID123
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              Date & Time
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              12:39 PM - 10 Aug 2025
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              Location
            </Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              DummyLocation123
            </Text>
          </Flex>
          <Flex
            direction="column"
            gap={4}
            justify="space-between"
            fontSize="14px"
          >
            <Text
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              Case Number
            </Text>
            <Text
              py={4}
              px={5}
              borderRadius="6px"
              bg="rgba(189, 198, 212, 0.20)"
              fontSize="16px"
              fontWeight={400}
              lineHeight="14px"
              opacity={0.7}
            >
              Dummy123
            </Text>
          </Flex>
        </VStack>
        {/* Incident Report */}
        <Flex justify="space-between" align="center" mb="8px">
          <Text
            fontSize="18px"
            fontWeight="500"
            color="#012540"
            py={4}
            opacity={0.7}
          >
            Incident Report – Draft
          </Text>
          <Button
            size="xs"
            variant="link"
            fontSize="16px"
            color="#7E9ACD"
            fontWeight="500"
          >
            Edit
          </Button>
        </Flex>

        <Box border="0.8px solid #BDC7D4" p={5} borderRadius={'6px'}>
          <VStack align="start" spacing={3}>
            <Box>
              <Text
                fontSize="16px"
                fontWeight="700"
                opacity={0.7}
                lineHeight={'19px'}
                color="#012540"
              >
                Incident Summary
              </Text>
              <Text
                py={1}
                fontSize="16px"
                fontWeight="400"
                opacity={0.7}
                lineHeight={'19px'}
                color="#012540"
              >
                On 12 August 2025 at approximately 14:48 UTC, Officer Imran Khan
                responded to a call at 221B Baker St. Upon arrival...
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="16px"
                fontWeight="700"
                opacity={0.7}
                lineHeight={'19px'}
                color="#012540"
              >
                Observations
              </Text>
              <Text
                py={1}
                fontSize="16px"
                fontWeight="400"
                opacity={0.7}
                lineHeight={'19px'}
                color="#012540"
              >
                Subject appeared calm but uncooperative during questioning...
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="16px"
                fontWeight="700"
                opacity={0.7}
                lineHeight={'19px'}
                color="#012540"
              >
                Actions Taken
              </Text>
              <Text
                py={1}
                fontSize="16px"
                fontWeight="400"
                opacity={0.7}
                lineHeight={'19px'}
                color="#012540"
              >
                Verbal warning issued. Incident documented and forwarded to
                supervisor.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Card>
    </Card>
  );
}
