import React from 'react';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text } from '@mantine/core';
import ItemMainInfo from '@/components/views/items/edit/ItemMainInfo';
import EditTextEditor from '@/components/views/items/edit/TextEditor';
import ItemStatusBar from '@/components/views/items/edit/ItemStatusBar';
import ItemFinancialInfo from '@/components/views/items/edit/ItemFinancialInfo';

import {
  BarcodeIcon,
  Canlde2Icon,
  Category2Icon,
  CustomPlusIcon,
  DocIcon,
  NotesIcon,
  RefreshIcon,
  RoutingIcon,
} from '@/components/icons';

const motionProps = {
  component: motion.section,
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 20 },
  transition: {
    damping: 30,
    type: 'spring',
    stiffness: 200,
  },
};

function InfoSpecBox() {
  const localSpecs = [
    {
      icon: BarcodeIcon,
      text: 'Öğe\nKimliği',
      component: Box,
    },
    {
      icon: Category2Icon,
      text: 'Öğe\nÖzellikleri',
      component: Box,
    },
    {
      icon: Canlde2Icon,
      text: 'Öğe\nSeçeneği',
      component: Box,
    },
    {
      icon: CustomPlusIcon,
      text: 'Yeni\nEkle',
      component: Box,
    },
  ];
  const [spec, setSpec] = React.useState(localSpecs[0]);
  return (
    <Box {...motionProps}>
      <Box
        component="ul"
        sx={{
          gap: 10,
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'start',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {localSpecs.map(({ icon: Icon, text }, index) => (
          <Box
            component="button"
            onClick={() => setSpec(localSpecs[index])}
            key={`local-spec-${index}`}
            sx={{
              gap: 11,
              padding: 10,
              maxWidth: 78,
              width: '100%',
              border: 'none',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              fontWeight: 400,
              fontSize: '12px',
              borderRadius: 100,
              paddingBottom: 20,
              alignItems: 'center',
              lineHeight: '14.4px',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 150ms ease-in-out',
              color: spec.text === text ? t.colors.blue[7] : t.colors.blue[3],
              backgroundColor: `${spec.text === text ? t.colors.blue[0] : 'transparent'}!important`,
              svg: {
                width: 24,
                height: 24,
                transition: 'all 150ms ease-in-out',
                color: spec.text === text ? t.colors.blue[7] : t.colors.blue[3],
              },
            }}
          >
            <Box
              sx={{
                width: 62,
                height: 62,
                maxWidth: 62,
                maxHeight: 62,
                display: 'flex',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 150ms ease-in-out',
                backgroundColor: spec.text === text ? t.colors.blue[1] : 'transparent',
              }}
            >
              <Icon />
            </Box>
            <Text sx={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{text}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function SupplierSpecBox() {
  return (
    <Box {...motionProps} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Text
        sx={{
          fontSize: '14px',
          padding: '5px 20px',
          borderRadius: 100,
          color: t.colors.blue[7],
          backgroundColor: t.colors.blue[1],
        }}
      >
        Tedarikçiler
      </Text>
    </Box>
  );
}

function ProgressSpecBox() {
  return (
    <Box {...motionProps} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Text
        sx={{
          fontSize: '14px',
          padding: '5px 20px',
          borderRadius: 100,
          color: t.colors.blue[7],
          backgroundColor: t.colors.blue[1],
        }}
      >
        İlerleyiş
      </Text>
    </Box>
  );
}

function NotesSpecBox() {
  return (
    <Box {...motionProps} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Text
        sx={{
          fontSize: '14px',
          padding: '5px 20px',
          borderRadius: 100,
          color: t.colors.blue[7],
          backgroundColor: t.colors.blue[1],
        }}
      >
        Notlar
      </Text>
    </Box>
  );
}

const SpecButtons = [
  {
    icon: DocIcon,
    text: 'Bilgiler',
    component: InfoSpecBox,
  },
  {
    icon: RefreshIcon,
    text: 'Tedarikçiler',
    component: SupplierSpecBox,
  },
  {
    icon: RoutingIcon,
    text: 'İlerleyiş',
    component: ProgressSpecBox,
  },
  {
    icon: NotesIcon,
    text: 'Notlar',
    component: NotesSpecBox,
  },
];

function EditItemInfo() {
  const [spec, setSpec] = React.useState(SpecButtons[0]);

  const SpecComp = spec.component;

  return (
    <>
      <Box
        component="section"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <ItemMainInfo />
        <ItemStatusBar />
        <ItemFinancialInfo />
        <EditTextEditor />
      </Box>
      <Box
        sx={{
          gap: 30,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 0,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {SpecButtons.map(({ icon: Icon, text }, index) => (
            <Button
              component="li"
              variant="default"
              onClick={() => setSpec(SpecButtons[index])}
              key={`spec-button-${index}`}
              sx={{
                gap: 10,
                height: 'auto',
                border: 'none',
                display: 'flex',
                fontWeight: 500,
                fontSize: '15px',
                borderRadius: 100,
                lineHeight: '18px',
                padding: '9px 18px',
                width: 'fit-content',
                flexDirection: 'row',
                transition: 'all 150ms ease-in-out',
                backgroundColor: `${
                  spec.text === text ? t.colors.blue[0] : 'transparent'
                }!important`,
                color: spec.text === text ? t.colors.blue[5] : t.colors.gray[8],
                svg: {
                  width: '16px',
                  height: '16px',
                  marginRight: '10px',
                  color: t.colors.blue[5],
                },
              }}
            >
              <Icon width={16} height={16} />
              <Text>{text}</Text>
            </Button>
          ))}
        </Box>
        <SpecComp />
      </Box>
    </>
  );
}

export default EditItemInfo;
