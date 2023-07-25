import React from 'react';
import { MockItems } from 'mockdata';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import DevMode from '@/components/misc/DevMode';
import { Box, Button, Text } from '@mantine/core';
import RoutesMap, { RouteMapItem } from '@/routes';
import NoItemsView from '@/views/items/list/NoItems';
import WithItemsView from '@/views/items/list/WithItems';

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
      <Box
        sx={{
          padding: 60,
          width: '100%',
        }}
      >
        <Navbar
          paths={[Route, Route2].map((route) => ({
            path: route?.path,
            name: route?.name || '?',
          }))}
          withButtons
          middleChilds={<ItemCountDisplay itemCount={items.length} />}
        />
      </Box>
      {items.length === 0 ? <NoItemsView /> : <WithItemsView />}
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
