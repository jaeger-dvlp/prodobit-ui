import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Divider, Sx, Text } from '@mantine/core';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { useNewItem } from '@/components/context/NewItem.context';
import {
  CustomXICon,
  CustomRightLongChevronIcon,
  CustomProgrammingArrowIcon,
  CustomPlusIcon,
} from '@/components/icons';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';

const ItemSpecContainerSX: Sx = {
  gap: 15,
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '> div:nth-of-type(1)': {
    gap: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '> .mantine-Text-root': {
      fontWeight: 400,
      fontSize: '37px',
      lineHeight: '44.4px',
      color: t.colors.green[6],
    },
    '> div:nth-of-type(2)': {
      gap: 30,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      '> button:nth-of-type(1)': {
        padding: 0,
        height: 'auto',
        border: 'none',
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
        color: t.colors.gray[8],
        backgroundColor: 'transparent!important',
        '> div > span': {
          gap: 7,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          '> svg': {
            width: 18,
            height: 18,
          },
        },
      },
      '> button:nth-of-type(2)': {
        height: 'auto',
        border: 'none',
        borderRadius: 100,
        padding: '3px 10px',
        color: t.colors.gray[0],
        backgroundColor: `${t.colors.gray[8]}!important`,
        '> div > span > svg': {
          width: 18,
          height: 18,
        },
      },
    },
  },
};

function StepDescription() {
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
          fontWeight: 300,
          fontSize: '45px',
          lineHeight: '54px',
          color: t.colors.gray[8],
        }}
      >
        Kişiselleştirilmiş Öğe Özellik Ekranınız Hazır.
      </Text>
    </Box>
  );
}

function ItemSizeProps() {
  // const [mockSizes, setMockSizes] = React.useState([
  //   {
  //     width: 200,
  //     height: 200,
  //     wUnit: 'cm',
  //     hUnit: 'cm',
  //   },
  // ]);

  return (
    <Box sx={ItemSpecContainerSX}>
      <Box>
        <Text>Boyut</Text>
        <Box>
          <Button variant="default">
            <CustomProgrammingArrowIcon />
            <Text>Varyasyon Değişkeni Yap</Text>
          </Button>
          <Button variant="default">
            <CustomPlusIcon />
          </Button>
        </Box>
      </Box>
      <Box
        component="ul"
        sx={{
          gap: 10,
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          listStyle: 'none',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '> li': {
            gap: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          },
        }}
      >
        <Box />
      </Box>
    </Box>
  );
}

function ItemColorProps() {
  return (
    <Box sx={ItemSpecContainerSX}>
      <Box>
        <Text>Renk</Text>
        <Box>
          <Button variant="default">
            <CustomProgrammingArrowIcon />
            <Text>Varyasyon Değişkeni Yap</Text>
          </Button>
          <Button variant="default">
            <CustomPlusIcon />
          </Button>
        </Box>
      </Box>
      <Box />
    </Box>
  );
}

function ItemSizeCategories() {
  return (
    <Box sx={ItemSpecContainerSX}>
      <Box>
        <Text>Beden</Text>
        <Box>
          <Button variant="default">
            <CustomProgrammingArrowIcon />
            <Text>Varyasyon Değişkeni Yap</Text>
          </Button>
          <Button variant="default">
            <CustomPlusIcon />
          </Button>
        </Box>
      </Box>
      <Box />
    </Box>
  );
}

function ItemModel() {
  return (
    <Box sx={ItemSpecContainerSX}>
      <Box>
        <Text>Model</Text>
        <Box>
          <Button variant="default">
            <CustomProgrammingArrowIcon />
            <Text>Varyasyon Değişkeni Yap</Text>
          </Button>
          <Button variant="default">
            <CustomPlusIcon />
          </Button>
        </Box>
      </Box>
      <Box />
    </Box>
  );
}

function NewItemStep4() {
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
            <StepDescription />
            <ItemSizeProps />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemColorProps />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemSizeCategories />
            <Divider w="100%" color={t.colors.gray[3]} />
            <ItemModel />
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

export default NewItemStep4;
