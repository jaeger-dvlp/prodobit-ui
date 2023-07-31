import React from 'react';
import dayjs from 'dayjs';
import { MockItems } from 'mockdata';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { ProdobitAppTheme as t } from '@/theme';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Item } from '@/views/items/list/WithItems';
import { Box, Button, Image, Sx, Text } from '@mantine/core';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import EditWrapper, { useEdit } from '@/components/context/ItemEdit.context';
import { ImageIcon, InfoIcon, ScanBarcodeIcon, TimerIcon } from '@/components/icons';

import 'dayjs/locale/tr';

function ItemMainInfo() {
  const { item } = useEdit<Item>();
  return (
    <>
      <Box
        sx={{
          gap: 6,
          display: 'flex',
          flexWrap: 'wrap',
          width: 'fit-content',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            gap: 10,
            borderRadius: 5,
            display: 'flex',
            padding: '7px 10px',
            flexDirection: 'row',
            alignItems: 'center',
            color: t.colors.blue[7],
            justifyContent: 'center',
            backgroundColor: t.colors.blue[0],
            border: `1px solid ${t.colors.blue[0]}`,
          }}
        >
          <ScanBarcodeIcon width={12} height={12} />
          <Text
            sx={{
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '14.4px',
              color: t.colors.blue[5],
            }}
          >
            {item?.code}
          </Text>
        </Box>
        <Box
          sx={{
            gap: 5,
            borderRadius: 5,
            display: 'flex',
            padding: '7px 10px',
            flexDirection: 'row',
            alignItems: 'center',
            color: t.colors.blue[5],
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: `1px solid ${t.colors.blue[2]}`,
          }}
        >
          <TimerIcon width={12} height={12} />
          <Text
            sx={{
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '14.4px',
            }}
          >
            {dayjs(item?.created_at)
              .locale('tr')
              .format('DD MMMM YYYY - HH:mm')}
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          gap: 20,
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          wdith: 'fit-content',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Image fit="cover" width={58} height={58} radius={100} alt={item?.name} src={item?.image} />
        <Text
          sx={{
            color: '#000',
            maxWidth: 326,
            fontWeight: 500,
            fontSize: '26px',
            lineHeight: '31.2px',
            [t.fn.smallerThan('md')]: {
              fontSize: '20px',
              lineHeight: '24px',
            },
          }}
        >
          {item?.name}
        </Text>
      </Box>
    </>
  );
}

function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { item, setItem } = useEdit<Item>();
  const [view, setView] = React.useState<'info' | 'docs'>('info');

  const routeItem = state?.item;

  React.useEffect(() => {
    (() => {
      if (routeItem) {
        return setItem(routeItem);
      }

      if (id) {
        const foundItem = MockItems.find((elm) => elm.id === parseInt(id, 10));
        if (foundItem) {
          return setItem(foundItem);
        }
      }

      return navigate('/items');
    })();
  }, [id, navigate, routeItem, setItem]);

  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/items');
  const SubRoute = Route?.subRoutes?.find((route: RouteMapItem) => route.path === '/items/edit');

  const getViewSx = (viewName: string): Sx => ({
    gap: '10px',
    height: 'auto',
    border: 'none',
    display: 'flex',
    fontWeight: 500,
    fontSize: '15px',
    borderRadius: 100,
    lineHeight: '18px',
    padding: '9px 18px',
    flexDirection: 'row',
    alignContent: 'center',
    color: t.colors.gray[8],
    justifyContent: 'center',
    opacity: view === viewName ? 1 : 0.6,
    transition: 'all 200ms ease-in-out',
    backgroundColor: view === viewName ? t.colors.gray[3] : 'transparent',
    ':hover': {
      backgroundColor: view === viewName ? t.colors.gray[3] : t.colors.gray[2],
    },
  });

  return (
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={(theme) => ({
        padding: 60,
        width: '100%',
        overflow: 'auto',
        minHeight: '100%',
        backgroundColor: 'transparent',
        [theme.fn.smallerThan('md')]: {
          padding: 45,
          paddingTop: 80,
        },
      })}
    >
      <Navbar
        paths={[
          Route,
          {
            ...SubRoute,
            path: `${SubRoute?.path}/${item?.id}`,
          },
        ].map((route) => ({
          path: route?.path,
          name: route?.name || '?',
        }))}
        withButtons
        middleChilds={
          <Box
            sx={{
              gap: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              minWidth: 'fit-content',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="default"
              onClick={() => setView('info')}
              sx={(() => getViewSx('info'))()}
            >
              <InfoIcon width={16} height={16} />
              <Text ml={10}>Bilgiler</Text>
            </Button>
            <Button
              variant="default"
              onClick={() => setView('docs')}
              sx={(() => getViewSx('docs'))()}
            >
              <ImageIcon width={16} height={16} />
              <Text ml={10}>Dökümanlar</Text>
            </Button>
          </Box>
        }
      />

      <Box
        sx={{
          gap: 40,
          padding: 50,
          marginTop: 70,
          height: '100%',
          widght: '100%',
          borderRadius: 40,
          display: 'grid',
          backgroundColor: t.colors.gray[0],
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          [t.fn.smallerThan('md')]: {
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <ItemMainInfo />
        </Box>
      </Box>
    </Box>
  );
}

export default function EditItemWrapper() {
  return (
    <EditWrapper>
      <EditItem />
    </EditWrapper>
  );
}
