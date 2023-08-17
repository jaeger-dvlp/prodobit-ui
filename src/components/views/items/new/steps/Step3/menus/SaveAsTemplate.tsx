import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { CustomSmoothTooltipIllustration } from '@/components/icons';
import { Box, Button, Menu, Select, Text, TextInput } from '@mantine/core';

function SaveTemplateMenu() {
  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginLeft: -40,
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
          right: '0',
          top: '50%',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-50%) translateX(100%) rotate(180deg)',
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
        <TextInput defaultValue="Kargo" />
        <Text
          sx={{
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '18px',
            color: t.colors.gray[6],
          }}
        >
          Ana Kategori Belirleyin
        </Text>
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
              "&[data-selected='true']": {
                backgroundColor: `${t.colors.green[6]}!important`,
              },
            },
          }}
          placeholder="Seçin"
          defaultValue="perakende-satis"
          data={[
            { label: 'Perakende Satış', value: 'perakende-satis' },
            {
              label: 'Deneme',
              value: 'deneme',
            },
          ]}
        />
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

export default SaveTemplateMenu;
