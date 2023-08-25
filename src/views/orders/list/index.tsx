import React from 'react';
import { MockItems } from 'mockdata';
import { motion } from 'framer-motion';
import DevMode from '@/components/misc/DevMode';
import { Box, Button, Text } from '@mantine/core';
import RoutesMap, { RouteMapItem } from '@/routes';
import GenericNoItemsView from '@/views/global/NoItems';

function OrdersList() {
  const [orders, setOrders] = React.useState(MockItems);
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/orders');
  const Route2 = Route?.subRoutes?.find((route: RouteMapItem) => route.path === '/orders/list');

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
      {orders.length === 0 ? (
        <GenericNoItemsView
          items={orders}
          text="Etkin ve Modern Bir Sipariş Yönetimi İçin"
          primaryButtonText="Sipariş Ekle"
          secondaryButtonText="Müşteri Ekle"
          onPrimaryButtonClick={() => null}
          onSecondaryButtonClick={() => null}
          paths={[Route, Route2].map((route) => ({
            path: route?.path,
            name: route?.name || '?',
          }))}
        />
      ) : null}
      <DevMode>
        <Button
          type="button"
          variant="default"
          onClick={() => setOrders(orders?.length === 0 ? MockItems : [])}
        >
          <Text>Sipariş sayısını {orders?.length === 0 ? 'arttır.' : 'sıfırla.'} </Text>
        </Button>
      </DevMode>
    </Box>
  );
}

export default OrdersList;
