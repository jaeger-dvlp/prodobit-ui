import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { ProdobitAppTheme as t } from '@/theme';
import { CustomPlusIcon } from '@/components/icons';

const mockFolderCt = [
  {
    id: 0,
    name: 'Kategori\nAdı',
    slug: 'all',
  },
  {
    id: 1,
    name: 'Kategori\nAdı',
    slug: 'mock-ct-1',
  },
  {
    id: 2,
    name: 'Kategori\nAdı',
    slug: 'mock-ct-2',
  },
  {
    id: 3,
    name: 'Kategori\nAdı',
    slug: 'mock-ct-3',
  },
];

function CtFolderFilter({
  categories,
  currentCategory,
  setCurrentCategory,
}: {
  categories: { id: number; name: string; slug: string }[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Box
      component="section"
      sx={{
        gap: 8,
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        component="ul"
        sx={{
          gap: 8,
          height: 'auto',
          width: 'auto',
          display: 'flex',
          overflowX: 'auto',
          flexDirection: 'row',
        }}
      >
        {categories.map((category, i) => (
          <Button
            component="li"
            key={`ct-fl-${i}`}
            variant="default"
            onClick={() => setCurrentCategory(category.slug)}
            sx={{
              gap: 11,
              height: 'auto',
              display: 'flex',
              fontSize: '12px',
              fontWeight: 400,
              borderRadius: 100,
              padding: '9px 18px',
              lineHeight: '14.4px',
              flexDirection: 'row',
              alignItems: 'center',
              color: t.colors.blue[7],
              justifyContent: 'center',
              transition: 'all 150ms ease-in-out',
              border: `1px solid ${t.colors.blue[0]}`,
              backgroundColor: `${
                currentCategory === category.slug ? t.colors.blue[0] : 'transparent'
              }!important`,
            }}
          >
            <Text
              mr={10}
              sx={{
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '18px',
              }}
            >
              {i < 10 ? `0${i + 1}` : i + 1}
            </Text>
            <Text sx={{ whiteSpace: 'pre-wrap' }}>
              {category.slug === 'all' ? 'Tüm\nKategoriler' : category.name}
            </Text>
          </Button>
        ))}
      </Box>
      <Button
        variant="default"
        sx={{
          gap: 11,

          height: 'auto',
          display: 'flex',
          fontSize: '12px',
          fontWeight: 400,
          borderRadius: 100,
          padding: '9px 18px',
          lineHeight: '14.4px',
          flexDirection: 'row',
          alignItems: 'center',
          color: t.colors.blue[7],
          minWidth: 'fit-content',
          justifyContent: 'center',
          transition: 'all 150ms ease-in-out',
          border: `1px solid ${t.colors.blue[0]}`,
        }}
      >
        <CustomPlusIcon width={24} height={24} style={{ marginRight: 10 }} />
        <Text sx={{ whiteSpace: 'pre-wrap' }}>{'Yeni\nEkle'}</Text>
      </Button>
    </Box>
  );
}

function EditItemDocs() {
  const [categories] = React.useState(mockFolderCt);
  const [currentCategory, setCurrentCategory] = React.useState('all');
  return (
    <>
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
        <CtFolderFilter
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </Box>
      <Box>Right Col</Box>
    </>
  );
}

export default EditItemDocs;
