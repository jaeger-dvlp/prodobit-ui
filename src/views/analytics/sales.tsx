import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { NavbarWBreadCrumbs } from '@/components/layout/navbar';
import RoutesMap, { RouteMapItem } from '@/routes';

function AnalyticsSales() {
  const Route = RoutesMap.find(
    (route: RouteMapItem) => route.path === '/analytics',
  );
  const Route2 = Route?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/analytics/sales',
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
        paths={[Route, Route2].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
      />
    </Box>
  );
}

export default AnalyticsSales;
