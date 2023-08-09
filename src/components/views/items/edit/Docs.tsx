/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper/modules';
import { ProdobitAppTheme as t } from '@/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Image, Text } from '@mantine/core';
import {
  CustomPlusIcon,
  DownloadCloudIcon,
  FolderIllustration,
  ImageIcon,
  PGCHleft,
  PGCHright,
  PenToolIcon,
  UploadDocumentIcon,
  UploadImageICon,
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
              border: 'none',
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
                backgroundColor: spec.slug === slug ? t.colors.blue[1] : 'transparent',
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
              border: 'none',
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
                backgroundColor: spec.slug === slug ? t.colors.blue[1] : 'transparent',
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
                        <Text
                          sx={{
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '14.4px',
                            color: t.colors.gray[5],
                          }}
                        >
                          PDF
                        </Text>
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
