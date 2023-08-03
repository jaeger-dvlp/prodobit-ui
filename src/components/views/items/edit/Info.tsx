/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Sx, Table, Text } from '@mantine/core';
import ItemMainInfo from '@/components/views/items/edit/ItemMainInfo';
import EditTextEditor from '@/components/views/items/edit/TextEditor';
import ItemStatusBar from '@/components/views/items/edit/ItemStatusBar';
import ItemFinancialInfo from '@/components/views/items/edit/ItemFinancialInfo';

import {
  BarcodeIcon,
  Canlde2Icon,
  Category2Icon,
  CopyIcon,
  CustomPlusIcon,
  DocIcon,
  EditIcon,
  NotesIcon,
  RefreshIcon,
  RoutingIcon,
  TrashIcon,
} from '@/components/icons';

const motionProps = {
  component: motion.section,
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 20 },
  exit: { opacity: 0, y: 20 },
  transition: {
    damping: 30,
    type: 'spring',
    stiffness: 200,
  },
};

function ProductInfoTable() {
  const MockValues = [
    {
      definition: 'Ürün Tam Adı',
      value: 'Adidas AX2S Terrex Erkek Outdoor Ayakkabı',
    },
    {
      definition: 'Seri Numarası',
      value: 'C02',
    },
  ];

  const RowButtonsSx: Sx = {
    border: 'none',
    height: 'auto',
    borderRadius: 7,
    padding: '5px',
    backgroundColor: `transparent`,
    transition: 'all 150ms ease-in-out',
    ':hover': {
      backgroundColor: t.colors.gray[3],
    },
  };

  const Rows = MockValues.map((item, index) => (
    <tr key={index}>
      <td>{item.definition}</td>
      <td>{item.value}</td>
      <td>
        <Button sx={RowButtonsSx} variant="default">
          <EditIcon width={15} height={15} />
        </Button>
        <Button sx={RowButtonsSx} variant="default">
          <CopyIcon width={15} height={15} />
        </Button>
        <Button sx={RowButtonsSx} variant="default">
          <TrashIcon width={15} height={15} />
        </Button>
      </td>
    </tr>
  ));

  return (
    <Box
      {...motionProps}
      sx={{
        padding: 30,
        width: '100%',
        borderRadius: 30,
        border: '1px solid #DFDEE1',
      }}
    >
      <Table
        sx={{
          margin: 0,
          padding: 0,
          th: {
            fontWeight: 700,
            fontsize: '12px',
            lineHeight: '14.4px',
            color: t.colors.gray[9],
            padding: '0px!important',
            paddingBottom: '10px!important',
          },
          'tbody tr': {
            position: 'relative',
            transition: 'all 150ms ease-in-out',
            td: {
              width: 'fit-content',
              maxWidth: '200px',
              fontsize: '12px',
              lineHeight: '14.4px',
              color: t.colors.gray[5],
              padding: '10px 0px!important',
              transition: 'all 150ms ease-in-out',
              ':nth-child(1)': {
                width: 'fit-content',
                maxWidth: 200,
              },
              ':nth-child(2)': {
                maxWidth: 150,
                color: t.colors.gray[9],
              },
              ':nth-child(3)': {
                gao: 10,
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
              },
              button: {
                color: t.colors.gray[5],
              },
            },
            ':hover': {
              transform: 'scale(1.02)',
              td: {
                color: t.colors.gray[9],
                button: {
                  color: t.colors.gray[9],
                },
              },
            },
          },
        }}
      >
        <thead>
          <tr>
            <th>Özellik Tanımı</th>
            <th>Özelliği</th>
            <th
              style={{
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Button
                variant="default"
                sx={{
                  border: 'none',
                  height: 'auto',
                  borderRadius: 100,
                  padding: '5px 10px',
                  color: t.colors.gray[0],
                  backgroundColor: `${t.colors.gray[8]}!important`,
                }}
              >
                <CustomPlusIcon width={15} height={15} />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>{Rows}</tbody>
      </Table>
    </Box>
  );
}

function ProductPlaceholderBox({ text }: { text: string }) {
  return (
    <Box
      {...motionProps}
      sx={{
        padding: 30,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          borderRadius: 30,
          fontSize: '12px',
          padding: '10px 20px',
          color: t.colors.gray[8],
          backgroundColor: t.colors.gray[3],
        }}
      >
        {text}
      </Text>
    </Box>
  );
}

function InfoSpecBox() {
  const localSpecs = [
    {
      icon: BarcodeIcon,
      text: 'Öğe\nKimliği',
      component: ProductInfoTable,
    },
    {
      icon: Category2Icon,
      text: 'Öğe\nÖzellikleri',
      component: () => <ProductPlaceholderBox text="Özellikler henüz eklenmedi" />,
    },
    {
      icon: Canlde2Icon,
      text: 'Öğe\nSeçeneği',
      component: () => <ProductPlaceholderBox text="Seçenekler henüz eklenmedi" />,
    },
    {
      icon: CustomPlusIcon,
      text: 'Yeni\nEkle',
      component: () => <ProductPlaceholderBox text="Yeni özellik eklemek için tıklayın" />,
    },
  ];
  const [spec, setSpec] = React.useState(localSpecs[0]);

  const LocalSpecComp = spec.component;

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
      <Box
        sx={{
          marginTop: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <LocalSpecComp />
      </Box>
    </Box>
  );
}

function PlaceholderSpecBox({ text }: { text: string }) {
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
        {text}
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
    component: () => <PlaceholderSpecBox text="Tedarikçiler henüz eklenmedi" />,
  },
  {
    icon: RoutingIcon,
    text: 'İlerleyiş',
    component: () => <PlaceholderSpecBox text="İlerleyiş henüz eklenmedi" />,
  },
  {
    icon: NotesIcon,
    text: 'Notlar',
    component: () => <PlaceholderSpecBox text="Notlar henüz eklenmedi" />,
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
