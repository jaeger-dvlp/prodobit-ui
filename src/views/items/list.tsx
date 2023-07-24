import React from 'react';
import { motion } from 'framer-motion';
import { BsPlusLg } from 'react-icons/bs';
import Navbar from '@/components/layout/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Box, Button, Image, Text } from '@mantine/core';
import DevMode from '@/components/misc/DevMode';

function AddButtons({
  onItemAdd,
  onCategoryAdd,
}: {
  onItemAdd?: () => void;
  onCategoryAdd?: () => void;
}) {
  return (
    <>
      <Button
        type="button"
        variant="default"
        onClick={onItemAdd}
        leftIcon={<BsPlusLg width={24} height={24} />}
        sx={(theme) => ({
          color: 'white',
          height: 'auto',
          fontWeight: 300,
          fontSize: '22px',
          borderRadius: 100,
          padding: '20px 30px',
          transition: 'all .15s ease',
          border: `1px solid ${theme.colors.foundationgreen[6]}`,
          backgroundColor: `${theme.colors.foundationgreen[6]}!important`,
          ':hover': { filter: 'brightness(0.8)' },
        })}
      >
        <Text
          sx={{
            lineHeight: 1.2,
          }}
        >
          Öğe Ekle
        </Text>
      </Button>
      <Button
        type="button"
        variant="default"
        onClick={onCategoryAdd}
        leftIcon={<BsPlusLg width={24} height={24} />}
        sx={(theme) => ({
          height: 'auto',
          fontWeight: 300,
          fontSize: '22px',
          borderRadius: 100,
          padding: '20px 30px',
          transition: 'all .15s ease',
          backgroundColor: `white!important`,
          color: theme.colors.foundationgreen[9],
          border: `1px solid ${theme.colors.foundationgreen[6]}`,
          ':hover': { filter: 'brightness(0.8)' },
        })}
      >
        <Text
          sx={{
            lineHeight: 1.2,
          }}
        >
          Kategori Ekle
        </Text>
      </Button>
    </>
  );
}

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

function NoItemsView() {
  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={{
        gap: 40,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Image
        fit="contain"
        src="/assets/img/no-item.svg"
        sx={{
          width: '100%',
          maxWidth: 700,
        }}
      />
      <Text
        maw={410}
        sx={(theme) => ({
          fontWeight: 300,
          lineHeight: 1.3,
          fontSize: '45px',
          textAlign: 'center',
          color: theme.colors.foundationgreen[7],
        })}
      >
        Etkin ve Modern Bir Öğe Yönetimi İçin
      </Text>
      <Box
        sx={{
          gap: 10,
          marginTop: 75,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AddButtons onItemAdd={() => null} onCategoryAdd={() => null} />
      </Box>
    </Box>
  );
}

function ItemsView() {
  return 'Items View';
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
      {itemCount === 0 ? <NoItemsView /> : <ItemsView />}

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
