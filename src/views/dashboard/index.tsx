import React from 'react';
import { Box } from '@mantine/core';

function Dashboard() {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        minHeight: '100%',
        padding: theme.spacing.xl,
        backgroundColor: theme.colors.gray[4],
      })}
    >
      Dashboard
    </Box>
  );
}

export default Dashboard;
