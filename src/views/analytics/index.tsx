import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import NavbarWBreadCrumbs from '@/components/layout/navbar/withBreadCrumbs';
import RoutesMap, { RouteMapItem } from '@/routes';

function Analytics() {
  const Route = RoutesMap.find(
    (route: RouteMapItem) => route.path === '/analytics',
  );

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
      <NavbarWBreadCrumbs
        paths={[Route].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
      />
    </Box>
  );
}

export default Analytics;
