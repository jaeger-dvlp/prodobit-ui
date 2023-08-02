import React from 'react';
import { motion } from 'framer-motion';
import { MockItems } from 'mockdata';
import Navbar from '@/components/layout/Navbar';
import { ProdobitAppTheme as t } from '@/theme';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Item } from '@/views/items/list/WithItems';
import { Box, Button, Sx, Text } from '@mantine/core';
import { InfoIcon, ImageIcon } from '@/components/icons';
import EditTextEditor from '@/components/views/items/edit/TextEditor';
import ItemMainInfo from '@/components/views/items/edit/ItemMainInfo';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ItemStatusBar from '@/components/views/items/edit/ItemStatusBar';
import EditWrapper, { useEdit } from '@/components/context/ItemEdit.context';
import ItemFinancialInfo from '@/components/views/items/edit/ItemFinancialInfo';

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
    transition: 'all 200ms ease-in-out',
    opacity: view === viewName ? 1 : 0.6,
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
      sx={{
        width: '100%',
        overflow: 'auto',
        minHeight: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '60px 60px 0px 60px',
          [t.fn.smallerThan('md')]: {
            padding: '80px 45px 0px 45px',
          },
        }}
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
      </Box>
      <Box
        exit={{ opacity: 0, y: 20 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: 'easeInOut',
        }}
        component={motion.section}
        sx={{
          gap: 20,
          margin: 0,
          display: 'flex',
          minWidth: '100%',
          minHeight: '100%',
          overflow: 'hidden',
          flexDirection: 'row',
          width: 'fit-content',
          height: 'fit-content',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '0px 60px 60px 60px',
          [t.fn.smallerThan('md')]: { padding: '0px 45px 45px 45px' },
          '> section': {
            gap: 40,
            padding: 50,
            marginTop: 70,
            width: 'auto',
            display: 'grid',
            minWidth: '100%',
            borderRadius: 40,
            minHeight: '90vh',
            backgroundColor: t.colors.gray[0],
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            [t.fn.smallerThan('md')]: {
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            },
            ':nth-child(1)': {
              cursor: view === 'info' ? 'auto' : 'pointer',
            },
            ':nth-child(2)': {
              cursor: view === 'docs' ? 'auto' : 'pointer',
            },
          },
        }}
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
            setView('info');
          }}
          animate={{
            opacity: view === 'info' ? 1 : 0.5,
            x: view === 'info' ? 0 : 'calc(-100% - 20px)',
          }}
          component={motion.section}
          transition={{ duration: 1, ease: 'anticipate' }}
        >
          <Box
            component="section"
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <ItemMainInfo />
            <ItemStatusBar />
            <ItemFinancialInfo />
            <EditTextEditor />
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
            }}
          />
        </Box>
        <Box
          onClick={(e) => {
            e.stopPropagation();
            setView('docs');
          }}
          animate={{
            opacity: view === 'docs' ? 1 : 0.5,
            x: view === 'docs' ? 'calc(-100% - 20px)' : '-0%',
          }}
          component={motion.section}
          transition={{ duration: 1, ease: 'anticipate' }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              minWidth: '100%',
              flexDirection: 'column',
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            DOCS AREA
          </Box>
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
