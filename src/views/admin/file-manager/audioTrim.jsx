// import { Box, Flex, Text } from '@chakra-ui/react';
// import DetailAUdioPlayer from 'components/players/detailAudioPlayer';
// import BackAction from 'components/common/backAction';
// import ExportMenu from 'components/menu/ExportMenu';

// export default function AudioTrimPage() {
//   return (
//     <Box p="24px" minH="100vh" bg="white" borderRadius="12px">
//       {/* Header */}
//       <Flex align="center" justify="space-between" mb="20px">
//         <BackAction title="Audio Trim" />
//         <ExportMenu />
//       </Flex>
//       <DetailAUdioPlayer />
//       <Box bg="#F7FAFC" borderRadius="8px" p="16px" border="1px solid #E2E8F0">
//         <Flex justify="space-between" align="center" mb="12px">
//           <Text fontSize="14px" fontWeight="600" color="#012540">
//             Trim
//           </Text>
//           <Text fontSize="12px" color="gray.500">
//             TOTAL 1:28:25
//           </Text>
//         </Flex>

//         {/* Mock waveform */}
//         <Box
//           bg="white"
//           border="1px solid #CBD5E0"
//           borderRadius="6px"
//           h="100px"
//           position="relative"
//           p="8px"
//         >
//           <Flex align="end" gap="2px" h="100%">
//             {Array.from({ length: 50 }).map((_, i) => (
//               <Box
//                 key={i}
//                 w="4px"
//                 h={`${Math.random() * 80 + 10}px`}
//                 bg={i > 10 && i < 40 ? '#012540' : '#CBD5E0'}
//                 borderRadius="2px"
//               />
//             ))}
//           </Flex>

//           {/* Trimming handles */}
//           <Box
//             position="absolute"
//             left="20%"
//             top="0"
//             bottom="0"
//             w="3px"
//             bg="#012540"
//             cursor="col-resize"
//           />
//           <Box
//             position="absolute"
//             left="70%"
//             top="0"
//             bottom="0"
//             w="3px"
//             bg="#012540"
//             cursor="col-resize"
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// }

'use client';

import { useState, useRef } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import BackAction from 'components/common/backAction';
import ExportMenu from 'components/menu/ExportMenu';
import DetailAUdioPlayer from 'components/players/detailAudioPlayer';
import TrimWaveform from 'components/players/trimWaveForm';

export default function AudioTrimPage() {
  const [start, setStart] = useState(20); // %
  const [end, setEnd] = useState(70); // %
  const dragging = useRef(null);

  const handleMouseDown = (handle) => {
    dragging.current = handle;
  };

  const handleMouseUp = () => {
    dragging.current = null;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;

    if (dragging.current === 'start' && percent < end - 5) {
      setStart(Math.max(0, Math.min(percent, 95)));
    } else if (dragging.current === 'end' && percent > start + 5) {
      setEnd(Math.min(100, Math.max(percent, 5)));
    }
  };

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
