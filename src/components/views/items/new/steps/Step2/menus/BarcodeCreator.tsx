import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { getRandomUUID } from '@/common/utils/misc';
import { Box, Button, Checkbox, Menu, Text } from '@mantine/core';
import { CustomMoveIcon, CustomSmoothTooltipIllustration, CustomXICon } from '@/components/icons';

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

export default ItemCodeCreator;
