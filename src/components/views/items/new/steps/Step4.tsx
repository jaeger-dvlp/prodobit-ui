import React from 'react';
import { SizeSelectOpts } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import { getRandomUUID } from '@/common/utils/misc';
import { AnimatePresence, motion } from 'framer-motion';
import { useNewItem } from '@/components/context/NewItem.context';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';
import { Box, Button, Divider, NumberInput, Select, Sx, Text, TextInput } from '@mantine/core';

import {
  TrashIcon,
  CustomXICon,
  CustomPlusIcon,
  CustomXSeperator,
  CustomRightLongChevronIcon,
  CustomProgrammingArrowIcon,
} from '@/components/icons';

const SizeSelectItem = React.forwardRef<HTMLDivElement, { value: string; text: string }>(
  ({ value, text, ...others }: { value: string; text: string }, ref) => (
    <div ref={ref} {...others}>
      <Text>{value}</Text>
      <Text>{text}</Text>
    </div>
  ),
);

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
  const [mockSizes, setMockSizes] = React.useState([
    {
      id: getRandomUUID(),
      width: 200,
      height: 20,
      wUnit: 'cm',
      hUnit: 'cm',
    },
  ]);

  const addNewSize = () => {
    setMockSizes((s) => [
      ...s,
      {
        id: getRandomUUID(),
        width: 200,
        height: 20,
        wUnit: 'cm',
        hUnit: 'cm',
      },
    ]);
  };

  const deleteSize = (id: string) => {
    setMockSizes((s) => s.filter((size) => size.id !== id));
  };

  return (
    <Box sx={ItemSpecContainerSX}>
      <Box>
        <Text>Boyut</Text>
        <Box>
          <Button variant="default">
            <CustomProgrammingArrowIcon />
            <Text>Varyasyon Değişkeni Yap</Text>
          </Button>
          <Button onClick={addNewSize} variant="default">
            <CustomPlusIcon />
          </Button>
        </Box>
      </Box>
      <Box
        component="ul"
        sx={{
          gap: 20,
          margin: 0,
          padding: 0,
          width: '100%',
          marginTop: 20,
          display: 'flex',
          listStyle: 'none',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '> li': {
            gap: 10,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '> button': {
              padding: 5,
              height: 'auto',
              border: 'none',
              color: t.colors.red[5],
              backgroundColor: `${t.colors.red[0]}!important`,
            },
            '> section': {
              fontWeight: 400,
              display: 'flex',
              fontSize: '22px',
              borderRadius: 100,
              padding: '0px 25px',
              lineHeight: '26.4px',
              alignItems: 'stretch',
              flexDirection: 'row',
              border: `1px solid ${t.colors.gray[4]}`,
              '> div:nth-of-type(1)': {
                margin: 0,
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px 10px 0px',
                borderRight: `1px solid ${t.colors.gray[4]}`,
              },
              '> div:nth-of-type(2)': {
                gap: 10,
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '10px 0px 10px 20px',
                justifyContent: 'flex-start',
                '.mantine-NumberInput-root': {
                  maxWidth: 45,
                  '.mantine-NumberInput-input': {
                    padding: 0,
                    border: 'none',
                    fontSize: '22px',
                    fontWeight: 700,
                    backgroundColor: 'transparent',
                  },
                },
                '.mantine-Select-root': {
                  padding: 0,
                  maxWidth: 75,
                  '.mantine-Select-input': {
                    padding: 0,
                    border: 'none',
                    fontSize: '22px',
                    fontWeight: 400,
                    backgroundColor: 'transparent',
                  },
                  '.mantine-Select-item': {
                    gap: 7,
                    borderRadius: 0,
                    display: 'flex',
                    fontSize: '15px',
                    flexDirection: 'row',
                    position: 'relative',
                    color: '#000!important',
                    padding: '10px 10px 10px 20px',
                    transition: 'all 0.15s ease-in-out',
                    backgroundColor: 'transparent!important',
                    ':hover': {
                      backgroundColor: `${t.colors.gray[2]}!important`,
                    },
                    ':not(:last-of-type)': {
                      borderBottom: `1px solid ${t.colors.gray[3]}`,
                    },
                    '> div:nth-of-type(1)': {
                      minWidth: 30,
                      fontWeight: 700,
                    },
                    "&[data-selected='true']::after": {
                      content: '""',
                      width: 6,
                      height: 6,
                      borderRadius: 100,
                      backgroundColor: t.colors.red[4],
                      position: 'absolute',
                      left: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    },
                  },
                  '.mantine-Select-itemsWrapper': {
                    padding: 0,
                  },
                  '.mantine-Select-dropdown': {
                    padding: 0,
                    borderRadius: 15,
                    overflow: 'hidden',
                    width: 'fit-content',
                    minWidth: 'fit-content',
                    boxShadow: '0px -6px 54px -13px rgba(177, 109, 92, 0.30)',
                  },
                },
              },
            },
          },
        }}
      >
        <AnimatePresence>
          {mockSizes.map((size, index) => (
            <Box
              component={motion.li}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              key={`size-${size.id}`}
            >
              <Box component="section">
                <Box>
                  <Text>En</Text>
                </Box>
                <Box>
                  <NumberInput hideControls defaultValue={size.width} min={0} />
                  <Select
                    transitionProps={{
                      transition: 'fade',
                      duration: 300,
                    }}
                    data={SizeSelectOpts}
                    defaultValue={size.wUnit}
                    itemComponent={SizeSelectItem}
                  />
                </Box>
              </Box>
              <CustomXSeperator width={12} height={12} />
              <Box component="section">
                <Box>
                  <Text>Boy</Text>
                </Box>

                <Box>
                  <NumberInput hideControls defaultValue={size.height} min={0} />

                  <Select
                    transitionProps={{
                      transition: 'fade',
                      duration: 300,
                    }}
                    data={SizeSelectOpts}
                    defaultValue={size.hUnit}
                    itemComponent={SizeSelectItem}
                  />
                </Box>
              </Box>
              {index !== 0 && (
                <Button onClick={() => deleteSize(size.id)} variant="default">
                  <TrashIcon width={16} height={16} />
                </Button>
              )}
            </Box>
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
}

function ItemColorProps() {
  const [mockColors, setMockColors] = React.useState([
    {
      id: getRandomUUID(),
      color: t.colors.orange[5],
      name: 'Alev Kızılı',
    },
    {
      id: getRandomUUID(),
      color: t.colors.blue[6],
      name: 'Gök Mavi',
    },
  ]);

  const addNewColor = () => {
    setMockColors((s) => [
      ...s,
      {
        id: getRandomUUID(),
        color: '#000',
        name: 'Siyah',
      },
    ]);
  };

  const deleteColor = (id: string) => {
    setMockColors((s) => s.filter((color) => color.id !== id));
  };

  return (
    <Box sx={ItemSpecContainerSX}>
      <Box>
        <Text>Renk</Text>
        <Box>
          <Button variant="default">
            <CustomProgrammingArrowIcon />
            <Text>Varyasyon Değişkeni Yap</Text>
          </Button>
          <Button onClick={addNewColor} variant="default">
            <CustomPlusIcon />
          </Button>
        </Box>
      </Box>
      <Box />
      <Box
        component="ul"
        sx={{
          gap: 20,
          margin: 0,
          padding: 0,
          width: '100%',
          marginTop: 20,
          display: 'flex',
          listStyle: 'none',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '> li': {
            gap: 14,
            display: 'flex',
            borderRadius: 100,
            flexDirection: 'row',
            alignItems: 'center',
            padding: '9.5px 25px',
            position: 'relative',
            justifyContent: 'flex-start',
            border: `1px solid ${t.colors.gray[4]}`,
            '> button': {
              padding: 3,
              height: 'auto',
              border: 'none',
              borderRadius: 100,
              position: 'absolute',
              color: 'white',
              top: -5,
              right: -1,
              backgroundColor: `${t.colors.red[5]}!important`,
            },
            '> div:nth-of-type(1)': {
              width: 16,
              height: 16,
              borderRadius: 100,
              border: '1px solid #fff',
            },
            '> div:nth-of-type(2)': {
              padding: 0,
              border: 'none',
              fontWeight: 700,
              fontSize: '22px',
              lineHeight: '26.4px',
              color: t.colors.gray[8],
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        <AnimatePresence>
          {mockColors.map((color) => (
            <Box
              component={motion.li}
              key={`color-${color.id}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Button onClick={() => deleteColor(color.id)} variant="default">
                <CustomXICon width={14} height={14} />
              </Button>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: color.color,
                  boxShadow: `0px 5px 5px -2px ${color.color}`,
                }}
              />
              <Text contentEditable>{color.name}</Text>
            </Box>
          ))}
        </AnimatePresence>
      </Box>
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
