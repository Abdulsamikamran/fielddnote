'use client';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import BackAction from 'components/common/backAction';
import Card from 'components/common/card';
import ExportMenu from 'components/menu/ExportMenu';
import DetailAUdioPlayer from 'components/players/detailAudioPlayer';
import TrimWaveform from 'components/players/trimWaveForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AudioSettingPage() {
  const [isViewDetail, setIsViewDetail] = useState(false);
  const navigate = useNavigate();
  return (
    <Card p="24px" bg="white" minH="75vh" borderRadius="12px">
      {/* Header */}
      <Flex align="center" justify="space-between" mb="20px">
        <BackAction title="Audio Trim" />
        <ExportMenu />
      </Flex>

      <DetailAUdioPlayer />

      {/* Trim Section */}
      {isViewDetail ? (
        <Flex w="full" justify="center" py={'50px'}>
          <Button
            w="full"
            variant={'brand'}
            onClick={() => navigate('/admin/audio-recording/detail-recording')}
          >
            View Detail Recording
          </Button>
        </Flex>
      ) : (
        <TrimWaveform onClose={() => setIsViewDetail(true)} />
      )}
    </Card>
  );
}

// Mock formatter
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
