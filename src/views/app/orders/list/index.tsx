import React from 'react';
import { MockOrders } from 'mockdata';
import { motion } from 'framer-motion';
import DevMode from '@/components/misc/DevMode';
import { Box, Button, Text } from '@mantine/core';
import RoutesMap, { RouteMapItem } from '@/routes';
import GenericNoItemsView from '@/views/global/NoItems';
import WithItemsView from '@/views/items/list/WithItems';

function OrdersList() {
  const [orders, setOrders] = React.useState(MockOrders);
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/app/orders');
  const Route2 = Route?.subRoutes?.find((route: RouteMapItem) => route.path === '/app/orders/list');

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
        overflow: 'auto',
        minHeight: '100vh',
        placeContent: 'start stretch',
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
      ) : (
        <WithItemsView
          items={orders}
          controls={{
            fastEdit: false,
            delete: false,
            drawer: true,
            fastInspect: true,
          }}
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
          onClick={() => setOrders(orders?.length === 0 ? MockOrders : [])}
        >
          <Text>Sipariş sayısını {orders?.length === 0 ? 'arttır.' : 'sıfırla.'} </Text>
        </Button>
      </DevMode>
    </Box>
  );
}

export default OrdersList;
