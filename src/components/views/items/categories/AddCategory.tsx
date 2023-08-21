import { Box, Button, Text } from '@mantine/core';
import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { CustomPlusIcon } from '@/components/icons';

const NewCTimage = '/assets/img/new-ct.png';

function AddCategory() {
  return (
    <Box
      sx={{
        gap: 48,
        width: '100%',
        maxWidth: 590,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img
        style={{
          width: '100%',
          maxWidth: '404px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        src={NewCTimage}
        alt="New Category"
      />
      <Text
        sx={{
          fontWeight: 400,
          fontSize: '32px',
          textAlign: 'center',
          lineHeight: '44.4px',
          color: t.colors.green[7],
        }}
      >
        Kategorilerinizi Düzenlemek İçin Kategori Seçin Ve Ya
      </Text>
      <Button
        variant="default"
        sx={{
          height: 'auto',
          borderRadius: 100,
          padding: '20px 30px',
          color: t.colors.green[9],
          transition: 'all 0.15s ease',
          backgroundColor: 'transparent',
          border: `1px solid ${t.colors.green[6]}`,
          '&:hover': {
            backgroundColor: '#fff',
          },
          '> div > span': {
            gap: 15,
            display: 'flex',
            fontSize: '22px',
            fontWeight: 300,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            '> svg': {
              width: 24,
              height: 24,
            },
          },
        }}
      >
        <CustomPlusIcon />
        <Text>Kategori Ekle</Text>
      </Button>
    </Box>
  );
}

export default AddCategory;
