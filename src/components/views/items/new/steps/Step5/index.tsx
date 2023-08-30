import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text } from '@mantine/core';
import NewItemToolbar from '@/components/views/items/new/Toolbar';
import { InfoSpecBox } from '@/components/views/items//edit/Info';
import ItemMainInfo from '@/components/views/items/edit/ItemMainInfo';
import { stepContainerMotionProps } from '@/components/views/items/new/steps';
import ItemFinancialInfo from '@/components/views/items/edit/ItemFinancialInfo';
import { CustomPlusIcon, CustomRightLongChevronIcon } from '@/components/icons';

function NewItemStep5() {
  const navigate = useNavigate();
  const goToNextStep = () => navigate('/app/items/list');
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
          Ürün Özeti
        </Text>
        <Box
          sx={{
            gap: 32,
            width: '100%',
            maxWidth: 684,
            display: 'flex',
            borderRadius: 40,
            padding: '50px 30px',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#fff',
            transition: 'all 0.15s ease-in-out',
            boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          }}
        >
          <Box
            sx={{
              gap: 40,
              width: '100%',
              display: 'flex',
              padding: '10px 30px',
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <ItemMainInfo withBrand />
            <Box
              sx={{
                gap: 40,
                padding: 30,
                display: 'flex',
                borderRadius: 30,
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                border: `1px solid ${t.colors.gray[3]}`,
              }}
            >
              <ItemFinancialInfo />
              <InfoSpecBox noTableBorder />
            </Box>
          </Box>
        </Box>
      </Box>
      <NewItemToolbar>
        <Button
          variant="default"
          sx={{
            color: t.colors.blue[4],
            backgroundColor: '#fff',
            border: `1px solid ${t.colors.blue[5]}`,
            transition: 'all 0.15s ease-in-out',
            ':hover': {
              backgroundColor: t.colors.blue[0],
            },
          }}
        >
          <CustomPlusIcon />
          <Text>Varyasyon Ürünü Ekle</Text>
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
          <Text>Yayınla</Text>
          <CustomRightLongChevronIcon />
        </Button>
      </NewItemToolbar>
    </>
  );
}

export default NewItemStep5;
