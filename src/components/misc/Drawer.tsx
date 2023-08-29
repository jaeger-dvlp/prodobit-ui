import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useDisclosure } from '@mantine/hooks';
import { ProdobitAppTheme as t } from '@/theme';
import { useTable } from '@/components/context/Table.context';
import ProgressCircle from '@/components/misc/ProgressCircle';
import { ProductInfoTable, ProgressSpecBox } from '@/components/views/items/edit/Info';
import { ItemBarcode, ItemDateBox } from '@/components/views/items/edit/ItemMainInfo';
import { Sx, Box, Text, Menu, Button, Drawer as MantineDrawer } from '@mantine/core';

import {
  TrashIcon,
  EditIconItem,
  ThreeBarsOne,
  CustomChevronDown,
  CustomCurvedBackIcon,
  DocIcon,
  RefreshIcon,
  RoutingIcon,
  CustomPlusIcon,
} from '@/components/icons';

import { MockStatuses, MockStockStatuses } from 'mockdata';

import 'dayjs/locale/tr';

const motionProps = {
  component: motion.section,
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 20 },
  exit: { opacity: 0, y: 20 },
  transition: {
    damping: 30,
    type: 'spring',
    stiffness: 200,
  },
};

function JobRequests() {
  const mockData = [
    {
      id: 0,
      color: 'green',
      percentage: '85',
      name: 'CNC TORNA 6',
      status: {
        text: 'Bekleme',
        color: 'yellow',
      },
    },
    {
      id: 0,
      color: 'red',
      percentage: '15',
      name: 'CNC TORNA 5',
      status: {
        text: 'Üretimde',
        color: 'green',
      },
    },
    {
      id: 0,
      color: 'yellow',
      percentage: '42',
      name: 'CNC TORNA 4',
      status: {
        text: 'İptal Edildi',
        color: 'red',
      },
    },
  ];
  return (
    <Box
      {...motionProps}
      component={motion.ul}
      sx={{
        gap: 10,
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {mockData.map((data) => (
        <Box
          key={`job-request-${data.id}`}
          component="li"
          sx={{
            gap: 20,
            padding: 10,
            display: 'flex',
            borderRadius: 100,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: t.colors.gray[1],
          }}
        >
          <ProgressCircle maw="56px" percentage={data.percentage} color={data.color} />
          <Box
            sx={{
              gap: 8,
              width: '100%',
              maxWidth: '60%',
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                gap: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Text
                sx={{
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  color: t.colors.gray[9],
                }}
              >
                {data.name}
              </Text>
              <Button
                sx={{
                  height: 0,
                  padding: 0,
                  border: 'none',
                  color: t.colors.gray[9],
                  backgroundColor: 'transparent!important',
                  '> div > span > svg': {
                    width: 17,
                    height: 17,
                  },
                }}
                variant="default"
              >
                <EditIconItem />
              </Button>
            </Box>
            <Box
              sx={{
                gap: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                '> .mantine-Text-root': {
                  fontWeight: 400,
                  fontSize: '12px',
                  position: 'relative',
                  color: t.colors.gray[4],
                  ':not(:last-child):after': {
                    content: '""',
                    width: 1,
                    top: '50%',
                    height: 13,
                    right: -10,
                    position: 'absolute',
                    transform: 'translateY(-50%)',
                    backgroundColor: t.colors.gray[3],
                  },
                },
              }}
            >
              <Text>İE-2414</Text>
              <Text>
                <strong>3000</strong> / 5000 Adet
              </Text>
              <Text>15 Gün Kaldı</Text>
            </Box>
          </Box>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              sx={{
                width: 13,
                height: 13,
                borderRadius: 100,
                border: '2px solid #fff',
                backgroundColor: t.colors[data.status.color][4],
              }}
            />
            <Text
              sx={{
                fontSize: '12px',
                width: 'fit-content',
                whiteSpace: 'nowrap',
                color: t.colors[data.status.color][7],
              }}
            >
              {data.status.text}
            </Text>
          </Box>
        </Box>
      ))}
      <Button
        variant="default"
        sx={{
          padding: 10,
          minHeight: 76,
          width: '100%',
          height: 'auto',
          borderRadius: '100px',
          border: `1px solid ${t.colors.gray[3]}`,
          backgroundColor: 'transparent!important',
          '> div > span': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '> svg': {
              color: t.colors.gray[5],
              width: 28,
              height: 28,
            },
          },
        }}
      >
        <CustomPlusIcon />
      </Button>
    </Box>
  );
}

function StatusBar() {
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
    width: '100%',
    color: '#000',
    height: '100%',
    border: 'none',
    display: 'flex',
    fontWeight: 400,
    fontSize: '12px',
    cursor: 'pointer',
    padding: '0px 15px',
    alignItems: 'flex-start',
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
      textAlign: 'left',
      transition: 'all 0.15s ease-in-out',
    },
    [t.fn.smallerThan('md')]: {
      borderRight: 'none',
    },
  };
  return (
    <Box
      component="ul"
      sx={{
        gap: 10,
        margin: 0,
        width: '100%',
        display: 'flex',
        padding: '18px',
        flexWrap: 'nowrap',
        borderRadius: 15,
        listStyle: 'none',
        flexDirection: 'row',
        height: 'fit-content',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        backgroundColor: t.colors.gray[2],
        [t.fn.smallerThan('lg')]: {
          flexWrap: 'wrap',
        },
        '> ul li': {
          width: '100%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'flex-start',
          ':nth-of-type(2)': {
            borderLeft: `1px solid rgba(0,0,0,0.20)`,
            borderRight: `1px solid rgba(0,0,0,0.20)`,
          },
          [t.fn.smallerThan('lg')]: {
            width: 'auto',
            border: 'none!important',
          },
        },
        '> li': {
          ':nth-of-type(4)': {
            gap: 6,
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        },
      }}
    >
      <Box
        component="ul"
        sx={{
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          flexWrap: 'nowrap',
          listStyle: 'none',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'stretch',
          [t.fn.smallerThan('lg')]: {
            gap: 20,
            flexWrap: 'wrap',
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
                  <Text>Üretim Durumu</Text>
                  <CustomChevronDown className="icon" width={12} height={12} />
                </Box>
                <Box
                  className="st-t"
                  sx={{
                    minWidth: 95,
                    padding: '5px 14px',
                    color: t.colors.yellow[7],
                    backgroundColor: t.colors.yellow[1],
                  }}
                >
                  <Text>Beklemede</Text>
                </Box>
              </Box>
            </Menu.Target>
            <Menu.Dropdown m={0} p={0} miw={100} sx={MenuSX}>
              {MockStatuses.map((status) => (
                <Menu.Item
                  key={status.id}
                  component="button"
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
                  <Text>Öncelik Durumu</Text>
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
                    color: t.colors.red[5],
                    backgroundColor: 'transparent',
                  }}
                >
                  <ThreeBarsOne width={10} height={10} />
                  <Text>Öncelikli</Text>
                </Box>
              </Box>
            </Menu.Target>
            <Menu.Dropdown m={0} p={0} miw={100} sx={MenuSX}>
              {MockStockStatuses.map((stockStatus) => (
                <Menu.Item
                  key={stockStatus.id}
                  component="button"
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
            <Box
              sx={{
                ...StatusMenuTargetSX,
              }}
            >
              <Box className="st-sc">
                <Text>Toplam Miktar</Text>
              </Box>
              <Box
                className="st-t"
                sx={{
                  gap: 5,
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  color: t.colors.gray[6],
                  justifyContent: 'flex-start',
                  backgroundColor: 'transparent',
                }}
              >
                <Text>21.220</Text>
              </Box>
            </Box>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

const SpecButtons = [
  {
    icon: DocIcon,
    text: 'Bilgiler',
    component: <ProductInfoTable border={false} />,
  },
  {
    icon: RefreshIcon,
    text: 'İş Emirleri',
    component: <JobRequests />,
  },
  {
    icon: RoutingIcon,
    text: 'İlerleyiş',
    component: <ProgressSpecBox borderNpadding={false} />,
  },
];

function Drawer() {
  const { drawer } = useTable();
  const [opened, { open, close }] = useDisclosure(false);
  const [spec, setSpec] = React.useState(SpecButtons[0]);

  const SpecComp = spec.component;

  React.useEffect(() => {
    (() => {
      if (drawer.item) {
        return open();
      }

      return close();
    })();
  }, [close, drawer, open]);

  return (
    <MantineDrawer
      size={684}
      bg="transparent"
      position="right"
      withCloseButton={false}
      transitionProps={{
        duration: 1000,
        transition: 'slide-left',
      }}
      styles={{
        content: {
          boxShadow: 'none',
          overflow: 'visible!important',
          backgroundColor: 'transparent',
        },
        header: {
          backgroundColor: 'transparent',
        },
      }}
      opened={opened}
      onClose={close}
    >
      <MantineDrawer.Content
        sx={{
          padding: 17,
          marginRight: 17,
          overflow: 'visible',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 30,
            position: 'relative',
            backgroundColor: '#fff',
            '> .control-bar': {
              top: 80,
              left: 0,
              gap: 11,
              display: 'flex',
              position: 'absolute',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transform: 'translateX(-50%)',
              '> button': {
                padding: 20,
                border: 'none',
                height: 'auto',
                borderRadius: 200,
                boxShadow: t.shadows.xl,
                backgroundColor: '#fff',
                '& svg': {
                  width: 24,
                  height: 24,
                },
                '&:nth-of-type(2)': {
                  color: t.colors.blue[5],
                },
                '&:nth-of-type(3)': {
                  color: t.colors.red[5],
                },
              },
              '> button.back-btn': {
                padding: 40,
                marginBottom: 46,
                '& svg': {
                  width: 27,
                  height: 27,
                },
              },
            },
          }}
        >
          <Box className="control-bar">
            <Button className="back-btn" variant="default" onClick={close}>
              <CustomCurvedBackIcon />
            </Button>
            <Button variant="default">
              <EditIconItem />
            </Button>
            <Button variant="default">
              <TrashIcon />
            </Button>
          </Box>
          <Box
            className="custom-drawer-content"
            sx={{
              gap: 50,
              width: '100%',
              height: '100%',
              display: 'flex',
              overflowY: 'auto',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: '40px 80px 0px 110px',
              [t.fn.smallerThan('lg')]: {
                padding: '40px 20px 0px 60px',
              },
            }}
          >
            <Box
              sx={{
                gap: 17,
                width: '100%',
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Box
                sx={{
                  gap: 6,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                }}
              >
                <ItemBarcode barcode={(drawer?.item?.code as string) || 'İE-2414'} />
                <ItemDateBox
                  date={dayjs(drawer?.item?.created_at as string)
                    .locale('tr')
                    .format('DD MMMM YYYY - HH:mm')}
                />
              </Box>
              <Box
                sx={{
                  gap: 20,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <ProgressCircle maw="56px" percentage="85" color="green" />
                </Box>
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
                  {(drawer?.item?.name as string) || 'Adidas AX2S Terrex Erkek Outdoor Ayakkabı'}
                </Text>
              </Box>
            </Box>
            <StatusBar />
            <Box
              component="ul"
              sx={{
                gap: 0,
                padding: 0,
                width: '100%',
                display: 'flex',
                listStyle: 'none',
                flexWrap: 'nowrap',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {SpecButtons.map(({ icon: Icon, text }, index) => (
                <Button
                  component="li"
                  variant="default"
                  onClick={() => setSpec(SpecButtons[index])}
                  key={`spec-button-${index}`}
                  sx={{
                    gap: 10,
                    height: 'auto',
                    border: 'none',
                    display: 'flex',
                    fontWeight: 500,
                    fontSize: '15px',
                    borderRadius: 100,
                    lineHeight: '18px',
                    padding: '9px 18px',
                    width: '100%',
                    transition: 'all 150ms ease-in-out',
                    backgroundColor: `${
                      spec.text === text ? t.colors.blue[0] : 'transparent'
                    }!important`,
                    color: spec.text === text ? t.colors.blue[5] : t.colors.gray[8],
                    '> div ': {
                      width: '100%',
                      '> span': {
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    },
                    svg: {
                      width: '16px',
                      height: '16px',
                      marginRight: '10px',
                      color: t.colors.blue[5],
                    },
                  }}
                >
                  <Icon width={16} height={16} />
                  <Text>{text}</Text>
                </Button>
              ))}
            </Box>
            {SpecComp}
            <Box
              sx={{
                gap: 20,
                bottom: 0,
                width: '100%',
                display: 'grid',
                paddingBottom: 40,
                flexWrap: 'nowrap',
                marginTop: 'auto',
                position: 'sticky',
                placeItems: 'center',
                flexDirection: 'row',
                placeContent: 'center',
                backgroundColor: '#fff',
                gridTemplateColumns: '1fr 1fr',
                '&::after': {
                  content: '""',
                  left: 0,
                  height: 100,
                  width: '100%',
                  bottom: '100%',
                  position: 'absolute',
                  background: t.fn.linearGradient(
                    180,
                    'rgba(255,255,255,0)',
                    'rgba(255,255,255,1)',
                  ),
                },
                '> button': {
                  width: '100%',
                  minHeight: 66,
                  height: 'auto',
                  borderRadius: 15,
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '26.4px',
                  padding: '20px 10px',
                },
              }}
            >
              <Button
                variant="default"
                sx={{
                  border: `1px solid ${t.colors.red[6]}`,
                  color: t.colors.red[6],
                }}
              >
                Tümünü iptal Et
              </Button>
              <Button
                variant="default"
                sx={{
                  border: `1px solid ${t.colors.green[6]}`,
                  color: t.colors.green[6],
                }}
              >
                Tümünü Tamamla
              </Button>
            </Box>
          </Box>
        </Box>
      </MantineDrawer.Content>
    </MantineDrawer>
  );
}

export default Drawer;
