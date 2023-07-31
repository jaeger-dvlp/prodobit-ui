import React from 'react';
import { MockItems } from 'mockdata';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { ProdobitAppTheme as t } from '@/theme';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Item } from '@/views/items/list/WithItems';
import { Box, Button, Sx, Text } from '@mantine/core';
import { ImageIcon, InfoIcon } from '@/components/icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import EditWrapper, { useEdit } from '@/components/context/ItemEdit.context';

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
          padding: 60,
          marginTop: 70,
          widght: '100%',
          borderRadius: 40,
          backgroundColor: t.colors.gray[0],
        }}
      >
        {item?.name}
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
