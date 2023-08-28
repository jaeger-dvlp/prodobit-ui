import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useDisclosure } from '@mantine/hooks';
import { ProdobitAppTheme as t } from '@/theme';
import { useTable } from '@/components/context/Table.context';
import { ItemBarcode, ItemDateBox } from '@/components/views/items/edit/ItemMainInfo';

import {
  Sx,
  Box,
  Text,
  Menu,
  Button,
  MantineColor,
  createStyles,
  Drawer as MantineDrawer,
} from '@mantine/core';

import {
  TrashIcon,
  EditIconItem,
  ThreeBarsOne,
  CustomChevronDown,
  CustomCurvedBackIcon,
} from '@/components/icons';

import { MockStatuses, MockStockStatuses } from 'mockdata';

import 'dayjs/locale/tr';

const percentageStyles = createStyles(
  (
    _,
    {
      color,
      maw,
    }: {
      color: MantineColor;
      maw?: string;
    },
  ) => ({
    root: {
      width: '100%',
      aspectRatio: '1/1',
      display: 'block',
      margin: 'auto',
      minWidth: '56px',
      maxWidth: maw || '100px',
    },
    progressBg: {
      fill: 'none',
      stroke: t.colors[color][0],
      strokeWidth: '3.8',
    },
    percentage: {
      fill: t.colors[color][7],
      fontSize: '0.5em',
      textAnchor: 'middle',
    },
    progress: {
      fill: 'none',
      strokeWidth: 2.8,
      strokeLinecap: 'round',
      stroke: t.colors[color][3],
    },
    bg: {
      fill: t.colors[color][1],
      width: '90%',
      height: '90%',
    },
  }),
);

function PercentageCircle({
  percentage,
  color,
  maw,
}: {
  percentage: string;
  color: MantineColor;
  maw?: string;
}) {
  const [perc, setPerc] = React.useState(0);
  const { classes } = percentageStyles({ color, maw });

  React.useEffect(() => {
    (async () => {
      if (perc === 0) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 900);
        });
      }

      if (perc < Number(percentage)) {
        return setTimeout(() => {
          setPerc(perc + 1);
        }, 10);
      }
      return false;
    })();
  }, [perc, percentage]);

  return (
    <Box component="svg" viewBox="0 0 36 36" className={classes.root}>
      <path
        className={classes.progressBg}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <circle className={classes.bg} cx="18" cy="18" r="12" />
      <motion.path
        className={classes.progress}
        animate={{
          strokeDasharray: [`0, 100`, `${percentage}, 100`],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.9,
        }}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className={classes.percentage}>
        %{perc}
      </text>
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

function Drawer() {
  const { drawer } = useTable();
  const [opened, { open, close }] = useDisclosure(false);

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
              padding: '40px 80px 40px 110px',
              [t.fn.smallerThan('lg')]: {
                padding: '40px 20px 40px 60px',
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
                  <PercentageCircle maw="56px" percentage="85" color="green" />
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
          </Box>
        </Box>
      </MantineDrawer.Content>
    </MantineDrawer>
  );
}

export default Drawer;
