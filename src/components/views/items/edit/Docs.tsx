/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Dropzone } from '@mantine/dropzone';
import { ProdobitAppTheme as t } from '@/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Image, Menu, Text, TextInput } from '@mantine/core';
import {
  PGCHleft,
  ImageIcon,
  PGCHright,
  PenToolIcon,
  CustomPlusIcon,
  UploadCloudIcon,
  UploadImageICon,
  CustomChevronRight,
  DownloadCloudIcon,
  FolderIllustration,
  UploadDocumentIcon,
} from '@/components/icons';

import 'swiper/css';

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

function AddDocMenu() {
  const mockDocCategories = Array.from({ length: 6 }).map((_, i) => ({
    name: `Kategori Adı ${i + 1}`,
    docCount: 15,
  }));
  const [SC, setSc] = React.useState(0);
  const [addNewView, setAddNewView] = React.useState<boolean>(false);

  return (
    <Menu.Dropdown
      sx={{
        margin: 0,
        padding: 0,
        maxWidth: 800,
        border: 'none',
        display: 'flex',
        marginTop: -60,
        boxShadow: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& .menu-inner': {
          gap: 48,
          minWidth: 800,
          padding: 30,
          width: '100%',
          minHeight: 200,
          display: 'flex',
          borderRadius: 20,
          paddingBottom: 60,
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'stretch',
          backgroundColor: '#fff',
          justifyContent: 'stretch',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '& .menu-column': {
            width: '50%',
            height: 390,
            display: 'flex',
            overflowY: 'auto',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            '&.categories': {
              gap: 0,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .search-bar': {
                top: 0,
                gap: 10,
                zIndex: 2,
                display: 'flex',
                paddingBottom: 14,
                position: 'sticky',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#fff',
                justifyContent: 'stretch',
                '& .search-input': {
                  width: '100%',
                  '& input': {
                    width: '100%',
                    border: 'none',
                    fontWeight: 500,
                    fontSize: '12px',
                    borderRadius: 10,
                    padding: '14px 20px',
                    color: t.colors.gray[5],
                    backgroundColor: t.colors.gray[1],
                  },
                },
                '& .add-new-btn': {
                  border: 'none',
                  height: 'auto',
                  padding: '6px',
                  borderRadius: 10,
                  color: t.colors.gray[9],
                  backgroundColor: `${t.colors.gray[1]}!important`,
                  '& svg': {
                    width: 24,
                    height: 24,
                  },
                },
              },
              '& .category-elm-container': {
                gap: 4,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .category-elm': {
                  gap: 18,
                  opacity: 0.5,
                  display: 'flex',
                  borderRadius: 10,
                  cursor: 'pointer',
                  padding: '14px 20px',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  transition: 'all 200ms ease-in-out',
                  border: `1px solid ${t.colors.green[1]}`,
                  "&[data-selected='false']": {
                    '&:hover': {
                      opacity: 1,
                    },
                  },
                  "&[data-selected='true']": {
                    opacity: 1,
                    '& .arrow-btn': {
                      opacity: 1,
                      transform: 'translateX(0px)',
                    },
                  },
                  '& .arrow-btn': {
                    padding: 5,
                    border: 'none',
                    height: 'auto',
                    color: t.colors.gray[9],
                    transform: 'translateX(-10px)',
                    transition: 'all 200ms ease-in-out',
                    backgroundColor: 'transparent!important',
                    opacity: 0,
                    '& svg': {
                      width: 24,
                      height: 24,
                    },
                  },
                  '& .category-content': {
                    gap: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    '& .category-name': {
                      fontWeight: 500,
                      fontSize: '12px',
                      color: t.colors.blue[7],
                    },
                    '& .category-docs-count': {
                      lineHeight: 1,
                      fontWeight: 400,
                      fontSize: '12px',
                      borderRadius: 100,
                      padding: '5px 6px',
                      color: t.colors.gray[9],
                      border: `1px solid ${t.colors.gray[3]}`,
                    },
                  },
                },
              },
            },
            '&.category-docs': {
              gap: 15,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .category-header': {
                gap: 5,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .category-name': {
                  opacity: 0.5,
                  lineHeight: 1,
                  fontSize: '12px',
                  fontWeight: 500,
                  color: t.colors.blue[7],
                },
                '& .category-label': {
                  lineHeight: 1,
                  fontSize: '22px',
                  fontWeight: 500,
                  color: t.colors.gray[9],
                },
              },
              '& .section-title': {
                opacity: 0.5,
                fontSize: '15px',
                fontWeight: 500,
                color: t.colors.gray[6],
              },
              '& .category-name-group': {
                gap: 25,
                paddingTop: 10,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .doc-name-input input': {
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  fontWeight: 500,
                  borderRadius: 0,
                  fontSize: '31px',
                  paddingBottom: 18,
                  color: t.colors.gray[9],
                  backgroundColor: 'transparent',
                  borderBottom: `1px solid ${t.colors.gray[3]}`,
                  '&::placeholder': { color: t.colors.gray[9] },
                },
              },
              '& .category-file-group': {
                gap: 10,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .doc-dropzone': {
                  padding: 20,
                  border: 'none',
                  display: 'flex',
                  borderRadius: 20,
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: t.colors.gray[1],
                  '& .mantine-Dropzone-inner': {
                    gap: 20,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '& svg': {
                      width: 40,
                      height: 40,
                      color: '#FF7B7B',
                    },
                    '& .dropzone-label': {
                      opacity: 0.5,
                      lineHeight: 1,
                      fontWeight: 400,
                      fontSize: '12px',
                      color: t.colors.gray[9],
                    },
                    '& .dropzone-types': {
                      gap: 10,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      '& .mantine-Text-root': {
                        fontWeight: 400,
                        fontSize: '15px',
                        color: t.colors.gray[9],
                        '&:not(:last-child)::after': {
                          opacity: 0.2,
                          marginLeft: 10,
                          position: 'relative',
                          content: '"/"',
                          fontWeight: 400,
                          fontSize: '15px',
                          color: t.colors.gray[9],
                        },
                      },
                    },
                  },
                  '&:hover': {
                    backgroundColor: t.colors.gray[2],
                  },
                },
              },
            },
            '&.add-new': {
              gap: 50,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              '& .add-new-header': {
                gap: 5,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .label': {
                  opacity: 0.5,
                  lineHeight: 1,
                  fontSize: '12px',
                  fontWeight: 500,
                  color: t.colors.blue[7],
                },
                '& .title': {
                  lineHeight: 1,
                  fontSize: '22px',
                  fontWeight: 500,
                  color: t.colors.gray[9],
                },
              },
              '& .section-title': {
                opacity: 0.5,
                fontSize: '15px',
                fontWeight: 500,
                color: t.colors.gray[6],
              },
              '& .category-name-group': {
                gap: 25,
                paddingTop: 10,
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '& .category-name-input input': {
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  fontWeight: 500,
                  borderRadius: 0,
                  fontSize: '31px',
                  paddingBottom: 18,
                  color: t.colors.gray[9],
                  backgroundColor: 'transparent',
                  borderBottom: `1px solid ${t.colors.gray[3]}`,
                  '&::placeholder': { color: t.colors.gray[9] },
                },
              },
              '& .save-btn': {
                height: 'auto',
                lineHeight: 1,
                fontSize: '22px',
                fontWeight: 400,
                borderRadius: 20,
                textAlign: 'center',
                padding: '20px 10px',
                color: t.colors.green[6],
                backgroundColor: 'transparent',
                transition: 'all 0.2s ease-in-out',
                border: `1px solid ${t.colors.green[6]}`,
                boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
                '&:hover': {
                  backgroundColor: t.colors.green[1],
                },
              },
            },
          },
          '& .menu-save-btn': {
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%) translateY(50%)',
            position: 'absolute',
            minWidth: 417,
            maxWidth: 417,
            '& .mantine-Button-root': {
              width: '100%',
              border: 'none',
              height: 'auto',
              fontSize: '22px',
              fontWeight: 400,
              borderRadius: 20,
              padding: '25px 10px',
              color: t.colors.gray[0],
              backgroundColor: t.colors.green[6],
              textAlign: 'center',
              boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
              '> div > span': {
                gap: 20,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                '& svg': {
                  width: 24,
                  height: 24,
                },
              },
            },
          },
        },
      }}
    >
      <Box className="menu-inner">
        <Box className="menu-column categories">
          <Box className="search-bar">
            <TextInput className="search-input" placeholder="Kategori Ara" />
            <Button
              onClick={() => setAddNewView(!addNewView)}
              variant="default"
              className="add-new-btn"
            >
              <CustomPlusIcon />
            </Button>
          </Box>
          <Box className="category-elm-container">
            {mockDocCategories.map((category, i) => (
              <Box
                data-selected={SC === i}
                onClick={() => {
                  if (addNewView) setAddNewView(false);
                  setSc(i);
                }}
                className="category-elm"
                key={`ct-elm-${i}`}
              >
                <Box className="category-content">
                  <Text className="category-name">{category.name}</Text>
                  <Text className="category-docs-count">Toplam {category.docCount} Dosya</Text>
                </Box>
                <Button variant="default" className="arrow-btn">
                  <CustomChevronRight />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
        <AnimatePresence mode="popLayout">
          {!addNewView && (
            <Box
              exit={{ opacity: 0 }}
              component={motion.div}
              key={`for-ct-elm-${SC}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="menu-column category-docs"
              transition={{ damping: 30, type: 'spring', stiffness: 200 }}
            >
              <Box className="category-header">
                <Text className="category-name">{mockDocCategories[SC].name} için</Text>
                <Text className="category-label">Döküman Ekle</Text>
              </Box>
              <Box className="category-name-group">
                <Text className="section-title">Dosya Adı</Text>
                <TextInput className="doc-name-input" placeholder="Text" />
              </Box>
              <Box className="category-file-group">
                <Text className="section-title">Dosya Yükleyin</Text>
                <Dropzone className="doc-dropzone" onDrop={() => null}>
                  <UploadCloudIcon />
                  <Text className="dropzone-label">DESTEKLENEN İÇERİKLER</Text>
                  <Text className="dropzone-types">
                    <Text span>Word</Text>
                    <Text span>Excel</Text>
                    <Text span>PDF</Text>
                  </Text>
                </Dropzone>
              </Box>
            </Box>
          )}
          {addNewView && (
            <Box
              key="add-new-ct"
              exit={{ opacity: 0 }}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="menu-column add-new"
              transition={{ damping: 30, type: 'spring', stiffness: 200 }}
            >
              <Box className="add-new-header">
                <Text className="label">Dökümanlar İçin</Text>
                <Text className="title">Yeni Kategori Ekle</Text>
              </Box>
              <Box className="category-name-group">
                <Text className="section-title">Kategori Adı Belirleyin</Text>
                <TextInput className="category-name-input" placeholder="Text" />
              </Box>
              <Button variant="default" className="save-btn">
                <Text>Kategoriyi Kaydet</Text>
              </Button>
            </Box>
          )}
        </AnimatePresence>
        <Menu.Item closeMenuOnClick className="menu-save-btn">
          <Button variant="default">
            <CustomPlusIcon />
            <Text>Döküman Ekle</Text>
          </Button>
        </Menu.Item>
      </Box>
    </Menu.Dropdown>
  );
}

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

function FileCtFilter({
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
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="ul"
        sx={{
          gap: 8,
          margin: 0,
          padding: 0,
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
              padding: '5px 18px',
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
              {category.slug === 'all' ? 'Tüm\nDosyalar' : category.name}
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
          padding: '5px 18px',
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

function FilesByCategory() {
  return (
    <Box
      sx={{
        gap: 40,
        padding: 10,
        width: '100%',
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        component="ul"
        sx={{
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px 20px',
          listStyle: 'none',
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={`file-${i}`}
            sx={{
              margin: 0,
              width: '100%',
              height: 'auto',
              maxWidth: '150px',
              padding: '15px 28px',
              position: 'relative',
              aspectRatio: '0.75/1',
              transition: 'all 150ms ease-in-out',
              ':hover': {
                transform: 'translateY(-5px)',
                '.fl-ill': {
                  fill: 'rgba(0, 0, 0, 0.05)!important',
                },
              },
            }}
          >
            <FolderIllustration
              className="fl-ill"
              style={{
                top: 0,
                left: 0,
                fill: '#fff',
                minWidth: '100%',
                minHeight: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                zIndex: 1,
                color: 'rgba(0, 0, 0, 0.90)',
                transition: 'all 150ms ease-in-out',
              }}
            />
            <Box
              sx={{
                zIndex: 2,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                position: 'relative',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  fontWeight: 400,
                  display: 'flex',
                  fontSize: '12px',
                  alignItems: 'start',
                  lineHeight: '14.4px',
                  flexDirection: 'row',
                  color: t.colors.gray[6],
                  justifyContent: 'space-between',
                }}
              >
                <Text>PDF</Text>
                <img
                  src="https://picsum.photos/40/40"
                  width={40}
                  height={40}
                  alt="pdf"
                  style={{
                    borderRadius: 5,
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'translateY(-35%)',
                  }}
                />
              </Box>
              <Text sx={{ color: 'black', fontWeight: 600 }}>PDF Name</Text>
              <Button
                variant="default"
                sx={{
                  gap: 10,
                  margin: 0,
                  padding: 0,
                  border: 'none',
                  display: 'flex',
                  fontWeight: 400,
                  lineHeight: '14.4px',
                  alignItems: 'center',
                  flexDirection: 'row',
                  color: t.colors.gray[7],
                  justifyItems: 'flex-start',
                  backgroundColor: 'transparent!important',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <DownloadCloudIcon width={16} height={16} />
                <Text ml={10}>İndir</Text>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Menu position="top">
        <Menu.Target>
          <Button
            variant="default"
            sx={{
              gap: 22,
              width: '100%',
              color: '#000',
              height: 'auto',
              display: 'flex',
              fontWeight: 400,
              borderRadius: 15,
              fontSize: '22px',
              padding: '20px 10px',
              alignItems: 'center',
              border: '1px solid #000 ',
              justifyContent: 'center',
              backgroundColor: 'transparent!important',
            }}
          >
            <UploadDocumentIcon width={24} height={24} />
            <Text color="currentColor" ml={22}>
              Döküman Ekle
            </Text>
          </Button>
        </Menu.Target>
        <AddDocMenu />
      </Menu>
    </Box>
  );
}

function MockImageSpecBox() {
  return (
    <Box
      {...motionProps}
      sx={{
        gap: 40,
        padding: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        component="ul"
        sx={{
          gap: 10,
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          alignItems: 'start',
          justifyContent: 'center',
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <Image
            w="100%"
            maw={160}
            radius={15}
            key={`image-${i}`}
            sx={{
              borderRadius: 15,
              transition: 'all 150ms ease-in-out',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0)',
              ':hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
              },
            }}
            styles={{
              image: {
                aspectRatio: '1/1',
              },
            }}
            src="https://picsum.photos/200/200"
          />
        ))}
      </Box>
      <Button
        variant="default"
        sx={{
          gap: 22,
          width: '100%',
          color: '#000',
          height: 'auto',
          display: 'flex',
          fontWeight: 400,
          borderRadius: 15,
          fontSize: '22px',
          padding: '20px 10px',
          alignItems: 'center',
          border: '1px solid #000 ',
          justifyContent: 'center',
          backgroundColor: 'transparent!important',
        }}
      >
        <UploadImageICon width={24} height={24} />
        <Text color="currentColor" ml={22}>
          Görsel Ekle
        </Text>
      </Button>
    </Box>
  );
}

function SpecImages() {
  const ImagesSpecs = [
    {
      text: 'Tüm\nGörseller',
      slug: 'all',
      component: () => <MockImageSpecBox key="all" />,
    },
    {
      text: 'Kategori\nAdı',
      slug: 'mock-ct-0',
      component: () => <MockImageSpecBox key="mock-ct-0" />,
    },
    {
      text: 'Kategori\nAdı',
      slug: 'mock-ct-1',
      component: () => <MockImageSpecBox key="mock-ct-1" />,
    },
    {
      text: 'Kategori\nAdı',
      slug: 'mock-ct-2',
      component: () => <MockImageSpecBox key="mock-ct-2" />,
    },
    {
      text: 'Kategori\nAdı',
      slug: 'mock-ct-3',
      component: () => <MockImageSpecBox key="mock-ct-3" />,
    },
    {
      icon: CustomPlusIcon,
      text: 'Yeni\nEkle',
      slug: 'add-new',
      component: () => <MockImageSpecBox key="add-new" />,
    },
  ];

  const [spec, setSpec] = React.useState(ImagesSpecs[0]);
  const SpecComp = spec.component;

  return (
    <Box {...motionProps}>
      <Box
        component="ul"
        sx={{
          gap: 10,
          margin: 0,
          padding: 0,
          display: 'flex',
          overflowX: 'auto',
          flexDirection: 'row',
        }}
      >
        {ImagesSpecs.map(({ text, slug, icon: Icon }, index) => (
          <Box
            component="button"
            onClick={() => setSpec(ImagesSpecs[index])}
            key={`local-spec-${index}`}
            sx={{
              gap: 11,
              padding: 10,
              maxWidth: 78,
              width: '100%',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              fontWeight: 400,
              fontSize: '12px',
              borderRadius: 100,
              paddingBottom: 20,
              alignItems: 'center',
              lineHeight: '14.4px',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 150ms ease-in-out',
              border: `1px solid ${t.colors.blue[0]}`,
              color: spec.slug === slug ? t.colors.blue[7] : t.colors.blue[3],
              backgroundColor: `${spec.slug === slug ? t.colors.blue[0] : 'transparent'}!important`,
              svg: {
                width: 24,
                height: 24,
                transition: 'all 150ms ease-in-out',
                color: spec.slug === slug ? t.colors.blue[7] : t.colors.blue[3],
              },
            }}
          >
            <Box
              sx={{
                width: 62,
                height: 62,
                maxWidth: 62,
                maxHeight: 62,
                display: 'flex',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 150ms ease-in-out',
                backgroundColor: spec.slug === slug ? t.colors.blue[1] : t.colors.blue[0],
              }}
            >
              {(() => {
                if (Icon) {
                  return <Icon />;
                }

                return (
                  <Text
                    sx={{
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: '21.6px',
                      color: spec.slug === text ? t.colors.blue[7] : t.colors.blue[3],
                    }}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </Text>
                );
              })()}
            </Box>
            <Text sx={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{text}</Text>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          marginTop: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <SpecComp />
      </Box>
    </Box>
  );
}

function SpecTechnicalDraws() {
  const ImagesSpecs = [
    {
      text: 'Tüm\nGörseller',
      slug: 'all',
    },
    {
      text: 'Kategori\nAdı',
      slug: 'mock-ct-0',
    },
    {
      text: 'Kategori\nAdı',
      slug: 'mock-ct-1',
    },
    {
      icon: CustomPlusIcon,
      text: 'Yeni\nEkle',
      slug: 'add-new',
    },
  ];

  const [spec, setSpec] = React.useState(ImagesSpecs[0]);

  return (
    <Box {...motionProps}>
      <Box
        component="ul"
        sx={{
          gap: 10,
          margin: 0,
          padding: 0,
          display: 'flex',
          overflowX: 'auto',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {ImagesSpecs.map(({ text, slug, icon: Icon }, index) => (
          <Box
            component="button"
            onClick={() => setSpec(ImagesSpecs[index])}
            key={`local-spec-${index}`}
            sx={{
              gap: 11,
              padding: 10,
              maxWidth: 78,
              width: '100%',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              fontWeight: 400,
              fontSize: '12px',
              borderRadius: 100,
              paddingBottom: 20,
              alignItems: 'center',
              lineHeight: '14.4px',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 150ms ease-in-out',
              border: `1px solid ${t.colors.blue[0]}`,
              color: spec.slug === slug ? t.colors.blue[7] : t.colors.blue[3],
              backgroundColor: `${spec.slug === slug ? t.colors.blue[0] : 'transparent'}!important`,
              svg: {
                width: 24,
                height: 24,
                transition: 'all 150ms ease-in-out',
                color: spec.slug === slug ? t.colors.blue[7] : t.colors.blue[3],
              },
            }}
          >
            <Box
              sx={{
                width: 62,
                height: 62,
                maxWidth: 62,
                maxHeight: 62,
                display: 'flex',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 150ms ease-in-out',
                backgroundColor: spec.slug === slug ? t.colors.blue[1] : t.colors.blue[0],
              }}
            >
              {(() => {
                if (Icon) {
                  return <Icon />;
                }

                return (
                  <Text
                    sx={{
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: '21.6px',
                      color: spec.slug === text ? t.colors.blue[7] : t.colors.blue[3],
                    }}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </Text>
                );
              })()}
            </Box>
            <Text sx={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{text}</Text>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          marginTop: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <Box
          {...motionProps}
          sx={{
            gap: 10,
            padding: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              gap: 23,
              padding: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              sx={{
                width: '100%',
                padding: '0px 35px',
              }}
            >
              <Box
                sx={{
                  gap: 5,
                  padding: 0,
                  width: '100%',
                  display: 'flex',
                  paddingBottom: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${t.colors.gray[3]}`,
                }}
              >
                <Text
                  sx={{
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '14.4px',
                    color: t.colors.gray[9],
                  }}
                >
                  Dökümanlar
                </Text>
                <Box
                  sx={{
                    gap: 15,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box
                    sx={{
                      gap: 3,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      variant="default"
                      className="doc-slider-left"
                      sx={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                        padding: '3px 10px',
                        color: t.colors.gray[6],
                        backgroundColor: '#fff!important',
                        border: `1px solid ${t.colors.gray[4]}`,
                      }}
                    >
                      <PGCHleft width={15} height={15} />
                    </Button>
                    <Button
                      variant="default"
                      className="doc-slider-right"
                      sx={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                        padding: '3px 10px',
                        color: t.colors.gray[6],
                        backgroundColor: '#fff!important',
                        border: `1px solid ${t.colors.gray[4]}`,
                      }}
                    >
                      <PGCHright width={15} height={15} />
                    </Button>
                  </Box>
                  <Button
                    variant="default"
                    sx={{
                      color: '#fff',
                      height: 'auto',
                      border: 'none',
                      borderRadius: 100,
                      padding: '3px 10px',
                      backgroundColor: '#000!important',
                    }}
                  >
                    <CustomPlusIcon width={15} height={15} />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Swiper
              loop
              slidesPerView={2}
              spaceBetween={25}
              modules={[Navigation]}
              navigation={{
                prevEl: '.doc-slider-left',
                nextEl: '.doc-slider-right',
              }}
              style={{
                margin: 0,
                width: '100%',
                padding: '20px 20px 30px 20px',
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <SwiperSlide
                  key={`slide-doc-${i}`}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      gap: 14,
                      padding: 10,
                      width: '100%',
                      height: '100%',
                      minHeight: 110,
                      display: 'flex',
                      borderRadius: 15,
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      backgroundColor: '#fff',
                      transition: 'all 0.15s ease',
                      boxShadow: '0px 17px 20px rgba(48, 57, 104, 0.15)',
                      ':hover': {
                        backgroundColor: t.colors.gray[2],
                      },
                    }}
                  >
                    <Box
                      sx={{
                        gap: 10,
                        margin: 0,
                        padding: 0,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          width: 1,
                          opacity: 0.1,
                          height: '100%',
                          minHeight: 35,
                          backgroundColor: '#000',
                        }}
                      />
                      <Text
                        sx={{
                          rotate: '180deg',
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '14.4px',
                          color: t.colors.gray[5],
                          writingMode: 'vertical-rl',
                        }}
                      >
                        2023
                      </Text>
                    </Box>
                    <Box
                      sx={{
                        gap: 15,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'stretch',
                      }}
                    >
                      <Box
                        sx={{
                          gap: 25,
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Image
                          src="https://picsum.photos/200/200"
                          width="100%"
                          height="100%"
                          maw={50}
                          mah={55}
                          radius={5}
                          mt="-15%"
                          fit="cover"
                          sx={{
                            borderRadius: 5,
                            boxShadow: '0px 17px 14px rgba(48, 57, 104, 0.15)',
                          }}
                        />
                        <Box
                          sx={{
                            gap: 3,
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <Text
                            sx={{
                              fontWeight: 400,
                              fontSize: '12px',
                              borderRadius: 50,
                              padding: '5px 10px',
                              lineHeight: '14.4px',
                              color: t.colors.gray[5],
                              backgroundColor: t.colors.gray[2],
                            }}
                          >
                            PDF
                          </Text>
                          <Text
                            sx={{
                              fontWeight: 400,
                              fontSize: '12px',
                              borderRadius: 50,
                              padding: '5px 10px',
                              lineHeight: '14.4px',
                              color: t.colors.gray[5],
                              backgroundColor: t.colors.gray[2],
                            }}
                          >
                            Kategori
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          gap: 36,
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-end',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text
                          sx={{
                            color: '#000',
                            fontWeight: 600,
                            fontSize: '12px',
                            lineHeight: '14.4px',
                          }}
                        >
                          Pdf Dosya Adı Buraya Kısa Bir Şekilde Gelecek
                        </Text>
                        <Button
                          sx={{
                            height: 'auto',
                            display: 'flex',
                            borderRadius: 10,
                            padding: '6px 10px',
                            alignItems: 'center',
                            color: t.colors.gray[6],
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            transition: 'all 0.15s ease-in-out',
                            border: '1px solid rgba(0, 0, 0, 0.15)',
                            ':hover': {
                              backgroundColor: t.colors.gray[3],
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <DownloadCloudIcon width={16} height={16} />
                            <Text mt={2}>İndir</Text>
                          </Box>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box
            component="ul"
            sx={{
              gap: 10,
              margin: 0,
              padding: 30,
              marginTop: 50,
              paddingTop: 0,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              alignItems: 'start',
              justifyContent: 'center',
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <Image
                w="100%"
                maw={215}
                radius={15}
                key={`image-${i}`}
                sx={{
                  borderRadius: 15,
                  transition: 'all 150ms ease-in-out',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0)',
                  ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  },
                }}
                styles={{
                  image: {
                    aspectRatio: '1.8/1',
                  },
                }}
                src="https://picsum.photos/200/200"
              />
            ))}
          </Box>
          <Button
            variant="default"
            sx={{
              gap: 22,
              width: '100%',
              color: '#000',
              height: 'auto',
              display: 'flex',
              fontWeight: 400,
              borderRadius: 15,
              fontSize: '22px',
              padding: '20px 10px',
              alignItems: 'center',
              border: '1px solid #000 ',
              justifyContent: 'center',
              backgroundColor: 'transparent!important',
            }}
          >
            <UploadImageICon width={24} height={24} />
            <Text color="currentColor" ml={22}>
              Görsel Ekle
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const SpecButtons = [
  {
    icon: ImageIcon,
    text: 'Görseller',
    component: SpecImages,
  },
  {
    icon: PenToolIcon,
    text: 'Teknik Çizim',
    component: SpecTechnicalDraws,
  },
];

function EditItemDocs() {
  const [categories] = React.useState(mockFolderCt);
  const [currentCategory, setCurrentCategory] = React.useState('all');
  const [spec, setSpec] = React.useState(SpecButtons[0]);

  const SpecComp = spec.component;
  return (
    <>
      <Box
        component="section"
        sx={{
          gap: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <FileCtFilter
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <FilesByCategory />
      </Box>
      <Box
        sx={{
          gap: 30,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            flexDirection: 'row',
            alignItems: 'center',
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
                width: 'fit-content',
                flexDirection: 'row',
                transition: 'all 150ms ease-in-out',
                backgroundColor: `${
                  spec.text === text ? t.colors.blue[0] : 'transparent'
                }!important`,
                color: spec.text === text ? t.colors.blue[5] : t.colors.gray[8],
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
        <SpecComp />
      </Box>
    </>
  );
}

export default EditItemDocs;
