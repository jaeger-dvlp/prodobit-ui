import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { CustomChevronDown } from '@/components/icons';
import { Box, Image, Menu, Sx, Text } from '@mantine/core';
import { useEdit } from '@/components/context/ItemEdit.context';
import { Item, ItemCategory } from '@/views/items/list/WithItems';

import {
  TItemStatus,
  MockStatuses,
  MockStockStatus,
  MockStockStatuses,
  MockItemsCategories,
} from 'mockdata';

const Images = {
  tempAvatar: '/assets/img/temp-avatar.svg',
};

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
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: '18px 0px',
        flexDirection: 'row',
        height: 'fit-content',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        '> ul li': {
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
          [t.fn.smallerThan('lg')]: {
            border: 'none!important',
          },
        },
        '> li': {
          ':nth-child(4)': {
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
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          alignItems: 'center',
          width: 'fit-content',
          justifyContent: 'flex-start',
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

export default ItemStatusBar;
