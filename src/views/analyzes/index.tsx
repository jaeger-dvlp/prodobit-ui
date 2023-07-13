import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

function Analyzes() {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.div}
      sx={(theme) => ({
        width: '100%',
        minHeight: '100%',
        backgroundColor: '#fff',
        padding: theme.spacing.xl,
      })}
    >
      Analyzes
    </Box>
  );
}

export default Analyzes;
