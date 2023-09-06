import React from 'react';
import { ProdobitAppTheme } from '@/theme';
import { Box, MantineProvider } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Outlet,
  // useLocation
} from 'react-router-dom';

function PodLayout() {
  // const { pathname } = useLocation();

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={ProdobitAppTheme}>
      <AnimatePresence mode="popLayout">
        <Box
          className="app"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          component={motion.main}
          transition={{
            duration: 0.5,
          }}
          sx={{
            zIndex: 3,
            display: 'flex',
            minWidth: '100%',
            minHeight: '100vh',
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'start',
            backgroundColor: '#fff',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'left bottom',
            backgroundImage: 'url(/assets/img/layout/pod-bg.webp)',
          }}
        >
          <Outlet />
        </Box>
      </AnimatePresence>
    </MantineProvider>
  );
}

export default PodLayout;
