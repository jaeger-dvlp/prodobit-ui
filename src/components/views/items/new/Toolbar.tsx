import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

function NewItemToolbar({ children }: Props) {
  return (
    <Box
      component={motion.aside}
      exit={{
        y: 20,
        opacity: 0,
        transition: {
          delay: 0,
          duration: 0.5,
          ease: 'anticipate',
        },
      }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'anticipate', delay: 0.6 }}
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
        button: {
          height: 'auto',
          display: 'flex',
          fontSize: '22px',
          fontWeight: 300,
          borderRadius: 100,
          padding: '15px 30px',
          lineHeight: '26.4px',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s ease-in-out',
          '> div > span': {
            gap: 15,
            padding: 0,
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            '> svg': {
              width: 24,
              height: 24,
            },
          },
        },
      }}
    >
      <Box
        sx={{
          gap: 5,
          display: 'flex',
          borderRadius: 100,
          padding: '13px 15px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          marginBottom: 30,
          boxShadow: ' 0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default NewItemToolbar;
