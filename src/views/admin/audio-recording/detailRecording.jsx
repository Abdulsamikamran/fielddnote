'use client';

import { useState, useRef } from 'react';
import { Box, Flex, Text, IconButton, VStack, Button } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';
import AudioPlayer from 'components/players/audioPlayer';
import TimestampList from 'components/misc/TimeStampList';
import { PiScissorsFill } from 'react-icons/pi';
import SuccessModal from 'components/modals/successModal';
import PairedDeviceModal from 'components/modals/pairedDevicesModal';

export default function DetailRecordingPage() {
  const [markerPos, setMarkerPos] = useState(200);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeviceOpen, setIsDeviceOpen] = useState(false);
  const waveformRef = useRef(null);
  const duration = 240; // 4 minutes total
  const bars = Array.from({ length: 140 }, () => Math.random() * 80 + 10);

  // Format mm:ss
  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(1, '0');
    const sec = String(Math.floor(s % 60)).padStart(2, '0');
    return `${m}:${sec}`;
  };

  // Mouse drag logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = waveformRef.current.getBoundingClientRect();

    const move = (ev) => {
      let newPos = ev.clientX - container.left;
      if (newPos < 0) newPos = 0;
      if (newPos > container.width) newPos = container.width;
      setMarkerPos(newPos);
    };

    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  // Calculate current time from marker position
  const currentTime = (markerPos / 500) * duration;

  return (
    <Card p="24px">
      {/* Header */}
      <Flex align="center" mb="20px" justify="space-between">
        <BackAction title="Detail Recording" />
        <IconButton
          aria-label="Close"
          icon={<PiScissorsFill />}
          variant="outline"
          borderRadius={'12px'}
          p="-2"
          size="sm"
        />
      </Flex>

      {/* Waveform timeline */}
      <Box
        mt={'60px'}
        ref={waveformRef}
        position="relative"
        w="full"
        h="120px"
        mb="40px"
        borderTop="1px solid #E7E3E3"
      >
        <Flex
          position="absolute"
          bottom="0"
          h="80px"
          w="100%"
          align="end"
          gap="6px"
        >
          {bars.map((h, i) => {
            const barX = (i / bars.length) * 500; // position in px
            return (
              <Box
                key={i}
                w="6px"
                h={`${h}px`}
                bg={barX <= markerPos ? '#012540' : 'rgba(1,37,64,0.25)'}
                borderRadius="2px"
              />
            );
          })}
        </Flex>

        {/* Marker */}
        <Box
          position="absolute"
          top="-10"
          left={`${markerPos}px`}
          transform="translateX(-50%)"
          cursor="ew-resize"
          onMouseDown={handleMouseDown}
        >
          {/* Time Label */}
          <Text
            mb="2"
            px="16px"
            py="2px"
            borderRadius="20px"
            bg="#012540"
            color="white"
            fontSize="12px"
            textAlign="center"
          >
            {formatTime(currentTime)}
          </Text>

          {/* Vertical line */}
          <Box w="5px" h="140px" bg="#012540" mx="auto" />

          {/* Bottom handle with 3 dots */}
          <Flex
            mt="2"
            bg="#012540"
            borderRadius="20px"
            px="6px"
            py="2px"
            justify="center"
            gap="2px"
          >
            <Box w="4px" h="4px" bg="white" borderRadius="full" />
            <Box w="4px" h="4px" bg="white" borderRadius="full" />
            <Box w="4px" h="4px" bg="white" borderRadius="full" />
          </Flex>
        </Box>
      </Box>

      {/* Footer button */}
      <TimestampList
        timestamps={[
          '00:00:45',
          '00:00:59',
          '00:01:43',
          '00:02:45',
          '00:03:32',
          '00:04:28',
        ]}
        onDelete={(i) => console.log('delete', i)}
      />
      <Card p="16px" shadow="0 1.736px 41.658px 0 rgba(0, 0, 0, 0.04)">
        <AudioPlayer />
      </Card>
      <Flex w="full" justify="center" my={6}>
        <Button w="full" variant={'brand'} onClick={() => setIsOpen(true)}>
          View Detail Recording
        </Button>
      </Flex>
      <SuccessModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsDeviceOpen(true);
        }}
      />
      <PairedDeviceModal
        isOpen={isDeviceOpen}
        onClose={() => setIsDeviceOpen(false)}
      />
    </Card>
  );
}
