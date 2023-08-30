import React from 'react';
import { motion } from 'framer-motion';
import { ProdobitAppTheme } from '@/theme';
import { Box, MantineProvider } from '@mantine/core';
import { Outlet, useLocation } from 'react-router-dom';

function PodLayout() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
        <Outlet />
      </Box>
    </MantineProvider>
  );
}

export default PodLayout;
