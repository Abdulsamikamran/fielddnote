'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text, IconButton, HStack, Divider } from '@chakra-ui/react';
import { FiX, FiRotateCcw, FiCheck } from 'react-icons/fi';
import { CiEdit } from 'react-icons/ci';
import { FaMusic } from 'react-icons/fa';
import { IoMusicalNoteSharp } from 'react-icons/io5';

export default function TrimWaveform() {
  const [audioData, setAudioData] = useState([]);
  const [duration, setDuration] = useState(0);
  const [region, setRegion] = useState({ start: 10, end: 40 });
  const [isTrimming, setIsTrimming] = useState(true);
  const containerRef = useRef(null);

  const BAR_WIDTH = 12; // 👈 fixed bar width
  const BAR_GAP = 4; // optional spacing

  // ====== Decode audio + generate bar heights ======
  useEffect(() => {
    const fetchAudio = async () => {
      const resp = await fetch('/testAudio.mp3');
      const arrayBuffer = await resp.arrayBuffer();
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      setDuration(audioBuffer.duration);

      const rawData = audioBuffer.getChannelData(0); // first channel

      // calculate number of bars to fit container
      const containerWidth = containerRef.current?.offsetWidth || 1000;
      const samples = Math.floor(containerWidth / (BAR_WIDTH + BAR_GAP));

      const blockSize = Math.floor(rawData.length / samples);
      const filtered = [];

      for (let i = 0; i < samples; i++) {
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(rawData[i * blockSize + j]);
        }
        filtered.push(sum / blockSize);
      }

      // normalize values
      const multiplier = Math.max(...filtered) ** -1;
      const normalized = filtered.map((n) => n * multiplier);
      setAudioData(normalized);
    };

    fetchAudio();
  }, []);

  // ====== Drag logic ======
  const startDrag = (side, e) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();

    const onMove = (ev) => {
      const posX = ev.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, posX / rect.width));
      const duration = 90; // fake duration, replace with real audio duration

      if (side === 'start') {
        setRegion((r) => ({
          ...r,
          start: Math.min(r.end - 1, percent * duration),
        }));
      } else {
        setRegion((r) => ({
          ...r,
          end: Math.max(r.start + 1, percent * duration),
        }));
      }
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // ====== Actions ======
  const handleCancel = () => setIsTrimming(false);
  const handleConfirm = () => setIsTrimming(false);
  const handleReset = () => setRegion({ start: 10, end: 40 });
  const handleEditTrim = () => setIsTrimming(true);

  return (
    <Box bg="#ebeef0" borderRadius="8px" py="16px" border="1px solid #E2E8F0">
      {/* Header */}
      <Flex
        gap={3}
        justifyContent="space-between"
        w="full"
        mb="2px"
        align="center"
        px="16px"
      >
        {isTrimming ? (
          <>
            <HStack>
              <IconButton
                aria-label="Cancel"
                icon={<FiX />}
                size="sm"
                variant="ghost"
                onClick={handleCancel}
              />
              <IconButton
                aria-label="Reset"
                icon={<FiRotateCcw />}
                size="sm"
                variant="ghost"
                onClick={handleReset}
              />
            </HStack>
            <Text fontSize="14px" fontWeight="600" color="#012540">
              Trim
            </Text>
            <IconButton
              aria-label="Confirm"
              icon={<FiCheck />}
              size="sm"
              variant="ghost"
              onClick={handleConfirm}
            />
          </>
        ) : (
          <>
            <Text color="#A8D9F1" fontSize="12px" fontWeight="500">
              0:51.7s
            </Text>
            <HStack>
              <IconButton
                aria-label="Reset"
                icon={<CiEdit />}
                size="sm"
                variant="ghost"
                onClick={handleEditTrim}
              />
              <Text
                color="#59717D"
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
              >
                Total 1:21.2s
              </Text>
            </HStack>
          </>
        )}
      </Flex>
      <Divider borderColor={'#1B1C1E'} mb="10px" />

      {/* Waveform Timeline */}
      {isTrimming ? (
        <Box
          ref={containerRef}
          pos="relative"
          w="full"
          maxW="1400px"
          h="60px"
          mx="auto"
          my="40px"
          border="1px solid #CBD5E0"
          borderRadius="6px"
          overflow="hidden"
          display="flex"
          alignItems="flex-end"
          bg="linear-gradient(to top, rgba(1,37,64,0.7) 23%, rgba(1,37,64,0.2) 100%)"
        >
          <Flex align="end" h="100%" w="full" gap={`${BAR_GAP}px`}>
            {audioData.map((val, i) => (
              <Box
                key={i}
                w={`${BAR_WIDTH}px`}
                h={`${val * 100 - 20}%`}
                bg="#012540"
                borderRadius="2px"
              />
            ))}
          </Flex>

          {isTrimming && (
            <Box
              pos="absolute"
              top={0}
              bottom={0}
              left={`${(region.start / 90) * 100}%`}
              width={`${((region.end - region.start) / 90) * 100}%`}
              bg="linear-gradient(to top, #0E0E1180 0%, rgba(14,14,17,0.5) 100%)"
              border="3px solid #012540"
              borderRadius="6px"
            >
              <Box
                pos="absolute"
                left="-4"
                top="0"
                bottom="0"
                w="14px"
                h="40px"
                my={'auto'}
                bg="white"
                display="flex"
                borderRadius={'2px'}
                alignItems="center"
                justifyContent="center"
                cursor="ew-resize"
                onMouseDown={(e) => startDrag('start', e)}
              >
                <Text color="#012540" fontSize={'20px'} fontWeight="bold">
                  ‹
                </Text>
              </Box>

              <Box
                pos="absolute"
                right="-4"
                top="0"
                bottom="0"
                w="14px"
                h="40px"
                my={'auto'}
                bg="white"
                borderRadius={'2px'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="ew-resize"
                onMouseDown={(e) => startDrag('end', e)}
              >
                <Text color="#000000ff" fontSize={'20px'} fontWeight="bold">
                  ›
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <Box w="full" px="20px" overflow={'hidden'}>
          {/* Timeline with total duration */}
          <Flex justify="space-between" align="center" mb="8px">
            <Flex gap="34px" fontSize="11px" color="gray.600">
              {Array.from({ length: Math.floor(duration / 2) }).map((_, i) => (
                <Text key={i}>00:{String(i * 2).padStart(2, '0')}</Text>
              ))}
            </Flex>
            <Text fontSize="11px" fontWeight="500" color="gray.700">
              TOTAL {new Date(duration * 1000).toISOString().substr(14, 5)}
            </Text>
          </Flex>

          {/* Thumbnails row */}
          <Flex gap="2" mb="12px" wrap="nowrap" overflow={'hidden'} flex={1}>
            {Array.from({ length: Math.floor(duration / 18) }).map((_, i) => (
              <Box
                flex={1}
                key={i}
                w="48px"
                h="48px"
                bg="#d4dade"
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaMusic color="#012540" fontSize={'24px'} />
              </Box>
            ))}
          </Flex>

          {/* Waveform strip with overlay */}
          <Box
            ref={containerRef}
            pos="relative"
            w="full"
            h="40px"
            mx="auto"
            my="10px"
            border="1px solid #CBD5E0"
            borderRadius="6px"
            overflow="hidden"
            display="flex"
            alignItems="flex-end"
            bg="#282C43"
            opacity={0.8}
          >
            <Box
              pos="absolute"
              top="0"
              left="0"
              px="8px"
              py="8px"
              bg="rgba(40,44,67,0.9)"
              borderBottomRightRadius="6px"
              display="flex"
              alignItems="center"
              zIndex={2}
            >
              <HStack spacing={2}>
                <IoMusicalNoteSharp color="#A8D9F1" size={14} />
                <Text color="#A8D9F1" fontSize="12px" fontWeight="500">
                  Audio Clip
                </Text>
              </HStack>
            </Box>

            <Flex align="end" h="100%" w="full" gap={`${BAR_GAP}px`}>
              {audioData.map((val, i) => (
                <Box
                  key={i}
                  w={`${BAR_WIDTH}px`}
                  h={`${val * 100 - 20}%`}
                  bg="#012540"
                  borderRadius="2px"
                />
              ))}
            </Flex>

            <Box
              pos="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              bg="rgba(1,37,64,0.15)"
              pointerEvents="none"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
