import { AnimatePresence, motion } from 'framer-motion';
import { Box, Loader as LoadingCircle } from '@mantine/core';

function Loader() {
  return (
    <AnimatePresence>
      <Box
        key="app-loader"
        component={motion.div}
        exit={{ opacity: 0, scale: 1.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={(theme) => ({
          top: 0,
          left: 0,
          zIndex: 1000,
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.gray[2],
        })}
      >
        <LoadingCircle color="foundationgreen.9" />
      </Box>
    </AnimatePresence>
  );
}

export default Loader;
