import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import RoutesMap, { RouteMapItem } from '@/routes';
import { NavbarWBreadCrumbs } from '@/components/layout/navbar';

function AnalyticsGnAnalyticsGeneral() {
  const Route = RoutesMap.find(
    (route: RouteMapItem) => route.path === '/analytics',
  );
  const Route2 = Route?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/analytics/gn-analytics',
  );

  const Route3 = Route2?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/analytics/gn-analytics/general',
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
        paths={[Route, Route2, Route3].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
      />
    </Box>
  );
}

export default AnalyticsGnAnalyticsGeneral;
