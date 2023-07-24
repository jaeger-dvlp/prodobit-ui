import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { Box, Button, Text } from '@mantine/core';
import RoutesMap, { RouteMapItem } from '@/routes';
import NoItemsView from '@/views/items/list/NoItems';
import WithItemsView from '@/views/items/list/WithItems';

import DevMode from '@/components/misc/DevMode';

function ItemCountDisplay({ itemCount }: { itemCount: number }) {
  if (itemCount === 0) {
    return (
      <Text
        sx={(theme) => ({
          color: '#39373A',
          fontSize: '22px',
          fontWeight: 400,
          [theme.fn.smallerThan('md')]: {
            fontSize: '18px',
          },
        })}
        miw="fit-content"
      >
        Öğe Bulunamadı
      </Text>
    );
  }

  return (
    <Text
      sx={(theme) => ({
        color: '#39373A',
        fontSize: '22px',
        fontWeight: 400,
        [theme.fn.smallerThan('md')]: {
          fontSize: '18px',
        },
      })}
      miw="fit-content"
    >
      <Text component="b">{itemCount}</Text> Öğe Bulundu
    </Text>
  );
}

function ItemsList() {
  const [itemCount, setItemCount] = React.useState(0);

  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/items');
  const Route2 = Route?.subRoutes?.find((route: RouteMapItem) => route.path === '/items/list');

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
        paths={[Route, Route2].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
        withButtons
        middleChilds={<ItemCountDisplay itemCount={itemCount} />}
      />
      {itemCount === 0 ? <NoItemsView /> : <WithItemsView />}

      <DevMode>
        <Button
          type="button"
          variant="default"
          onClick={() => setItemCount(itemCount === 0 ? 2500 : 0)}
        >
          <Text>Set item count {itemCount === 0 ? 2500 : 0}</Text>
        </Button>
      </DevMode>
    </Box>
  );
}

export default ItemsList;
