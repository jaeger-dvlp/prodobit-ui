import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { getRandomUUID } from '@/common/utils/misc';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Text, Title, createStyles } from '@mantine/core';
import { DownloadCloudIcon, ImageIcon, PenToolIcon } from '@/components/icons';

const motionProps = {
  component: motion.section,
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 20 },
  exit: { opacity: 0, y: 20, transition: { delay: 0 } },
  transition: {
    damping: 30,
    type: 'spring',
    stiffness: 200,
    delay: 0.3,
  },
};

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
      '&:hover': {
        opacity: 0.8,
      },
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
        opacity: `1 !important`,
        '& .category-btn-name': {
          color: t.colors.blue[7],
        },
      },
    },
  },
  imagesContent: {
    gap: 6,
    flex: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '> .product-image': {
      zIndex: 0,
      borderRadius: 15,
      objectFit: 'cover',
      aspectRatio: '0.92/1',
      objectPosition: 'center',
      width: 'calc(33% - 3px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        zIndex: 1,
        transform: 'scale(1.025)',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
      },
      [t.fn.smallerThan('lg')]: {
        width: '100%',
      },
    },
  },
  technicalDrawingsRoot: {
    gap: 70,
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  technicalDrawingsFiles: {
    gap: 10,
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '> .technical-drawing-file': {
      gap: 14,
      marginTop: 28,
      display: 'flex',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'stretch',
      width: 'calc(50% - 5px)',
      transition: 'all 0.2s ease',
      justifyContent: 'flex-start',
      backdropFilter: 'blur(19px)',
      padding: '0px 14px 12px 14px',
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
      filter: 'drop-shadow(0px 18px 22px rgba(0, 0, 0, 0.05))',
      boxShadow:
        '-0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
      '&:hover': {
        transform: 'scale(1.025)',
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
      },
      [t.fn.smallerThan('lg')]: {
        width: '100%',
      },
      '> .date': {
        gap: 10,
        display: 'flex',
        paddingTop: 14,
        alignItems: 'center',
        maxWidth: 'fit-content',
        flexDirection: 'column',
        justifyContent: 'stretch',
        '> .divider': {
          width: 1,
          opacity: 0.1,
          height: '100%',
          minHeight: 35,
          backgroundColor: '#000',
        },
        '> .date-text': {
          rotate: '180deg',
          fontSize: '12px',
          fontWeight: 400,
          color: t.colors.gray[5],
          writingMode: 'vertical-rl',
        },
      },
      '> .file': {
        gap: 25,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '> .top': {
          gap: 25,
          paddingTop: 14,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          '> .img': {
            width: 50,
            height: 55,
            marginTop: '-25px',
            position: 'relative',
            '> img': {
              zIndex: 2,
              width: '100%',
              height: '100%',
              borderRadius: 5,
              objectFit: 'cover',
              position: 'relative',
              objectPosition: 'center',
            },
            '> .blur-bg': {
              left: 0,
              zIndex: 1,
              bottom: -9,
              width: '90%',
              height: '90%',
              borderRadius: 5,
              filter: 'blur(7px)',
              position: 'absolute',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'transparent',
            },
          },
          '> .file-type, > .file-category': {
            fontWeight: 400,
            fontSize: '12px',
            color: t.colors.gray[5],
          },
        },
        '> .bottom': {
          gap: 10,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          '> .name': {
            fontWeight: 600,
            fontSize: '12px',
            color: t.colors.gray[9],
          },
          '> .download-btn': {
            height: 'auto',
            fontWeight: 400,
            fontSize: '12px',
            borderRadius: 10,
            padding: '6px 10px',
            color: t.colors.gray[6],
            transition: 'all 0.2s ease',
            backgroundColor: 'transparent',
            border: '1px solid rgba(0, 0, 0, 0.15)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.40)',
            },
            '> div > span': {
              gap: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              '> svg': {
                width: 16,
                height: 16,
              },
            },
          },
        },
      },
    },
  },
  technicalDrawingImages: {
    flex: 1,
    width: '100%',
    gap: '16px 10px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '> img': {
      borderRadius: 15,
      objectFit: 'cover',
      aspectRatio: '1.8/1',
      objectPosition: 'center',
      width: 'calc(50% - 5px)',
      transition: 'all 0.2s ease',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0)',
      '&:hover': {
        transform: 'scale(1.025)',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
      },
      [t.fn.smallerThan('lg')]: {
        width: '100%',
      },
    },
  },
});

function InnerImagesView() {
  const { classes } = InnerStyles();
  const [selectedImageCategory, setSelectedImageCategory] = React.useState<string>('all');

  return (
    <Box {...motionProps} className={classes.imagesRoot} key="inner-images-view">
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
      <AnimatePresence mode="popLayout">
        <Box
          {...motionProps}
          className={classes.imagesContent}
          key={`images-content-${selectedImageCategory}`}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <img
              alt="product"
              className="product-image"
              key={`product-image-${i}`}
              src="https://www.shutterstock.com/shutterstock/photos/1777871579/display_1500/stock-vector--d-illustration-of-beauty-product-ad-concept-of-natural-skin-care-dropper-bottle-mock-up-on-gray-1777871579.jpg"
            />
          ))}
        </Box>
      </AnimatePresence>
    </Box>
  );
}

function InnerTechnicalDrawingsView() {
  const { classes } = InnerStyles();

  return (
    <Box
      {...motionProps}
      key="inner-technical-drawings-view"
      className={classes.technicalDrawingsRoot}
    >
      <Box className={classes.technicalDrawingsFiles}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Box className="technical-drawing-file" key={`technical-drawing-file-${i}`}>
            <Box className="date">
              <Box className="divider" />
              <Text className="date-text">2023</Text>
            </Box>
            <Box className="file">
              <Box className="top">
                <Box className="img">
                  <Box
                    className="blur-bg"
                    style={{
                      backgroundImage: `url(https://www.shutterstock.com/shutterstock/photos/1777871579/display_1500/stock-vector--d-illustration-of-beauty-product-ad-concept-of-natural-skin-care-dropper-bottle-mock-up-on-gray-1777871579.jpg)`,
                    }}
                  />
                  <img
                    alt="product"
                    src="https://www.shutterstock.com/shutterstock/photos/1777871579/display_1500/stock-vector--d-illustration-of-beauty-product-ad-concept-of-natural-skin-care-dropper-bottle-mock-up-on-gray-1777871579.jpg"
                  />
                </Box>
                <Text className="file-type">PDF</Text>
                <Text className="file-category">Kategori</Text>
              </Box>
              <Box className="bottom">
                <Text className="name">Pdf Dosya Adı Buraya Kısa Bir Şekilde Gelecek</Text>
                <Button variant="default" className="download-btn">
                  <DownloadCloudIcon />
                  <Text>İndir</Text>
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={classes.technicalDrawingImages}>
        {Array.from({ length: 10 }).map((_, i) => (
          <img
            alt="product"
            key={`technical-drawing-image-${i}`}
            src="https://www.shutterstock.com/shutterstock/photos/1777871579/display_1500/stock-vector--d-illustration-of-beauty-product-ad-concept-of-natural-skin-care-dropper-bottle-mock-up-on-gray-1777871579.jpg"
          />
        ))}
      </Box>
    </Box>
  );
}

const innerViewByCategory = {
  images: InnerImagesView,
  'technical-drawings': InnerTechnicalDrawingsView,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PaProductionItemFilesContent({ item }: Props) {
  const { classes } = styles();
  const [isViewChanging, setIsViewChanging] = React.useState<boolean>(false);
  const [selectedFilesCategory, setSelectedFilesCategory] = React.useState<string>('images');

  const InnerView = innerViewByCategory[selectedFilesCategory];

  React.useEffect(() => {
    setIsViewChanging(true);
    setTimeout(() => {
      setIsViewChanging(false);
    }, 500);
  }, [selectedFilesCategory]);

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
            disabled={isViewChanging}
            onClick={() => setSelectedFilesCategory('images')}
            data-selected-category={selectedFilesCategory === 'images'}
          >
            <ImageIcon />
            <Text>Görseller</Text>
          </Button>
          <Button
            variant="default"
            className="heading-btn"
            disabled={isViewChanging}
            onClick={() => setSelectedFilesCategory('technical-drawings')}
            data-selected-category={selectedFilesCategory === 'technical-drawings'}
          >
            <PenToolIcon />
            <Text>Teknik Çizim</Text>
          </Button>
        </Box>
      </Box>
      <AnimatePresence mode="popLayout">
        <InnerView key={`inner-view-${selectedFilesCategory}`} />
      </AnimatePresence>
    </Box>
  );
}

export default PaProductionItemFilesContent;
