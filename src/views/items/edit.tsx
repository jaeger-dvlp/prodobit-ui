import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { ProdobitAppTheme as t } from '@/theme';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Item, ItemCategory } from '@/views/items/list/WithItems';
import { Box, Button, Image, Menu, Sx, Text } from '@mantine/core';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import EditWrapper, { useEdit } from '@/components/context/ItemEdit.context';

import {
  MockItems,
  TItemStatus,
  MockStatuses,
  MockStockStatus,
  MockStockStatuses,
  MockItemsCategories,
} from 'mockdata';

import {
  InfoIcon,
  ImageIcon,
  TimerIcon,
  ScanBarcodeIcon,
  CustomChevronDown,
  ReceiptIcon,
  MaterialIcon,
  TagIcon,
  PercentageSquareIcon,
  ChartUpIcon,
  ChartDownIcon,
} from '@/components/icons';

import 'dayjs/locale/tr';
import EditTextEditor from '@/components/views/items/edit/TextEditor';

const Images = {
  tempAvatar: '/assets/img/temp-avatar.svg',
};

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

function ItemStatusBar() {
  const { item, setItem } = useEdit<Item>();

  const MenuSX: Sx = {
    borderRadius: 5,
    maxHeight: 200,
    overflowY: 'auto',
    overflowX: 'hidden',
    boxShadow: t.shadows.xl,
    backgroundColor: t.colors.gray[0],
    border: `1px solid ${t.colors.gray[3]}`,
    'button:not(:last-child)': {
      borderBottom: `1px solid ${t.colors.gray[3]}`,
    },
  };

  const StatusMenuTargetSX: Sx = {
    gap: 6,
    margin: 0,
    padding: '0px 20px',
    color: '#000',
    height: '100%',
    border: 'none',
    display: 'flex',
    fontWeight: 400,
    fontSize: '12px',
    cursor: 'pointer',
    alignItems: 'start',
    lineHeight: '14.4px',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent!important',
    '.icon': {
      transition: 'all 0.2s ease-in-out',
    },
    ':hover .icon': {
      transform: 'rotate(-180deg)',
    },
    '.st-sc': {
      gap: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.st-t': {
      borderRadius: 5,
      fontWeight: 500,
      transition: 'all 0.15s ease-in-out',
    },
    [t.fn.smallerThan('md')]: {
      borderRight: 'none',
    },
  };

  const ItemStatus = React.useMemo(() => {
    const status = MockStatuses.find((elm) => elm.slug === item?.status);
    return status;
  }, [item]) as TItemStatus;

  const StockStatus = React.useMemo(() => {
    const itemCount = item?.count || 0;

    if (itemCount === 0)
      return MockStockStatuses.find(({ condition }) => condition === 'lower-than-1');

    if (itemCount < 10)
      return MockStockStatuses.find(({ condition }) => condition === 'lower-than-10');

    if (itemCount < 20)
      return MockStockStatuses.find(({ condition }) => condition === 'lower-than-20');

    return MockStockStatuses.find(({ condition }) => condition === 'greater-than-20');
  }, [item]) as MockStockStatus;

  const itemCategory = React.useMemo(() => {
    const category = MockItemsCategories.find((elm) => elm.slug === item?.category);
    return category;
  }, [item]) as ItemCategory;

  return (
    <Box
      component="ul"
      sx={{
        gap: 10,
        margin: 0,
        width: '100%',
        marginTop: 40,
        maxWidth: 550,
        display: 'flex',
        flexWrap: 'wrap',
        padding: '18px 0px',
        flexDirection: 'row',
        height: 'fit-content',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        '> li': {
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'flex-start',
          ':nth-child(2)': {
            borderLeft: `1px solid rgba(0,0,0,0.20)`,
            borderRight: `1px solid rgba(0,0,0,0.20)`,
          },
          ':nth-child(3)': {
            marginRight: 20,
          },
          ':nth-child(4)': {
            gap: 6,
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            justifyContent: 'center',
          },
          [t.fn.smallerThan('lg')]: {
            border: 'none!important',
          },
        },
      }}
    >
      <Box component="li">
        <Menu position="bottom">
          <Menu.Target>
            <Box
              component="button"
              sx={{
                ...StatusMenuTargetSX,
              }}
            >
              <Box className="st-sc">
                <Text>Statü</Text>
                <CustomChevronDown className="icon" width={12} height={12} />
              </Box>
              <Box
                className="st-t"
                sx={{
                  minWidth: 95,
                  padding: '5px 14px',
                  color: ItemStatus?.color[7],
                  backgroundColor: ItemStatus?.color[1],
                }}
              >
                <Text>{ItemStatus?.name}</Text>
              </Box>
            </Box>
          </Menu.Target>
          <Menu.Dropdown m={0} p={0} miw={100} sx={MenuSX}>
            {MockStatuses.map((status) => (
              <Menu.Item
                key={status.id}
                component="button"
                onClick={() => setItem({ ...(item as Item), status: status.slug })}
                sx={{
                  gap: 0,
                  margin: 0,
                  borderRadius: 0,
                  display: 'flex',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 10px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'all .15s ease-in-out',
                  ':hover': {
                    backgroundColor: status.color[1],
                  },
                }}
              >
                <Box
                  sx={{
                    fontWeight: 500,
                    borderRadius: 5,
                    color: status.color[7],
                  }}
                >
                  <Text>{status.name}</Text>
                </Box>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
      <Box component="li">
        <Menu position="bottom">
          <Menu.Target>
            <Box
              component="button"
              sx={{
                ...StatusMenuTargetSX,
              }}
            >
              <Box className="st-sc">
                <Text>Stok</Text>
                <CustomChevronDown className="icon" width={12} height={12} />
              </Box>
              <Box
                className="st-t"
                sx={{
                  gap: 5,
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  color: StockStatus.color[5],
                  backgroundColor: 'transparent',
                }}
              >
                <StockStatus.Icon width={10} height={10} />
                <Text>{StockStatus.text}</Text>
              </Box>
            </Box>
          </Menu.Target>
          <Menu.Dropdown m={0} p={0} miw={100} sx={MenuSX}>
            {MockStockStatuses.map((stockStatus) => (
              <Menu.Item
                key={stockStatus.id}
                component="button"
                onClick={() => setItem({ ...(item as Item), count: stockStatus.excount })}
                sx={{
                  gap: 0,
                  margin: 0,
                  borderRadius: 0,
                  display: 'flex',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 10px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'all .15s ease-in-out',
                  ':hover': {
                    backgroundColor: stockStatus.color[1],
                  },
                }}
              >
                <Box
                  sx={{
                    fontWeight: 500,
                    borderRadius: 5,
                    color: stockStatus.color[7],
                  }}
                >
                  <Text>{stockStatus.text}</Text>
                </Box>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
      <Box component="li">
        <Menu position="bottom">
          <Menu.Target>
            <Box
              component="button"
              sx={{
                ...StatusMenuTargetSX,
              }}
            >
              <Box className="st-sc">
                <Text>Kategori</Text>
                <CustomChevronDown className="icon" width={12} height={12} />
              </Box>
              <Box
                className="st-t"
                sx={{
                  gap: 5,
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  color: t.colors.green[6],
                  justifyContent: 'flex-start',
                  backgroundColor: 'transparent',
                }}
              >
                <Text>{itemCategory?.name}</Text>
              </Box>
            </Box>
          </Menu.Target>
          <Menu.Dropdown m={0} p={0} miw={100} sx={MenuSX}>
            {MockItemsCategories.map((category) => (
              <Menu.Item
                key={category.id}
                component="button"
                onClick={() => setItem({ ...(item as Item), category: category.slug })}
                sx={{
                  gap: 0,
                  margin: 0,
                  borderRadius: 0,
                  display: 'flex',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 10px',
                  alignItems: 'center',
                  color: t.colors.gray[7],
                  justifyContent: 'flex-start',
                  backgroundColor: 'transparent',
                  transition: 'all .15s ease-in-out',
                  ':hover': {
                    color: t.colors.green[6],
                  },
                }}
              >
                <Box
                  sx={{
                    fontWeight: 500,
                    borderRadius: 5,
                  }}
                >
                  <Text>{category.name}</Text>
                </Box>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
      <Box component="li">
        <Box
          sx={{
            gap: 10,
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={Images.tempAvatar}
            alt="Fatih G."
            width={18}
            height={18}
            fit="cover"
            sx={{
              borderRadius: 30,
            }}
          />
          <Text
            sx={{
              color: '#000',
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: '18px',
            }}
          >
            Fatih G.
          </Text>
        </Box>
        <Box
          sx={{
            gap: 3,
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              borderRadius: 5,
              padding: '3px 5px',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0, 0, 0, 0.10)',
            }}
          >
            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: t.colors.green[6],
              }}
            />
            <Text
              sx={{
                color: t.colors.gray[7],
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '14.4px',
              }}
            >
              Geçmiş
            </Text>
          </Box>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              borderRadius: 5,
              padding: '3px 5px',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0, 0, 0, 0.10)',
            }}
          >
            <Image
              width={5}
              height={5}
              src={Images.tempAvatar}
              alt="Fatih G."
              sx={{
                borderRadius: 5,
              }}
            />
            <Text
              sx={{
                color: t.colors.gray[7],
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '14.4px',
              }}
            >
              Kişiler
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function ItemFinancialInfo() {
  // const { item } = useEdit<Item>();

  const FinancialSpecs = [
    {
      icon: ReceiptIcon,
      text: 'Maaliyet',
      value: '2500₺',
      status: 'up',
      status_value: '12%',
    },
    {
      icon: MaterialIcon,
      text: 'Hammadde',
      value: '15₺',
      status: 'down',
      status_value: '15%',
    },
    {
      icon: TagIcon,
      text: 'Satış',
      value: '3200₺',
      status: 'down',
      status_value: '05%',
    },
    {
      icon: PercentageSquareIcon,
      text: 'Kazanç',
      value: '%20',
      status: 'up',
      status_value: '12%',
    },
  ];

  return (
    <Box
      component="ul"
      sx={{
        gap: 55,
        margin: 0,
        padding: 0,
        marginTop: 40,
        maxWidth: 520,
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      {FinancialSpecs.map(({ icon: Icon, text, value, status, status_value }, i) => (
        <Box
          key={`i-f-spec-${i}`}
          component="li"
          sx={{
            gap: 7,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              gap: 7,
              display: 'flex',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
              alignItems: 'center',
              flexDirection: 'row',
              color: t.colors.gray[7],
              justifyContent: 'flex-start',
            }}
          >
            <Icon width={14} height={14} />
            <Text>{text}</Text>
          </Box>
          <Text
            sx={{
              marginTop: 5,
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '31.2px',
              color: t.colors.gray[7],
            }}
          >
            {value}
          </Text>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              fontWeight: 600,
              fontSize: '12px',
              borderRadius: 50,
              padding: '2px 6px',
              lineHeight: '14.4px',
              width: 'fit-content',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: status === 'up' ? t.colors.green[9] : t.colors.red[9],
              backgroundColor: status === 'up' ? t.colors.green[3] : t.colors.red[3],
            }}
          >
            {status === 'up' && <ChartUpIcon width={13} height={7} />}
            {status === 'down' && <ChartDownIcon width={13} height={7} />}
            <Text>{status_value}</Text>
          </Box>
        </Box>
      ))}
    </Box>
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
          sx={{
            gap: 40,
            padding: 50,
            marginTop: 70,
            width: 'auto',
            display: 'grid',
            minWidth: '100%',
            borderRadius: 40,
            minHeight: '90vh',
            backgroundColor: t.colors.gray[0],
            cursor: view === 'info' ? 'auto' : 'pointer',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            [t.fn.smallerThan('md')]: {
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
          <Box
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
          sx={{
            gap: 40,
            padding: 50,
            marginTop: 70,
            width: 'auto',
            display: 'grid',
            minWidth: '100%',
            borderRadius: 40,
            minHeight: '90vh',
            backgroundColor: t.colors.gray[0],
            cursor: view === 'docs' ? 'auto' : 'pointer',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            [t.fn.smallerThan('md')]: {
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            },
          }}
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
