import React from 'react';
import { MockItems } from 'mockdata';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DevMode from '@/components/misc/DevMode';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Box, Button, Text } from '@mantine/core';
import GenericNoItemsView from '@/views/global/NoItems';
import WithItemsView from '@/views/items/list/WithItems';

function ItemsList() {
  const Navigate = useNavigate();
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
        <GenericNoItemsView
          items={items}
          text="Etkin ve Modern Bir Öğe Yönetimi İçin"
          primaryButtonText="Öğe Ekle"
          secondaryButtonText="Kategori Ekle"
          onPrimaryButtonClick={() => Navigate('/items/new')}
          onSecondaryButtonClick={() => Navigate('/items/categories/list')}
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
