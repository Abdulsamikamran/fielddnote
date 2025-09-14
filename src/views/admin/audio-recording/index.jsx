'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Text,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Button,
  Image,
} from '@chakra-ui/react';
import {
  FaTrash,
  FaPause,
  FaCheck,
  FaPlay,
  FaRegTrashAlt,
} from 'react-icons/fa';
import Card from 'components/common/card';
import BackAction from 'components/common/backAction';
import { IoSettingsOutline } from 'react-icons/io5';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function AudioRecordingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const [time, setTime] = useState(0);
  const [waveform, setWaveform] = useState([]);
  const [sineWave, setSineWave] = useState([]);
  const frameRef = useRef(null);
  const phaseRef = useRef(0);

  // Timer effect (mocked)
  useEffect(() => {
    let interval;
    if (isRecording && !isPaused) {
      interval = setInterval(() => setTime((t) => t + 1), 200);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  // Recording waveform (random bars)
  useEffect(() => {
    if (!isRecording || isPaused) return;
    let interval = setInterval(() => {
      setWaveform((prev) => {
        const newVal = Math.random() * 80 + 20;
        return [...prev.slice(-40), newVal]; // keep last 40
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  useEffect(() => {
    if (isRecording) return;
    const animate = () => {
      phaseRef.current += 0.1; // Slower phase increment for smoother wave
      const points = Array.from({ length: 150 }, (_, i) => {
        const x = (i / 10) * Math.PI; // Increased frequency for less width
        return Math.sin(x + phaseRef.current) * 30 + 30; // Increased amplitude to 30 for more height
      });
      setSineWave(points);
      frameRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameRef.current);
  }, [isRecording]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <Card p="24px">
      <Flex
        gap={5}
        align="center"
        justifyContent="space-between"
        mb="20px"
        position="relative"
      >
        <BackAction title="Audio Recording " />
        <IoSettingsOutline size={24} color="#012540" />
      </Flex>
      <Flex
        gap={5}
        align="center"
        justifyContent="space-between"
        mb="20px"
        position="relative"
      >
        <Text fontSize="16px" fontWeight="600" color="#012540" mb="10px">
          Mic Selection
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
            Phone Mic
          </MenuButton>
          <MenuList>
            <MenuItem>Phone Mic</MenuItem>
            <MenuItem>Phone Mic</MenuItem>
            <MenuItem>Phone Mic</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        h="85vh"
        py={10}
        // maxW="520px"
        // mx="auto"
      >
        {/* Microphone */}
        <Box mb="4">
          <Image src={isRecording ? '/AudioMic.png' : '/AudioRecorder.png'} />
        </Box>

        {/* Timer */}
        {isRecording && (
          <Text fontSize="lg" fontWeight="600" mb="4">
            {formatTime(time)}
          </Text>
        )}

        {/* Waveform */}
        {isRecording ? (
          <Flex
            h="40px"
            align="center"
            gap="3px"
            my={10}
            w={'500px'}
            justify="space-between"
          >
            {waveform.map((val, i) => (
              <Box
                key={i}
                w="6px"
                h={`${val - 20}px`}
                bg={'#012540'}
                borderRadius="2px"
              />
            ))}
          </Flex>
        ) : (
          <Flex
            w="500px"
            h="60px"
            align="center"
            justify="space-between"
            my={10}
            position="relative"
          >
            {/* Draw sine wave as a continuous line with gradient fill */}
            <Box
              position="absolute"
              w="100%"
              h="60px"
              as="svg"
              viewBox="0 0 500 60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: 'rgba(1, 37, 64, 0.75)' }}
                  />
                  <stop offset="100%" style={{ stopColor: '#012540' }} />
                </linearGradient>
              </defs>
              <path
                d={`M 0 30 ${sineWave
                  .map((y, i) => `${i * (500 / 149)} ${60 - y}`) // Adjust for 150 points
                  .join(' L ')} L 500 30 Z`}
                fill="url(#waveGradient)"
                stroke="#012540"
                strokeWidth="0.868"
              />
            </Box>
          </Flex>
        )}

        {/* Controls */}
        {isRecording ? (
          <HStack gap={8} mt={10}>
            <IconButton
              aria-label="Delete"
              color={'#CCC'}
              icon={<FaRegTrashAlt size={30} />}
              onClick={() => {
                setIsRecording(false);
                setIsPaused(false);
                setTime(0);
                setWaveform([]);
              }}
            />
            <IconButton
              w={'72px'}
              h={'72px'}
              rounded={'full'}
              bg="#012540"
              color={'white'}
              aria-label={isPaused ? 'Play' : 'Pause'}
              icon={isPaused ? <FaPlay size={24} /> : <FaPause size={24} />}
              onClick={() => setIsPaused((prev) => !prev)}
            />
            <IconButton
              aria-label="Done"
              color={'#CCC'}
              icon={<FaCheck size={30} />}
              onClick={() =>
                navigate('/admin/audio-recording/audio-recording-trim')
              }
            />
          </HStack>
        ) : (
          <Box
            w="60px"
            h="60px"
            borderRadius="full"
            bg="red.500"
            cursor="pointer"
            onClick={() => setIsRecording(true)}
          />
        )}
      </Flex>
    </Card>
  );
}
