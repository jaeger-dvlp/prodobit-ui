import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text } from '@mantine/core';
import {
  CustomHorizontal3DotsIcon,
  CustomPlusIcon,
  CustomVertical3DotsIcon,
} from '@/components/icons';
import { ItemCategory } from '@/views/items/list/WithItems';

type Props = {
  categories: ItemCategory[];
};

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
          <Box component="li" key={`category-${i}`}>
            <Button variant="default" className="dnd-btn">
              <CustomVertical3DotsIcon />
            </Button>
            <Box className="ct-item-name-wrapper">
              <Text>{category.name}</Text>
              <Button variant="default">
                <CustomHorizontal3DotsIcon />
              </Button>
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
