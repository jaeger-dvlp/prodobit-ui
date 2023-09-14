import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text, Title, createStyles } from '@mantine/core';
import { ImageIcon, PenToolIcon } from '@/components/icons';
import { getRandomUUID } from '@/common/utils/misc';

type Props = {
  item: any;
};

const styles = createStyles({
  root: {
    gap: 30,
    width: '100%',
    paddingTop: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  headingGroup: {
    gap: 5,
    display: 'flex',
    paddingBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
    '> .heading-buttons': {
      gap: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '> .heading-btn': {
        border: 'none',
        height: 'auto',
        fontWeight: 500,
        fontSize: '15px',
        borderRadius: 100,
        padding: '9px 18px',
        color: t.colors.gray[8],
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(74px)',
        backgroundColor: 'transparent',
        boxShadow:
          '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0) inset',
        '> div > span': {
          gap: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '> svg': {
            width: 16,
            height: 16,
            color: t.colors.blue[5],
          },
        },
        "&[data-selected-category='true']": {
          color: t.colors.blue[5],
          backgroundColor: 'rgba(255, 255, 255, 0.40)',
          boxShadow:
            '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
        },
      },
    },
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    color: t.colors.gray[9],
  },
});

const imageCategories = [
  {
    slug: 'all',
    id: getRandomUUID(),
    name: 'Tüm\nGörseller',
  },
  {
    slug: 'product',
    id: getRandomUUID(),
    name: 'Kategori\nAdı',
  },
  {
    slug: 'product2',
    id: getRandomUUID(),
    name: 'Kategori\nAdı',
  },
  {
    slug: 'product3',
    id: getRandomUUID(),
    name: 'Kategori\nAdı',
  },
  {
    slug: 'product4',
    id: getRandomUUID(),
    name: 'Kategori\nAdı',
  },
];

const InnerStyles = createStyles({
  imagesRoot: {
    gap: 30,
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  imagesCategories: {
    gap: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '> .category-btn': {
      opacity: 0.5,
      border: 'none',
      height: 'auto',
      borderRadius: 100,
      color: t.colors.blue[5],
      transition: 'all 0.2s ease',
      backdropFilter: 'blur(74px)',
      padding: '10px 10px 20px 10px',
      backgroundColor: 'rgba(255, 255, 255, 0.40)',
      boxShadow:
        '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
      '> div > span': {
        gap: 11,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '> .category-btn-index-container': {
          display: 'flex',
          fontWeight: 500,
          minWidth: '62px',
          fontSize: '18px',
          minHeight: '62px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '> .category-btn-name': {
          fontWeight: 400,
          fontSize: '12px',
          textAlign: 'center',
          whiteSpace: 'pre-wrap',
          color: t.colors.blue[3],
          transition: 'all 0.2s ease',
        },
      },
      "&[data-selected-category='true']": {
        opacity: 1,
        '& .category-btn-name': {
          color: t.colors.blue[7],
        },
      },
    },
  },
});

function InnerImagesView() {
  const { classes } = InnerStyles();
  const [selectedImageCategory, setSelectedImageCategory] = React.useState<string>('all');

  return (
    <Box className={classes.imagesRoot}>
      <Box className={classes.imagesCategories}>
        {imageCategories.map((category, i) => (
          <Button
            key={category.id}
            variant="default"
            className="category-btn"
            onClick={() => setSelectedImageCategory(category.slug)}
            data-selected-category={selectedImageCategory === category.slug}
          >
            <Box className="category-btn-index-container">
              <Text>{i + 1 >= 10 ? i + 1 : `0${i + 1}`}</Text>
            </Box>
            <Text className="category-btn-name">{category.name}</Text>
          </Button>
        ))}
      </Box>
    </Box>
  );
}

function InnerTechnicalDrawingsView() {
  const { classes } = InnerStyles();

  return <Box>Technical Drawings</Box>;
}

const innerViewByCategory = {
  images: InnerImagesView,
  'technical-drawings': InnerTechnicalDrawingsView,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PaProductionItemFilesContent({ item }: Props) {
  const { classes } = styles();
  const [selectedFilesCategory, setSelectedFilesCategory] = React.useState<string>('images');

  const InnerView = innerViewByCategory[selectedFilesCategory];

  return (
    <Box className={classes.root}>
      <Box className={classes.headingGroup}>
        <Title className={classes.pageHeading} order={1}>
          Dosyalar
        </Title>
        <Box className="heading-buttons">
          <Button
            variant="default"
            className="heading-btn"
            onClick={() => setSelectedFilesCategory('images')}
            data-selected-category={selectedFilesCategory === 'images'}
          >
            <ImageIcon />
            <Text>Görseller</Text>
          </Button>
          <Button
            variant="default"
            className="heading-btn"
            onClick={() => setSelectedFilesCategory('technical-drawings')}
            data-selected-category={selectedFilesCategory === 'technical-drawings'}
          >
            <PenToolIcon />
            <Text>Teknik Çizim</Text>
          </Button>
        </Box>
      </Box>
      <InnerView key={`inner-view-${selectedFilesCategory}`} />
    </Box>
  );
}

export default PaProductionItemFilesContent;
