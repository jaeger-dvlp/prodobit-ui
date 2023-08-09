import React from 'react';
import { MockItems } from 'mockdata';
import { motion } from 'framer-motion';
import DevMode from '@/components/misc/DevMode';
import { Box, Button, Text } from '@mantine/core';
import NoItemsView from '@/views/items/list/NoItems';
import WithItemsView from '@/views/items/list/WithItems';
import RoutesMap, { RouteMapItem } from '@/routes';

function ItemsList() {
  const [items, setItems] = React.useState(MockItems);
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/items');
  const Route2 = Route?.subRoutes?.find((route: RouteMapItem) => route.path === '/items/list');

  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={(theme) => ({
        gap: 9,
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr)',
        backgroundColor: 'transparent',
        [theme.fn.smallerThan('md')]: {
          padding: 0,
        },
      })}
    >
      {items.length === 0 ? (
        <NoItemsView
          items={items}
          paths={[Route, Route2].map((route) => ({
            path: route?.path,
            name: route?.name || '?',
          }))}
        />
      ) : (
        <WithItemsView
          items={items}
          paths={[Route, Route2].map((route) => ({
            path: route?.path,
            name: route?.name || '?',
          }))}
        />
      )}
      <DevMode>
        <Button
          type="button"
          variant="default"
          onClick={() => setItems(items?.length === 0 ? MockItems : [])}
        >
          <Text>Öğe sayısını {items?.length === 0 ? 'arttır.' : 'sıfırla.'} </Text>
        </Button>
      </DevMode>
    </Box>
  );
}

export default ItemsList;
