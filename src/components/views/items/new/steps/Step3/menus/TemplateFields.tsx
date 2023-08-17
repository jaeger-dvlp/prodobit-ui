import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Menu, Text, TextInput } from '@mantine/core';
import {
  TrashIcon,
  CustomVertical3DotsIcon,
  CustomSmoothTooltipIllustration,
} from '@/components/icons';

function TemplateFieldMenu() {
  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginLeft: 60,
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
          transform: 'translateY(-50%) translateX(-100%)',
        }}
      />
      <Box
        sx={{
          gap: 25,
          width: '90vw',
          maxWidth: 417,
          display: 'flex',
          borderRadius: 20,
          padding: '30px 36px',
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '> .mantine-TextInput-root': {
            paddingBottom: 18,
            borderBottom: `1px solid ${t.colors.gray[3]}`,
            '.mantine-TextInput-input': {
              padding: 0,
              border: 'none',
              width: '100%',
              fontWeight: 500,
              fontSize: '31px',
              lineHeight: '37.2px',
              color: t.colors.gray[9],
              backgroundColor: 'transparent!important',
            },
          },
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
          Şablon Adı
        </Text>
        <TextInput defaultValue="Kumaş" />
        <Box
          component="ul"
          sx={{
            gap: 10,
            margin: 0,
            padding: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            listStyle: 'none',
            '> li': {
              gap: 17,
              width: '100%',
              display: 'flex',
              borderRadius: 10,
              padding: '10px 0px',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'transparent!important',
              '.mantine-TextInput-input': {
                padding: 0,
                color: '#000',
                width: '100%',
                border: 'none',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '18px',
                backgroundColor: 'transparent',
              },
              '> button:nth-of-type(1)': {
                padding: 0,
                color: '#D9D9D9',
                border: 'none',
                height: 'auto',
                backgroundColor: 'transparent!important',
                '> div > span > svg': {
                  width: 5,
                },
              },
              '> button:nth-of-type(2)': {
                padding: 0,
                color: '#000',
                border: 'none',
                height: 'auto',
                backgroundColor: 'transparent!important',
                '> div > span > svg': {
                  width: 24,
                  height: 24,
                },
              },
            },
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Box key={`tfm-${i}`} component="li">
              <Button variant="default">
                <CustomVertical3DotsIcon />
              </Button>
              <TextInput defaultValue="Beden" />
              <Button variant="default">
                <TrashIcon />
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Button
        variant="default"
        sx={{
          marginTop: 5,
          color: '#fff',
          width: '100%',
          height: 'auto',
          border: 'none',
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

export default TemplateFieldMenu;
