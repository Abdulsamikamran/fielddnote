import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Card from 'components/common/card';
import React, { useRef, useState } from 'react';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { RiForward10Fill, RiReplay10Fill } from 'react-icons/ri';

const DetailAUdioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleLoaded = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const skip = (sec) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      Math.max(0, audioRef.current.currentTime + sec),
      duration,
    );
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <Card w="full" mb="24px" p="28px" shadow="0 0 60px 0 rgba(0, 0, 0, 0.04)">
      <Flex align="center" justify="space-between" mb="12px">
        <HStack>
          <Box boxSize={'46px'}>
            <Image src="/AudioIcon.png" />
          </Box>
          <VStack align="start" gap={'1px'}>
            <Text
              fontSize="16px"
              lineHeight={'16px'}
              fontWeight="600"
              opacity={0.9}
            >
              IMR-2134_CASE-2025-08-12.wav
            </Text>
            <Text
              fontSize="14px"
              fontWeight={400}
              lineHeight={'14px'}
              opacity={0.4}
            >
              RØDE-001
            </Text>
          </VStack>
        </HStack>
        <Flex align="center" gap="24px" mb="12px">
          <IconButton
            icon={<FaStepBackward />}
            aria-label="Previous"
            variant="ghost"
            color="gray.400"
            fontSize="20px"
            size={'sm'}
          />
          <IconButton
            icon={<RiReplay10Fill />}
            aria-label="Previous"
            variant="ghost"
            color="gray.400"
            fontSize="20px"
            size={'sm'}
          />
          <IconButton
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            aria-label="Play"
            onClick={togglePlay}
            bg="#0D1B2A"
            color="white"
            borderRadius="full"
            fontSize="20px"
            size={'sm'}
            w="48px"
            h="48px"
            _hover={{ bg: '#0A1520' }}
          />
          <IconButton
            icon={<RiForward10Fill />}
            aria-label="Previous"
            variant="ghost"
            color="gray.400"
            fontSize="20px"
            size={'sm'}
          />
          <IconButton
            icon={<FaStepForward />}
            aria-label="Next"
            variant="ghost"
            color="gray.400"
            fontSize="20px"
            size={'sm'}
          />
        </Flex>
      </Flex>

      {/* Audio Player */}
      <Box w="full" mb="24px">
        <Flex align="center" gap={4}>
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoaded}
          />
          <Flex align="center" w="100%" gap="12px">
            <Slider
              flex="1"
              value={progress}
              min={0}
              max={duration || 1}
              onChange={(val) => {
                setProgress(val);
                audioRef.current.currentTime = val;
              }}
              h="20px"
            >
              <SliderTrack bg="gray.200" borderRadius="full">
                <SliderFilledTrack bg="#0D1B2A" h="20px" />
              </SliderTrack>
              <SliderThumb
                boxSize={4}
                bg="#0D1B2A"
                border="3px solid white"
                // _focus={{ boxShadow: '0 0 0 4px rgba(13,27,42,0.3)' }}
              />
            </Slider>
          </Flex>
        </Flex>
        <Flex justify="space-between" w="100%" mt="10px">
          <Text
            fontSize="10px"
            color="#031227"
            fontWeight={500}
            textAlign="left"
          >
            {formatTime(progress)}
          </Text>
          <Text
            fontSize="10px"
            color="#031227"
            fontWeight={500}
            textAlign="right"
          >
            {formatTime(duration)}
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};

export default DetailAUdioPlayer;
