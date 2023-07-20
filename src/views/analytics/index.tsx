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
        padding: 60,
        width: '100%',
        minHeight: '100%',
        backgroundColor: 'transparent',
        [theme.fn.smallerThan('md')]: {
          padding: 45,
          paddingTop: 80,
        },
      })}
    >
      Analyzes
    </Box>
  );
}

export default Analyzes;
