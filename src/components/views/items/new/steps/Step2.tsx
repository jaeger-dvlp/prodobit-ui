import React from 'react';
import { FileTypeImages } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { useNewItem } from '@/components/context/NewItem.context';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';
import { Box, Button, Divider, Image, Select, Sx, Text, Textarea } from '@mantine/core';
import {
  CustomBubbleIcon,
  CustomChevronUp,
  CustomPlusIcon,
  CustomRightLongChevronIcon,
  CustomXICon,
  CustomXSeperator,
  ImageLightIcon,
  ScanBarcodeIcon,
  UploadCloudIcon,
} from '@/components/icons';

function ItemBrand() {
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
          backgroundColor: t.colors.gray[2],
          transition: 'all 0.15s ease-in-out',
          ':hover': {
            backgroundColor: t.colors.gray[3],
          },
        }}
      >
        <ImageLightIcon width={46} height={46} />
      </Button>
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
                borderRadius: 20,
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

function ItemCode() {
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
          <Button variant="default" sx={ButtonSx}>
            <CustomBubbleIcon />
            <Text span>Otomatik Oluştur</Text>
          </Button>
          <Button variant="default" sx={ButtonSx}>
            <ScanBarcodeIcon />
            <Text span>Barkod Okut</Text>
          </Button>
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
          },
        }}
      />
    </Box>
  );
}

function NewItemStep2() {
  const { setCurrentStep } = useNewItem();
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
            backgroundColor: 'rgba(255, 255, 255, 0.82)',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
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
            <ItemBrand />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemName />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemCode />
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
