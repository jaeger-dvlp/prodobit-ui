import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/sidebar';
import { ProdobitAppTheme } from '@/theme';
import { Box, MantineProvider } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  sidebar?: boolean;
};

function AppLayout({ sidebar = false }: Props) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={ProdobitAppTheme}>
      <Box
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
        }}
        exit="exit"
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.2,
        }}
        className="app"
        component={motion.main}
        sx={(theme) => ({
          width: '100%',
          display: 'flex',
          minHeight: '100vh',
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'start',
          backgroundImage: theme.fn.gradient({
            from: '#E6EDEB',
            to: '#FEEDEE',
            deg: 130,
          }),
        })}
      >
        {sidebar && (
          <AnimatePresence>
            <Sidebar />
          </AnimatePresence>
        )}
        <Outlet />
      </Box>
    </MantineProvider>
  );
}

export default AppLayout;
