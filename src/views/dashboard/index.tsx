import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

function Dashboard() {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.div}
      sx={(theme) => ({
        width: '100%',
        minHeight: '100%',
        padding: theme.spacing.xl,
        backgroundColor: 'transparent',
        [theme.fn.smallerThan('md')]: {
          borderRadius: 0,
          backgroundColor: '#fff',
        },
      })}
    >
      Dashboard
    </Box>
  );
}

export default Dashboard;
