import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/app/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';

function Planning() {
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/app/planning');

  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={(theme) => ({
        width: '100%',
        minHeight: '100%',
        padding: 60,
        backgroundColor: 'transparent',
        [theme.fn.smallerThan('md')]: {
          padding: 45,
          paddingTop: 80,
        },
      })}
    >
      <Navbar
        paths={[Route].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
      />
    </Box>
  );
}

export default Planning;
