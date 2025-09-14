import { useState, useRef } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import BackAction from 'components/common/backAction';
import ExportMenu from 'components/menu/ExportMenu';
import DetailAUdioPlayer from 'components/players/detailAudioPlayer';
import TrimWaveform from 'components/players/trimWaveForm';

export default function AudioTrimPage() {
  return (
    <Box p="24px" minH="100vh" bg="white" borderRadius="12px">
      {/* Header */}
      <Flex align="center" justify="space-between" mb="20px">
        <BackAction title="Audio Trim" />
        <ExportMenu />
      </Flex>

      <DetailAUdioPlayer />

      {/* Trim Section */}
      <TrimWaveform />
    </Box>
  );
}

// Mock formatter
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
