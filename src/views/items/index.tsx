import React from 'react';
import { Box, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import RoutesMap, { RouteMapItem } from '@/routes';
import NavbarWBreadCrumbs from '@/components/layout/navbar/withBreadCrumbs';

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

function Items() {
  const [
    itemCount,
    // ,setItemCount
  ] = React.useState(2500);

  const Route = RoutesMap.find(
    (route: RouteMapItem) => route.path === '/items',
  );

  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.div}
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
      <NavbarWBreadCrumbs
        paths={[
          Route,
          {
            path: '/items',
            name: 'Öğe Listesi',
          },
        ].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
        withButtons
        middleChilds={<ItemCountDisplay itemCount={itemCount} />}
      />
    </Box>
  );
}

export default Items;
