import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Menu, Text, TextInput } from '@mantine/core';
import {
  CustomHorizontal3DotsIcon,
  CustomMoveIcon,
  CustomPlusIcon,
  CustomSmoothTooltipIllustration,
  CustomVertical3DotsIcon,
  TrashIcon,
} from '@/components/icons';
import { ItemCategory } from '@/views/items/list/WithItems';

type Props = {
  categories: ItemCategory[];
};

function CtMenu({ defaultValue }: { defaultValue?: string }) {
  return (
    <Menu.Dropdown
      sx={{
        padding: 0,
        marginLeft: 90,
        backgroundColor: 'transparent',
        '> div > .ct-menu-tooltip': {
          left: 0,
          top: '50%',
          width: 30,
          height: 100,
          zIndex: 9999,
          color: 'white',
          position: 'absolute',
          transform: 'translateX(-100%) translateY(-50%)',
        },
        '> div > .ct-menu-wrapper': {
          gap: 25,
          width: '90vw',
          maxWidth: 418,
          display: 'flex',
          borderRadius: 20,
          padding: '35px 30px',
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '> .ct-name-label': {
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: '18px',
            color: t.colors.gray[6],
          },
          '> .ct-name-input .mantine-TextInput-input': {
            height: 'auto',
            padding: 0,
            border: 'none',
            borderRadius: 0,
            fontWeight: 500,
            fontSize: '31px',
            paddingBottom: 18,
            backgroundColor: 'transparent',
            borderBottom: `1px solid ${t.colors.gray[3]}`,
          },
          '> button': {
            border: 'none',
            height: 'auto',
            padding: '20px',
            borderRadius: 10,
            backgroundColor: t.colors.gray[0],
            '&:hover': {
              backgroundColor: t.colors.gray[1],
            },
            '> div > span': {
              gap: 2,
              color: '#000',
              width: '100%',
              display: 'flex',
              fontWeight: 400,
              fontSize: '15px',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '> svg': {
                width: 24,
                height: 24,
              },
            },
          },
        },
      }}
    >
      <CustomSmoothTooltipIllustration className="ct-menu-tooltip" />
      <Box className="ct-menu-wrapper">
        <Text className="ct-name-label">Kategori Adı</Text>
        <TextInput className="ct-name-input" defaultValue={defaultValue} />
        <Button variant="default">
          <Text>Sil</Text>
          <TrashIcon />
        </Button>
        <Button variant="default">
          <Text>Taşı</Text>
          <CustomMoveIcon />
        </Button>
      </Box>
    </Menu.Dropdown>
  );
}

function CategoryList({ categories }: Props) {
  return (
    <Box
      sx={{
        gap: 10,
        padding: 30,
        width: '100%',
        maxWidth: 448,
        display: 'flex',
        borderRadius: 30,
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        '> button.add-main-category': {
          padding: 20,
          border: 'none',
          height: 'auto',
          borderRadius: 20,
          backgroundColor: `${t.colors.gray[1]}`,
          '&:hover': {
            backgroundColor: `${t.colors.gray[2]}`,
          },
          '> div > span': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '> .mantine-Text-root': {
              color: '#000',
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '21.6px',
            },
            '> div:nth-of-type(2)': {
              padding: 10,
              color: '#fff',
              borderRadius: 10,
              backgroundColor: t.colors.gray[8],
              '> svg': {
                width: 15,
                height: 15,
              },
            },
          },
        },
        '> ul.ct-list': {
          gap: 10,
          padding: 0,
          display: 'flex',
          listStyle: 'none',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '&:has(> li:focus-within)': {
            '> li:not(:focus-within)': {
              opacity: 0.3,
            },
          },
          '> li': {
            gap: 30,
            display: 'flex',
            borderRadius: 20,
            padding: '15px 20px',
            position: 'relative',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            border: `1px solid ${t.colors.gray[2]}`,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0)',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
            transition: 'all 0.15s ease-in-out',
            '> button.dnd-btn': {
              left: 0,
              top: '50%',
              height: 'auto',
              border: 'none',
              padding: '3px 4px',
              position: 'absolute',
              color: t.colors.gray[4],
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              transform: 'translateY(-50%)',
              backgroundColor: t.colors.gray[1],
              '> div > span > svg': {
                width: 4,
              },
            },
            '> .ct-item-name-wrapper': {
              gap: 5,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '> .mantine-Text-root': {
                color: '#000',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '21.6px',
              },
              '> button': {
                padding: 0,
                height: 'auto',
                color: '#000',
                border: 'none',
                backgroundColor: 'transparent!important',
              },
            },
            '> .ct-item-metadata': {
              gap: 5,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '> .sub-folds': {
                gap: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                '> .mantine-Text-root': {
                  color: '#000',
                  fontSize: '12px',
                  fontWeight: 400,
                  borderRadius: 100,
                  padding: '5px 10px',
                  lineHeight: '14.4px',
                  border: '2px solid #fff',
                  '&:nth-of-type(1)': {
                    backgroundColor: t.colors.blue[0],
                  },
                  '&:nth-of-type(2)': {
                    marginLeft: -9,
                    backgroundColor: t.colors.red[0],
                  },
                },
              },
              '> .item-count': {
                opacity: 0.3,
                color: '#000',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '18px',
              },
            },
          },
        },
      }}
    >
      <Button className="add-main-category" variant="default">
        <Text>Ana Kategori</Text>
        <Box>
          <CustomPlusIcon />
        </Box>
      </Button>
      <Box component="ul" className="ct-list">
        {categories.map((category, i) => (
          <Box tabIndex={0} component="li" key={`category-${i}`}>
            <Button variant="default" className="dnd-btn">
              <CustomVertical3DotsIcon />
            </Button>
            <Box className="ct-item-name-wrapper">
              <Text>{category.name}</Text>
              <Menu zIndex={9999} position="right">
                <Menu.Target>
                  <Button variant="default">
                    <CustomHorizontal3DotsIcon />
                  </Button>
                </Menu.Target>
                <CtMenu defaultValue={category.name} />
              </Menu>
            </Box>
            <Box className="ct-item-metadata">
              <Box className="sub-folds">
                <Text>{category.subCategories?.length || '0'} Alt Kıvrım</Text>
                <Text>{category.subCategories?.length || '0'} Kıvrım</Text>
              </Box>
              <Text className="item-count">{category.products?.length || '0'} Ürün</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
