import React from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';
import CategoryList from '@/components/views/items/categories/CategoryList';

// * Mock data
import { MockItemsCategories } from 'mockdata';

function ItemsCategoriesLists() {
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/items');

  const Route2 = Route?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/items/categories',
  );

  const Route3 = Route2?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/items/categories/list',
  );

  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        width: '100%',
        minHeight: '100%',
        padding: 60,
        backgroundColor: 'transparent',
        [t.fn.smallerThan('md')]: {
          padding: 45,
          paddingTop: 80,
        },
      }}
    >
      <Navbar
        paths={[Route, Route2, Route3].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
        withButtons
      />
      <Box
        sx={{
          gap: 140,
          padding: 0,
          width: '100%',
          height: 'auto',
          paddingTop: 60,
          display: 'flex',
          overflow: 'auto',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          [t.fn.smallerThan('md')]: {
            padding: 45,
          },
        }}
      >
        <CategoryList categories={MockItemsCategories} />
      </Box>
    </Box>
  );
}

export default ItemsCategoriesLists;
