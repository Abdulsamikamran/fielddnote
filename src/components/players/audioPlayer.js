import {
  Box,
  Flex,
  IconButton,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { RiForward10Fill, RiReplay10Fill } from 'react-icons/ri';

export default function AudioPlayer() {
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
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  return (
    <Flex
      direction="column"
      align="center"
      mt="24px"
      w="100%"
      bg="white"
      borderRadius="12px"
      p="16px"
    >
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // mock url
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Controls */}
      <Flex align="center" gap="24px" mb="12px">
        <IconButton
          icon={<FaStepBackward />}
          aria-label="Previous"
          variant="ghost"
          color="gray.400"
          fontSize="20px"
        />
        <IconButton
          icon={<RiReplay10Fill />}
          aria-label="Previous"
          variant="ghost"
          color="gray.400"
          fontSize="20px"
        />
        <IconButton
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          aria-label="Play"
          onClick={togglePlay}
          bg="#0D1B2A"
          color="white"
          borderRadius="full"
          fontSize="20px"
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
        />
        <IconButton
          icon={<FaStepForward />}
          aria-label="Next"
          variant="ghost"
          color="gray.400"
          fontSize="20px"
        />
      </Flex>

      {/* Timeline */}
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
      <Flex justify="space-between" w="100%" mt="20px">
        <Text fontSize="10px" color="#031227" fontWeight={500} textAlign="left">
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
    </Flex>
  );
}

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '00:00';
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0',
  )}`;
}
