import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import RoutesMap, { RouteMapItem } from '@/routes';
import Navbar from '@/components/layout/Navbar';

function Dashboard() {
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/dashboard');

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

export default Dashboard;
