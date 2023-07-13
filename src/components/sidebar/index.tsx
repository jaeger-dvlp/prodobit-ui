import React from 'react';
import { Box } from '@mantine/core';

function Sidebar() {
  return (
    <Box
      className="sidebar"
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        maxWidth: '300px',
        minHeight: '100%',
        flexDirection: 'column',
        padding: theme.spacing.xl,
        backgroundColor: theme.colors.gray[3],
      })}
    >
      Sidebar
    </Box>
  );
}

export default Sidebar;
