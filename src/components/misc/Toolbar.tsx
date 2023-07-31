import React from 'react';
import { Box } from '@mantine/core';

function ToolbarContainer({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        left: 0,
        bottom: 0,
        zIndex: 20,
        padding: 20,
        width: '100%',
        display: 'flex',
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          gap: 8,
          zIndex: 2,
          padding: 0,
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ToolbarContainer;
