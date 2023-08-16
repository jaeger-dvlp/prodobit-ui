import React from 'react';
import { FileTypeImages } from 'mockdata';
import { Dropzone } from '@mantine/dropzone';
import { ProdobitAppTheme as t } from '@/theme';
import { motion, AnimatePresence } from 'framer-motion';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { useNewItem } from '@/components/context/NewItem.context';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Image,
  Menu,
  Select,
  Sx,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';

import {
  CustomBarcodeLoader,
  CustomBubbleIcon,
  CustomCameraIcon,
  CustomChevronUp,
  CustomMoveIcon,
  CustomPlusIcon,
  CustomRightLongChevronIcon,
  CustomSave2Icon,
  CustomSmoothTooltipIllustration,
  CustomXICon,
  CustomXSeperator,
  ImageLightIcon,
  ScanBarcodeIcon,
  UploadCloudIcon,
} from '@/components/icons';
import { getRandomUUID } from '@/common/utils/misc';

function ItemBrandCreator() {
  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginTop: 30,
        width: '100%',
        maxWidth: 349,
        border: 'none',
        display: 'flex',
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          left: '50%',
          top: '0px',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-65%) translateX(-50%) rotate(90deg)',
        }}
      />
      <Box
        sx={{
          gap: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          borderRadius: 20,
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
        }}
      >
        <Box
          sx={{
            gap: 0,
            padding: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Dropzone
            id="dropzone"
            onDrop={(files) => console.log(files)}
            styles={{
              root: {
                width: '100%',
                padding: 5,
                border: 'none',
                borderRadius: 10,
                cursor: 'pointer',
                aspectRatio: '3/1',
                position: 'relative',
                backgroundColor: t.colors.gray[1],
                ':hover': {
                  backgroundColor: t.colors.gray[3],
                },
              },
              inner: {
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
              },
            }}
          >
            <ImageLightIcon width={60} height={60} />
            <Text
              sx={{
                color: '#000',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '26.4px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {'Logo\nEkle'}
            </Text>
          </Dropzone>
          <Box
            sx={{
              gap: 25,
              marginTop: 20,
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: '10px 20px 40px 20px',
            }}
          >
            <Text
              sx={{
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '18px',
                color: t.colors.gray[6],
              }}
            >
              Marka Adı Belirle
            </Text>
            <Textarea
              autosize
              defaultValue="BK23SR25"
              styles={{
                input: {
                  padding: 0,
                  color: '#000',
                  border: 'none',
                  height: 'auto',
                  fontWeight: 400,
                  fontSize: '37px',
                  lineHeight: '44.4px',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Divider w="100%" color={t.colors.gray[3]} />
          </Box>
          <Select
            styles={{
              input: {
                padding: 20,
                border: 'none',
                borderRadius: 10,
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '18px',
                color: '#000',
                minHeight: 58,
                '::placeholder': {
                  color: '#000',
                },
                backgroundColor: t.colors.gray[1],
              },
              dropdown: {
                padding: 10,
                borderRadius: 15,
                boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
              },
              item: {
                borderRadius: 10,
              },
            }}
            placeholder="Ana Grup Belirle"
            data={[{ label: 'deneme', value: 'deneme' }]}
          />
        </Box>
      </Box>
      <Button
        variant="default"
        sx={{
          marginTop: 5,
          border: 'none',
          color: '#fff',
          width: '100%',
          height: 'auto',
          borderRadius: 20,
          padding: '30px 40px',
          backgroundColor: t.colors.green[6],
          transition: 'all 0.15s ease-in-out',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.green[5],
          },
          '> div > span': {
            gap: 5,
            width: '100%',
            display: 'flex',
            fontWeight: 500,
            fontSize: '18px',
            alignItems: 'center',
            flexDirection: 'row',
            color: t.colors.gray[0],
            justifyContent: 'center',
          },
        }}
      >
        <Text>Kaydet</Text>
      </Button>
    </Menu.Dropdown>
  );
}

function ItemBrandImageSelector() {
  const [error, setError] = React.useState<string | null>(null);
  const [customImgUrl, setCustomImgUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    (() => {
      const UrlRegex = '(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)';

      if (customImgUrl && !customImgUrl.match(UrlRegex)) {
        setError('Lütfen geçerli bir URL girin.');
        return;
      }

      setError(null);
    })();
  }, [customImgUrl]);

  return (
    <Menu.Dropdown
      sx={{
        gap: 30,
        padding: 0,
        display: 'flex',
        borderRadius: 40,
        marginTop: 120,
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
          left: 0,
          top: 150,
          zIndex: 9999,
          color: 'white',
          position: 'absolute',
          transform: 'translateX(-100%)',
        }}
      />
      <Box
        sx={{
          gap: 30,
          padding: 30,
          width: '100%',
          minWidth: 400,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Dropzone
          id="dropzone"
          onDrop={(files) => console.log(files)}
          styles={{
            root: {
              maxWidth: 350,
              padding: 5,
              border: 'none',
              borderRadius: 20,
              cursor: 'pointer',
              aspectRatio: '1/1',
              position: 'relative',
              backgroundColor: t.colors.gray[1],
              ':hover': {
                backgroundColor: t.colors.gray[3],
              },
            },
            inner: {
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              display: 'flex',
            },
          }}
        >
          <ImageLightIcon width={60} height={60} />
          <Text
            sx={{
              color: '#000',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '26.4px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {'Sürükle\nBırak'}
          </Text>
          <Text
            sx={{
              bottom: 24,
              left: '50%',
              fontWeight: 300,
              fontSize: '12px',
              textAlign: 'center',
              lineHeight: '14.4px',
              position: 'absolute',
              color: t.colors.gray[7],
              transform: 'translateX(-50%)',
            }}
          >
            Ya da Tıklayıp Dosya Seçin
          </Text>
        </Dropzone>
        <Box
          sx={{
            gap: 25,
            display: 'flex',
            margin: '10px 0px',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            sx={{
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '18px',
              color: t.colors.gray[7],
            }}
          >
            URL İle Yükle
          </Text>
          <TextInput
            onChange={(e) => setCustomImgUrl(e.currentTarget.value)}
            styles={{
              input: {
                height: 26,
                padding: 0,
                color: '#000',
                border: 'none',
                fontSize: '22px',
                fontWeight: 500,
                lineHeight: '26.4px',
                backgroundColor: 'transparent',
              },
            }}
            placeholder="http://www.img...."
          />
          {error && (
            <Text
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: t.colors.red[4],
              }}
            >
              {error}
            </Text>
          )}
        </Box>
      </Box>
      <Button
        variant="default"
        sx={{
          border: 'none',
          color: '#fff',
          width: '100%',
          height: 'auto',
          borderRadius: 40,
          padding: '30px 40px',
          marginBottom: -3,
          backgroundColor: t.colors.green[7],
          transition: 'all 0.15s ease-in-out',
          '&:hover': {
            backgroundColor: t.colors.green[6],
          },
          '> div > span': {
            gap: 5,
            width: '100%',
            display: 'flex',
            fontWeight: 500,
            fontSize: '18px',
            alignItems: 'center',
            flexDirection: 'row',
            color: t.colors.gray[0],
            justifyContent: 'space-between',
          },
        }}
      >
        <Text>Görüntüyü Kaydet</Text>
        <Box
          sx={{
            padding: 13,
            display: 'flex',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.20)',
          }}
        >
          <CustomSave2Icon width={24} height={24} />
        </Box>
      </Button>
    </Menu.Dropdown>
  );
}

function ItemCodeCreator() {
  const [mockCreateSpecs] = React.useState([
    {
      id: getRandomUUID(),
      name: 'Öğenin İlk İki Harfi',
    },
    {
      id: getRandomUUID(),
      name: 'Öğe Rengi',
    },
    {
      id: getRandomUUID(),
      name: 'Marka Baş Harfi',
    },
  ]);

  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginLeft: 50,
        width: 'auto',
        maxWidth: 417,
        border: 'none',
        display: 'flex',
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          left: '0',
          top: '50%',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-50%) translateX(-100%) rotate(0deg)',
        }}
      />
      <Box
        sx={{
          gap: 30,
          padding: 30,
          width: '90vw',
          maxWidth: 417,
          display: 'flex',
          borderRadius: 20,
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 10,
            padding: 0,
            margin: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
          }}
        >
          {mockCreateSpecs.map((spec) => (
            <Box
              key={`c-cr-${spec.id}`}
              component="li"
              sx={{
                gap: 8,
                display: 'flex',
                fontWeight: 400,
                fontSize: '15px',
                borderRadius: 100,
                padding: '10px 13px',
                alignItems: 'center',
                flexDirection: 'row',
                color: t.colors.blue[7],
                justifyContent: 'flex-start',
                backgroundColor: t.colors.blue[0],
                '> div:nth-of-type(2)': {
                  gap: 3,
                  display: 'flex',
                  button: {
                    padding: 0,
                    border: 'none',
                    height: 'auto',
                    color: t.colors.blue[5],
                    backgroundColor: 'transparent!important',
                    '> div > span > svg': {
                      width: 14,
                      height: 14,
                    },
                  },
                },
              }}
            >
              <Text>{spec.name}</Text>
              <Box>
                <Button variant="default">
                  <CustomMoveIcon />
                </Button>
                <Button variant="default">
                  <CustomXICon />
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Text
          sx={{
            padding: 20,
            width: '100%',
            color: '#000',
            borderRadius: 10,
            backgroundColor: t.colors.gray[1],
          }}
        >
          Boyut
        </Text>
        <Box
          component="ul"
          sx={{
            gap: 25,
            margin: 0,
            padding: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            listStyle: 'none',
            '> li': {
              width: '100%',
              cursor: 'pointer',
              '.mantine-Checkbox-body': {
                display: 'flex',
                justifyContent: 'space-between',
                '.mantine-Checkbox-labelWrapper': {
                  width: '100%',
                  color: '#000',
                  fontSize: '15px',
                  fontWeight: 400,
                },
              },
            },
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Box component="li" key={`c-cr-ch-${i}`}>
              <Checkbox radius="md" color="green" label="Deneme" labelPosition="left" />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          margin: '5px 0px',
          borderRadius: 20,
          padding: '25px 40px',
          backgroundColor: '#fff',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
        }}
      >
        <Checkbox
          radius="md"
          color="green"
          styles={{
            root: {
              '.mantine-Checkbox-label': {
                color: t.colors.gray[6],
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '21.6px',
              },
            },
          }}
          label="Bunu Bütün Alt Öğelere Uygula"
        />
      </Box>
      <Button
        variant="default"
        sx={{
          border: 'none',
          color: '#fff',
          width: '100%',
          height: 'auto',
          borderRadius: 20,
          padding: '25px 30px',
          backgroundColor: t.colors.green[6],
          transition: 'all 0.15s ease-in-out',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.green[5],
          },
          '> div > span': {
            gap: 5,
            width: '100%',
            display: 'flex',
            fontWeight: 500,
            fontSize: '18px',
            alignItems: 'center',
            flexDirection: 'row',
            color: t.colors.gray[0],
            justifyContent: 'center',
          },
        }}
      >
        <Text>Kaydet</Text>
      </Button>
    </Menu.Dropdown>
  );
}

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
    </Menu.Dropdown>
  );
}

function ItemBrand({ focusMain, blurMain }: { focusMain: () => void; blurMain: () => void }) {
  return (
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
      <Menu onOpen={blurMain} onClose={focusMain} zIndex={999} position="right">
        <Menu.Target>
          <Button
            variant="default"
            sx={{
              padding: 10,
              width: '100%',
              maxWidth: 130,
              height: 'auto',
              border: 'none',
              display: 'flex',
              borderRadius: 20,
              aspectRatio: '1/1',
              alignItems: 'center',
              justifyContent: 'center',
              color: t.colors.green[9],
              position: 'relative',
              backgroundColor: t.colors.gray[2],
              transition: 'all 0.15s ease-in-out',
              ':hover': {
                backgroundColor: t.colors.gray[3],
              },
            }}
          >
            <ImageLightIcon width={46} height={46} />
          </Button>
        </Menu.Target>
        <ItemBrandImageSelector />
      </Menu>
      <Box
        sx={{
          gap: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Text
          sx={{
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '18px',
            color: t.colors.gray[6],
          }}
        >
          Öğeniz İçin Marka Belirleyin
        </Text>
        <Box
          sx={{
            gap: 10,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Select
            onDropdownOpen={blurMain}
            onDropdownClose={focusMain}
            defaultValue="nike"
            rightSectionWidth={50}
            color={t.colors.green[9]}
            rightSection={<CustomChevronUp width={24} height={24} />}
            sx={{
              width: 'fit-content!important',
              minWidth: 'fit-content!important',
              maxWidth: 'fit-content!important',
              '.mantine-Input-rightSection': {
                width: 'fit-content!important',
                pointerEvents: 'none',
                paddingRight: 40,
                color: t.colors.green[9],
              },
              '.mantine-Select-item': {
                '&:not(:first-of-type)': {
                  marginTop: 5,
                },
                transition: 'all 0.15s ease-in-out',
                '&:hover': {
                  color: t.colors.green[9],
                  backgroundColor: t.colors.gray[2],
                },
                "&[data-selected='true']": {
                  color: t.colors.green[9],
                  backgroundColor: t.colors.gray[3],
                },
              },
            }}
            styles={{
              input: {
                fontWeight: 400,
                fontSize: '15px',
                minHeight: '55px',
                maxWidth: '155px',
                borderRadius: 100,
                padding: '15px 40px',
                color: t.colors.gray[8],
                backgroundColor: '#fff!important',
                border: `1px solid ${t.colors.green[6]}!important`,
              },
              dropdown: {
                padding: 10,
                borderRadius: 15,
                boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
              },
              item: {
                borderRadius: 10,
              },
            }}
            data={[
              {
                label: 'Nike',
                value: 'nike',
              },
              {
                label: 'Adidas',
                value: 'adidas',
              },
              {
                label: 'Puma',
                value: 'puma',
              },
            ]}
          />
          <Menu
            onOpen={blurMain}
            onClose={focusMain}
            zIndex={999}
            position="bottom"
            transitionProps={{
              transition: 'fade',
              duration: 500,
            }}
          >
            <Menu.Target>
              <Button
                sx={{
                  height: 'auto',
                  borderRadius: 100,
                  padding: '15px 40px',
                  color: t.colors.green[9],
                  backgroundColor: '#fff!important',
                  border: `1px solid ${t.colors.green[6]}`,
                }}
              >
                <CustomPlusIcon width={24} height={24} />
              </Button>
            </Menu.Target>
            <ItemBrandCreator />
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

function ItemName() {
  return (
    <Box
      sx={{
        gap: 25,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '18px',
          color: t.colors.gray[6],
        }}
      >
        Öğenizin Ana Adını Belirleyin
      </Text>
      <Textarea
        autosize
        defaultValue="Sportswear Tech Fleece"
        styles={{
          input: {
            padding: 0,
            color: '#000',
            border: 'none',
            height: 'auto',
            fontWeight: 400,
            fontSize: '64px',
            lineHeight: '76.8px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            backgroundColor: 'transparent',
          },
        }}
      />
    </Box>
  );
}

function ItemFileUpload() {
  return (
    <Box
      sx={{
        gap: 5,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          gap: 20,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Image src={FileTypeImages.csv} width={50} height={50} mb={-8} fit="contain" />
        <Box
          sx={{
            gap: 0,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text
            sx={{
              color: '#000',
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: '18px',
            }}
          >
            <Text span mr={5}>
              Excel
            </Text>
            <CustomXSeperator width={12} height={12} />
            <Text span ml={5}>
              Csv
            </Text>
          </Text>
          <Text
            sx={{
              color: '#000',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
            }}
          >
            Dosya İle Aktar
          </Text>
        </Box>
      </Box>
      <Button
        variant="default"
        sx={{
          padding: 13,
          height: 'auto',
          color: '#292D32',
          borderRadius: 100,
          border: '1px solid rgba(0, 0, 0, 0.40)',
          backgroundColor: 'transparent!important',
        }}
      >
        <UploadCloudIcon width={24} height={24} />
      </Button>
    </Box>
  );
}

function ItemCode({ focusMain, blurMain }: { focusMain: () => void; blurMain: () => void }) {
  const ButtonSx: Sx = {
    padding: 0,
    display: 'flex',
    height: 'auto',
    color: '#000',
    border: 'none',
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '18px',
    backgroundColor: 'transparent!important',
    '> div > span': {
      gap: 7,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      '> svg': {
        width: 16,
        height: 16,
      },
    },
  };

  return (
    <Box
      sx={{
        gap: 25,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          gap: 5,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          sx={{
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '18px',
            color: t.colors.gray[6],
          }}
        >
          Öğe Kodu
        </Text>
        <Box
          sx={{
            gap: 30,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Menu onOpen={blurMain} onClose={focusMain} zIndex={999} position="right">
            <Menu.Target>
              <Button variant="default" sx={ButtonSx}>
                <CustomBubbleIcon />
                <Text span>Otomatik Oluştur</Text>
              </Button>
            </Menu.Target>
            <ItemCodeCreator />
          </Menu>
          <Menu onOpen={blurMain} onClose={focusMain} zIndex={999} position="left">
            <Menu.Target>
              <Button variant="default" sx={ButtonSx}>
                <ScanBarcodeIcon />
                <Text span>Barkod Okut</Text>
              </Button>
            </Menu.Target>
            <ItemCodeReader />
          </Menu>
        </Box>
      </Box>
      <Textarea
        autosize
        defaultValue="BK23SR25"
        styles={{
          input: {
            padding: 0,
            color: '#000',
            border: 'none',
            height: 'auto',
            fontWeight: 400,
            fontSize: '37px',
            lineHeight: '44.4px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            backgroundColor: 'transparent',
          },
        }}
      />
    </Box>
  );
}

function NewItemStep2() {
  const { setCurrentStep } = useNewItem();
  const [focusedMain, setFocusedMain] = React.useState(true);
  const focusMain = () => setFocusedMain(true);
  const blurMain = () => setFocusedMain(false);
  const goToNextStep = () => setCurrentStep((c) => c + 1);
  const goToPrevStep = () => setCurrentStep((c) => c - 1);
  return (
    <>
      <Box
        {...stepContainerMotionProps}
        sx={{
          gap: 55,
          padding: 60,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          [t.fn.smallerThan('md')]: {
            padding: 30,
          },
        }}
      >
        <Text
          sx={{
            fontWeight: 500,
            fontSize: '54px',
            lineHeight: '64.8px',
            color: t.colors.green[6],
          }}
        >
          Öğe Kimliği
        </Text>
        <Box
          sx={{
            gap: 32,
            padding: 30,
            width: '100%',
            maxWidth: 695,
            display: 'flex',
            borderRadius: 40,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.15s ease-in-out',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            backgroundColor: focusedMain ? '#fff' : 'rgba(255,255,255,0.5)',
          }}
        >
          <Box
            sx={{
              gap: 40,
              width: '100%',
              display: 'flex',
              padding: '10px 30px',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <ItemBrand focusMain={focusMain} blurMain={blurMain} />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemName />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemCode focusMain={focusMain} blurMain={blurMain} />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemFileUpload />
          </Box>
        </Box>
      </Box>
      <NewItemToolbar>
        <Button
          onClick={goToPrevStep}
          variant="default"
          sx={{
            color: t.colors.red[5],
            backgroundColor: '#fff',
            border: `1px solid ${t.colors.red[2]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.red[0],
            },
          }}
        >
          <CustomXICon />
          <Text>İptal</Text>
        </Button>
        <Button
          onClick={goToNextStep}
          variant="default"
          sx={{
            color: '#fff',
            backgroundColor: t.colors.green[6],
            border: `1px solid ${t.colors.green[6]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.green[5],
            },
          }}
        >
          <Text>Sonraki</Text>
          <CustomRightLongChevronIcon />
        </Button>
      </NewItemToolbar>
    </>
  );
}

export default NewItemStep2;
