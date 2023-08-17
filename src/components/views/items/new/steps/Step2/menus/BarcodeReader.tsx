import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Menu, Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';

import {
  CustomCameraIcon,
  CustomBarcodeLoader,
  CustomSmoothTooltipIllustration,
} from '@/components/icons';

function ItemCodeReader() {
  const [mockStep, setMockStep] = React.useState(0);

  const increaseMockStep = () => {
    const maxStep = 3;
    setMockStep((s) => (s + 1 > maxStep ? 0 : s + 1));
  };

  const stepMotionProps = {
    exit: { opacity: 0, scale: 0.9, height: '150px' },
    initial: { opacity: 0, scale: 0.9, height: '150px' },
    animate: { opacity: 1, scale: 1, height: 'fit-content' },
    transition: { ease: 'anticipate', duration: 0.4 },
  };

  return (
    <Menu.Dropdown
      onClick={increaseMockStep}
      sx={{
        gap: 0,
        padding: 0,
        // TODO
        cursor: 'pointer',
        // TODO
        width: 'fit-content',
        display: 'flex',
        borderRadius: 40,
        marginLeft: -40,
        position: 'absolute',
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          right: 0,
          top: '50%',
          zIndex: 9999,
          color: 'white',
          position: 'absolute',
          transform: 'translateX(100%) translateY(-50%) rotate(180deg) ',
        }}
      />
      <AnimatePresence mode="wait">
        {mockStep === 0 && (
          <Box
            {...stepMotionProps}
            component={motion.div}
            sx={{
              gap: 0,
              maxWidth: 400,
              width: '100vw',
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            key="ms-1"
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 400,
                display: 'flex',
                paddingTop: 40,
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
                borderBottom: `1px solid ${t.colors.gray[3]}`,
              }}
            >
              <img
                src="/assets/img/mock-qr-phone.png"
                alt="qr-phone"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <Text
                sx={{
                  bottom: 36,
                  maxWidth: 190,
                  fontSize: '12px',
                  fontWeight: 400,
                  textAlign: 'center',
                  position: 'absolute',
                  color: t.colors.gray[6],
                }}
              >
                Yukarıdaki Kodu Telefonuzundan Taratın, Ardından Kamera Erişimine İzin Verin.
              </Text>
            </Box>
            <Box
              sx={{
                padding: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="default"
                sx={{
                  padding: 0,
                  height: 'auto',
                  border: 'none',
                  backgroundColor: 'transparent!important',
                  '> div > span': {
                    gap: 14,
                    display: 'flex',
                    fontSize: '15px',
                    fontWeight: 600,
                    alignItems: 'center',
                    flexDirection: 'row',
                    color: t.colors.gray[8],
                    justifyContent: 'center',
                    '> svg': {
                      width: 18,
                      height: 18,
                    },
                  },
                }}
              >
                <CustomCameraIcon />
                <Text>Bilgisayar Kamerası Kullan</Text>
              </Button>
            </Box>
          </Box>
        )}
        {mockStep === 1 && (
          <Box
            {...stepMotionProps}
            component={motion.div}
            sx={{
              gap: 0,
              width: '100vw',
              maxWidth: 400,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            key="ms-2"
          >
            <Box
              sx={{
                gap: 25,
                width: '100%',
                display: 'flex',
                padding: '50px 90px',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottom: `1px solid ${t.colors.gray[3]}`,
              }}
            >
              <Box
                component={motion.div}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'linear',
                }}
                sx={{
                  width: 76,
                  height: 76,
                  color: t.colors.green[6],
                }}
              >
                <CustomBarcodeLoader width={76} height={76} />
              </Box>
              <Text
                sx={{
                  color: '#000',
                  marginTop: 20,
                  fontWeight: 400,
                  fontSize: '26px',
                  lineHeight: '31.2px',
                  textAlign: 'center',
                }}
              >
                Cihazınızdan Cevap Bekleniyor
              </Text>
              <Text
                sx={{
                  color: t.colors.gray[5],
                  fontWeight: 500,
                  fontSize: '12px',
                  textAlign: 'center',
                  lineHeight: '14.4px',
                }}
              >
                Telefondan Kodunuzun Fotoğrafını Çekip Bitti’ye Basın.
              </Text>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                padding: '28px 10px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="default"
                sx={{
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  color: t.colors.red[6],
                  backgroundColor: 'transparent!important',
                }}
              >
                Vazgeç
              </Button>
            </Box>
          </Box>
        )}
        {mockStep === 2 && (
          <Box
            {...stepMotionProps}
            component={motion.div}
            sx={{
              gap: 0,
              width: '100vw',
              maxWidth: 400,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            key="ms-3"
          >
            <Box
              sx={{
                gap: 25,
                width: '100%',
                display: 'flex',
                padding: '18px 16px',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottom: `1px solid ${t.colors.gray[3]}`,
              }}
            >
              <Box
                sx={{
                  height: 200,
                  width: '100%',
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  color: t.colors.gray[6],
                  justifyContent: 'center',
                  backgroundColor: t.colors.gray[3],
                }}
              >
                <Text>Image</Text>
              </Box>
              <Box
                sx={{
                  gap: 25,
                  padding: 20,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  sx={{
                    fontSize: '15px',
                    fontWeight: 500,
                    lineHeight: '18px',
                    color: t.colors.gray[6],
                  }}
                >
                  Kod Önizlemesi
                </Text>
                <Text
                  sx={{
                    fontSize: '37px',
                    fontWeight: 400,
                    lineHeight: '44.4px',
                    color: '#000',
                  }}
                >
                  BK23SR25
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                padding: 0,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <Button
                variant="default"
                sx={{
                  padding: '28px 5px',
                  border: 'none',
                  height: 'auto',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  color: t.colors.red[6],
                  backgroundColor: 'transparent!important',
                  borderRight: `1px solid ${t.colors.gray[3]}`,
                }}
              >
                Vazgeç
              </Button>
              <Button
                variant="default"
                sx={{
                  padding: '28px 5px',
                  border: 'none',
                  height: 'auto',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  color: t.colors.green[7],
                  backgroundColor: 'transparent!important',
                }}
              >
                Kaydet
              </Button>
            </Box>
          </Box>
        )}
        {mockStep === 3 && (
          <Box
            {...stepMotionProps}
            component={motion.div}
            sx={{
              gap: 0,
              width: '100vw',
              maxWidth: 400,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            key="ms-4"
          >
            <Box
              sx={{
                gap: 25,
                width: '100%',
                display: 'flex',
                padding: '18px 16px',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  padding: 0,
                  width: '100%',
                  display: 'flex',
                  borderRadius: 20,
                  overflow: 'hidden',
                  alignItems: 'center',
                  color: t.colors.gray[6],
                  justifyContent: 'center',
                  flexDirection: 'column',
                  backgroundColor: t.colors.gray[1],
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      padding: 11,
                      paddingLeft: 30,
                      maxWidth: 227,
                      borderBottomRightRadius: 16,
                      backgroundColor: t.colors.gray[3],
                    }}
                  >
                    <Box
                      sx={{
                        width: 160,
                        height: 11,
                        opacity: 0.4,
                        borderRadius: 3,
                        backgroundColor: t.colors.gray[5],
                      }}
                    />
                    <Box
                      sx={{
                        width: 85,
                        height: 4,
                        opacity: 0.4,
                        marginTop: 5,
                        borderRadius: 3,
                        backgroundColor: t.colors.gray[5],
                      }}
                    />
                    <Box
                      sx={{
                        gap: 6,
                        marginTop: 13,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Box
                        sx={{
                          opacity: 0.2,
                          fontSize: '12px',
                          fontWeight: 400,
                          padding: '5px 12px',
                          borderRadius: 100,
                          lineHeight: '14.4px',
                          color: '#000',
                          border: `1px solid #000`,
                        }}
                      >
                        Reddet
                      </Box>
                      <Box
                        sx={{
                          fontSize: '12px',
                          fontWeight: 400,
                          padding: '5px 12px',
                          borderRadius: 100,
                          lineHeight: '14.4px',
                          color: t.colors.green[5],
                          border: `1px solid ${t.colors.green[5]}`,
                        }}
                      >
                        İzin Ver
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Text
                  sx={{
                    padding: 5,
                    margin: '20px 0px',
                    maxWidth: 270,
                    fontWeight: 500,
                    fontSize: '18px',
                    textAlign: 'left',
                    color: t.colors.gray[7],
                  }}
                >
                  Sistemin pekala çalışabilmesi için kamera erişimine izniniz gerekiyor.
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 10px 50px 10px',
              }}
            >
              <Button
                variant="default"
                sx={{
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  color: t.colors.red[6],
                  backgroundColor: 'transparent!important',
                }}
              >
                Vazgeç
              </Button>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Menu.Dropdown>
  );
}

export default ItemCodeReader;
