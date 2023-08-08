/* eslint-disable react/no-unstable-nested-components */
import 'dayjs/locale/tr';
import React from 'react';
import dayjs from 'dayjs';
import DayjsRelativeTime from 'dayjs/plugin/relativeTime';
import { FileTypeImages, MockProgressData, MockSupplierData, TProgressData } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Image, Sx, Table, Text, TextInput } from '@mantine/core';
import ItemMainInfo from '@/components/views/items/edit/ItemMainInfo';
import EditTextEditor from '@/components/views/items/edit/TextEditor';
import ItemStatusBar from '@/components/views/items/edit/ItemStatusBar';
import ItemFinancialInfo from '@/components/views/items/edit/ItemFinancialInfo';

import {
  DocIcon,
  CopyIcon,
  EditIcon,
  NotesIcon,
  TrashIcon,
  RefreshIcon,
  RoutingIcon,
  BarcodeIcon,
  Canlde2Icon,
  Category2Icon,
  CustomPlusIcon,
  ExternalUrlIcon,
  CustomChevronDown,
  InfoIcon,
  CustomCheckIcon,
  DownloadCloudIcon,
} from '@/components/icons';

dayjs.extend(DayjsRelativeTime);
dayjs.locale('tr');

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
          width: '100%!important',
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

function SupplierSpecBox() {
  const [view, setView] = React.useState<'suppliers' | 'manufacturers'>('suppliers');
  const [suppliers, setSuppliers] = React.useState(
    MockSupplierData.map((item) => ({
      ...item,
      persons: item.persons.map((person, i) => ({
        ...person,
        isActive: i === 0,
      })),
      isActive: false,
    })),
  );

  const HandleSupplierCollapse = (isActive: boolean, index: number) => {
    const newSuppliers = suppliers;
    newSuppliers[index].isActive = !isActive;
    setSuppliers([...newSuppliers]);
  };

  const HandleSupplierPersonSelect = (supplierIndex: number, personIndex: number) => {
    const supplier = suppliers[supplierIndex];
    const newPersons = supplier.persons.map((person, i) => ({
      ...person,
      isActive: i === personIndex,
    }));

    const newSuppliers = suppliers.map((item, i) => ({
      ...item,
      persons: i === supplierIndex ? newPersons : item.persons,
    }));

    setSuppliers([...newSuppliers]);
  };

  const getSupplierUrlWithoutProtocol = (url: string) => {
    const urlWithoutProtocol = url.replace(/(^\w+:|^)\/\//, '');
    return urlWithoutProtocol;
  };

  return (
    <Box
      {...motionProps}
      sx={{
        gap: 45,
        padding: 30,
        display: 'flex',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: `1px solid ${t.colors.gray[3]}`,
      }}
    >
      <Box
        sx={{
          gap: 20,
          width: '100%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="default"
          onClick={() => setView('suppliers')}
          sx={{
            margin: 0,
            padding: 0,
            border: 'none',
            height: 'auto',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '21.6px',
            transition: 'all 150ms ease-in-out',
            opacity: view === 'suppliers' ? 1 : 0.5,
            backgroundColor: 'transparent!important',
            color: view === 'suppliers' ? t.colors.blue[6] : '#000',
          }}
        >
          <Text>Tedarikçi Detayları</Text>
        </Button>
        <Button
          variant="default"
          onClick={() => setView('manufacturers')}
          sx={{
            margin: 0,
            padding: 0,
            border: 'none',
            height: 'auto',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '21.6px',
            transition: 'all 150ms ease-in-out',
            opacity: view === 'manufacturers' ? 1 : 0.5,
            backgroundColor: 'transparent!important',
            color: view === 'manufacturers' ? t.colors.blue[6] : '#000',
          }}
        >
          <Text>Üretici Detayları</Text>
        </Button>
      </Box>
      <Box
        {...motionProps}
        component={motion.ul}
        key={`suppliers-${view}`}
        sx={{
          gap: 40,
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {suppliers.map((supplier, i) => (
          <Box
            key={`supplier-${i}`}
            component="li"
            sx={{
              margin: 0,
              padding: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                gap: 5,
                margin: 0,
                padding: 0,
                width: '100%',
                border: 'none',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent!important',
              }}
            >
              <Box
                sx={{
                  gap: 15,
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Image width={48} height={48} fit="cover" radius={70} src={supplier.avatar} />
                <Box
                  sx={{
                    gap: 8,
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      gap: 8,
                      display: 'flex',
                      width: 'fit-content',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: '15px',
                        fontWeight: 500,
                        lineHeight: '18px',
                      }}
                    >
                      {supplier.companyName}
                    </Text>
                    <Box
                      sx={{
                        gap: 8,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="default"
                        sx={{
                          margin: 0,
                          padding: 0,
                          color: '#000',
                          border: 'none',
                          height: 'auto',
                          backgroundColor: 'transparent!important',
                        }}
                      >
                        <InfoIcon width={19} height={19} />
                      </Button>
                      <Button
                        variant="default"
                        sx={{
                          margin: 0,
                          padding: 0,
                          color: '#000',
                          border: 'none',
                          height: 'auto',
                          backgroundColor: 'transparent!important',
                        }}
                      >
                        <EditIcon width={16} height={16} />
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      gap: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyItems: 'center',
                    }}
                  >
                    <Text
                      component="a"
                      href={supplier.webSite}
                      sx={{
                        gap: 4,
                        display: 'flex',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontSize: '15px',
                        flexWrap: 'nowrap',
                        padding: '2px 7px',
                        lineHeight: '18px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: t.colors.yellow[6],
                        backgroundColor: t.colors.yellow[1],
                        ':hover': {
                          backgroundColor: t.colors.yellow[2],
                        },
                      }}
                    >
                      <span>{getSupplierUrlWithoutProtocol(supplier.webSite)}</span>
                      <ExternalUrlIcon width={15} height={15} />
                    </Text>
                    <Text
                      component="a"
                      href={supplier.gMaps}
                      sx={{
                        gap: 4,
                        display: 'flex',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontSize: '15px',
                        flexWrap: 'nowrap',
                        padding: '2px 7px',
                        lineHeight: '18px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: t.colors.green[5],
                        backgroundColor: t.colors.green[1],
                        ':hover': {
                          backgroundColor: t.colors.green[2],
                        },
                      }}
                    >
                      <span>Haritada Aç</span>
                      <ExternalUrlIcon width={15} height={15} />
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Button
                variant="default"
                sx={{
                  margin: 0,
                  padding: 0,
                  border: 'none',
                  height: 'auto',
                  width: 'fit-content',
                  backgroundColor: 'transparent!important',
                  rotate: supplier.isActive ? '180deg' : '0deg',
                  transition: 'all 150ms ease-in-out',
                }}
                onClick={() => HandleSupplierCollapse(supplier.isActive, i)}
              >
                <CustomChevronDown width={25} height={25} color="#000" />
              </Button>
            </Box>
            <AnimatePresence>
              {supplier.isActive && (
                <Box
                  sx={{
                    width: '100%',
                    margin: '20px 0px 20px 0px',
                    borderTop: `1px solid ${t.colors.gray[3]}`,
                  }}
                  component={motion.div}
                  exit={{ opacity: 0, height: 0, margin: 0 }}
                  initial={{ opacity: 0, height: 0, margin: 0 }}
                  animate={{ opacity: 1, height: 'auto', margin: '20px 0px 20px 0px' }}
                >
                  <Box
                    mt={20}
                    sx={{
                      gap: 40,
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="ul"
                      sx={{
                        gap: 6,
                        margin: 0,
                        padding: 0,
                        width: '40%',
                        display: 'flex',
                        alignItems: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      {supplier.persons.map((person, y) => (
                        <Box
                          component="li"
                          key={`supplier-${i}-person-${y}`}
                          sx={{
                            display: 'flex',
                            padding: '13px 15px',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            transition: 'all 150ms ease-in-out',
                            backgroundColor: person.isActive ? t.colors.blue[0] : 'transparent',
                          }}
                        >
                          <Box
                            sx={{
                              gap: 5,
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              alignItems: 'flex-start',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <Text
                              sx={{
                                fontWeight: 600,
                                fontSize: '12px',
                                lineHeight: '14.4px',
                                color: t.colors.gray[9],
                              }}
                            >
                              {person.role}
                            </Text>
                            <Text
                              sx={{
                                opacity: 0.5,
                                fontWeight: 400,
                                fontSize: '12px',
                                lineHeight: '14.4px',
                                color: t.colors.gray[9],
                              }}
                            >
                              {person.fullName}
                            </Text>
                          </Box>
                          <Button
                            variant="default"
                            sx={{
                              margin: 0,
                              padding: 3,
                              borderRadius: 5,
                              border: 'none',
                              width: 'auto',
                              height: 'auto',
                              backgroundColor: 'transparent',
                              transition: 'all 150ms ease-in-out',
                              ':hover': {
                                backgroundColor: t.colors.gray[3],
                              },
                            }}
                            onClick={() => HandleSupplierPersonSelect(i, y)}
                          >
                            <EditIcon width={22} height={22} />
                          </Button>
                        </Box>
                      ))}
                      <Button
                        variant="default"
                        sx={{
                          opacity: 0.5,
                          width: '100%',
                          color: '#000',
                          height: 'auto',
                          border: 'none',
                          display: 'flex',
                          fontWeight: 400,
                          fontSize: '15px',
                          lineHeight: '18px',
                          flexDirection: 'row',
                          padding: '13px 15px',
                          transition: 'all 150ms ease-in-out',
                          borderTop: `1px solid ${t.colors.gray[3]}`,
                          ':hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        <CustomPlusIcon width={37} height={37} />
                        <Text
                          ml={6}
                          sx={{
                            whiteSpace: 'pre-wrap',
                          }}
                        >
                          {'Yeni Kişi\nKaydı Ekle'}
                        </Text>
                      </Button>
                    </Box>

                    {(() => {
                      const person = supplier.persons.find((p) => p.isActive);
                      if (!person) return null;

                      return (
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          sx={{
                            gap: 15,
                            width: '60%',
                            display: 'flex',
                            alignItems: 'stretch',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <Box
                            sx={{
                              gap: 5,
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Text
                              sx={{
                                color: '#000',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '21.6px',
                              }}
                            >
                              E-Mail
                            </Text>
                            <Button
                              variant="default"
                              sx={{
                                padding: '5px 10px',
                                color: '#000',
                                border: 'none',
                                height: 'auto',
                              }}
                            >
                              <CustomPlusIcon width={18} height={18} />
                            </Button>
                          </Box>
                          <Box
                            component="ul"
                            sx={{
                              gap: 7,
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            {person.emailAddresses.map((email, z) => (
                              <Box
                                component="li"
                                key={`supplier-${i}-person-${person.id}-email-${z}`}
                                sx={{
                                  margin: 0,
                                  display: 'flex',
                                  fontWeight: 400,
                                  borderRadius: 45,
                                  fontSize: '15px',
                                  lineHeight: '18px',
                                  padding: '5px 16px',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  border: `1px solid ${t.colors.gray[3]}`,
                                }}
                              >
                                <TextInput
                                  value={email}
                                  id={`supplier-${i}-person-${person.id}-email-${z}`}
                                  styles={{
                                    input: {
                                      margin: 0,
                                      padding: 0,
                                      border: 'none',
                                    },
                                  }}
                                />
                                <Box
                                  sx={{
                                    gap: 9,
                                    display: 'flex',
                                    width: 'fit-content',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const Input = document.querySelector(
                                        `#supplier-${i}-person-${person.id}-email-${z}`,
                                      ) as HTMLInputElement;

                                      if (Input) {
                                        Input.focus();
                                      }
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <EditIcon width={15} height={15} />
                                  </Button>
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const value = email;
                                      navigator.clipboard.writeText(value);
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <CopyIcon width={15} height={15} />
                                  </Button>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                          <Box
                            sx={{
                              gap: 5,
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Text
                              sx={{
                                color: '#000',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '21.6px',
                              }}
                            >
                              Telefon
                            </Text>
                            <Button
                              variant="default"
                              sx={{
                                padding: '5px 10px',
                                color: '#000',
                                border: 'none',
                                height: 'auto',
                              }}
                            >
                              <CustomPlusIcon width={18} height={18} />
                            </Button>
                          </Box>
                          <Box
                            component="ul"
                            sx={{
                              gap: 7,
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            {person.phoneNumbers.map((phoneNumber, z) => (
                              <Box
                                component="li"
                                key={`supplier-${i}-person-${person.id}-email-${z}`}
                                sx={{
                                  margin: 0,
                                  display: 'flex',
                                  fontWeight: 400,
                                  borderRadius: 45,
                                  fontSize: '15px',
                                  lineHeight: '18px',
                                  padding: '5px 16px',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  border: `1px solid ${t.colors.gray[3]}`,
                                }}
                              >
                                <TextInput
                                  value={phoneNumber}
                                  id={`supplier-${i}-person-${person.id}-phone-${z}`}
                                  styles={{
                                    input: {
                                      margin: 0,
                                      padding: 0,
                                      border: 'none',
                                    },
                                  }}
                                />
                                <Box
                                  sx={{
                                    gap: 9,
                                    display: 'flex',
                                    width: 'fit-content',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const Input = document.querySelector(
                                        `#supplier-${i}-person-${person.id}-phone-${z}`,
                                      ) as HTMLInputElement;

                                      if (Input) {
                                        Input.focus();
                                      }
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <EditIcon width={15} height={15} />
                                  </Button>
                                  <Button
                                    variant="default"
                                    onClick={() => {
                                      const value = phoneNumber;
                                      navigator.clipboard.writeText(value);
                                    }}
                                    sx={{
                                      padding: 0,
                                      border: 'none',
                                      height: 'auto',
                                      color: t.colors.gray[6],
                                      backgroundColor: 'transparent',
                                    }}
                                  >
                                    <CopyIcon width={15} height={15} />
                                  </Button>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      );
                    })()}
                  </Box>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ProgressSpecBox() {
  const [progressDatas] = React.useState<TProgressData[]>(MockProgressData);

  const getRenderedDate = (date: string) => {
    const text = dayjs(date).fromNow();
    return `${text[0].toUpperCase()}${text.slice(1)}`;
  };

  function ProgressCompByType({ progressData }: { progressData: TProgressData }) {
    const { type, date } = progressData;

    if (type === 'create-item') {
      return (
        <Box
          component="li"
          sx={{
            gap: 5,
            margin: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            padding: '30px 30px 30px 50px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              gap: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              src={progressData.user.avatar}
              width={48}
              height={48}
              radius={48}
              fit="contain"
            />
            <Box
              sx={{
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Text
                sx={{
                  color: '#000',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '18px',
                }}
              >
                <strong>{progressData.user.name}</strong> Öğeyi ekledi.
              </Text>
              <Text
                sx={{
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '14.4px',
                  color: t.colors.gray[5],
                }}
              >
                {getRenderedDate(date)}
              </Text>
            </Box>
          </Box>
          <CustomCheckIcon
            style={{
              color: '#000',
            }}
            width={23}
            height={23}
          />
        </Box>
      );
    }

    if (type === 'add-document') {
      return (
        <Box
          component="li"
          sx={{
            gap: 10,
            margin: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '30px 30px 30px 50px',
          }}
        >
          <Box
            sx={{
              gap: 5,
              margin: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                gap: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Image
                src={progressData.user.avatar}
                width={48}
                height={48}
                radius={48}
                fit="contain"
              />
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <Text
                  sx={{
                    color: '#000',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '18px',
                  }}
                >
                  <strong>{progressData.user.name}</strong> Dökümanlara{' '}
                  <strong>{progressData.files.length} Yeni</strong> Dosya ekledi.
                </Text>
                <Text
                  sx={{
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '14.4px',
                    color: t.colors.gray[5],
                  }}
                >
                  {getRenderedDate(date)}
                </Text>
              </Box>
            </Box>
            <CustomCheckIcon
              style={{
                color: '#000',
              }}
              width={23}
              height={23}
            />
          </Box>
          <Box
            component="ul"
            sx={{
              gap: 10,
              margin: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px 10px 0px 60px',
              justifyContent: 'flex-start',
            }}
          >
            {progressData.files.map((file, y) => {
              return (
                <Box
                  component="li"
                  key={`progress-${progressData.id}-file-${y}`}
                  sx={{
                    gap: 10,
                    margin: 0,
                    width: '100%',
                    display: 'flex',
                    padding: '20px 15px',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      gap: 10,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Image src={FileTypeImages[file.type]} width={50} height={50} fit="contain" />
                    <Box
                      sx={{
                        gap: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}
                    >
                      <Text
                        sx={{
                          color: '#000',
                          fontWeight: 600,
                          fontSize: '15px',
                          lineHeight: '18px',
                        }}
                      >
                        {file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name}
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
                        <Text
                          sx={{
                            fontWeight: 600,
                            fontSize: '12px',
                            lineHeight: '14.4px',
                            color: t.colors.gray[5],
                          }}
                        >
                          {file.size / 1000000} MB
                        </Text>
                        <Box w={5} h={5} bg={t.colors.gray[3]} sx={{ borderRadius: 5 }} />
                        <Text
                          sx={{
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '14.4px',
                            color: t.colors.gray[5],
                          }}
                        >
                          {getRenderedDate(file.date)}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    variant="default"
                    sx={{
                      gap: 10,
                      margin: 0,
                      borderRadius: 100,
                      padding: '9px 18px',
                      color: t.colors.gray[8],
                      border: `1px solid ${t.colors.gray[5]}`,
                    }}
                  >
                    <DownloadCloudIcon width={16} height={16} />
                    <Text ml={10}>İndir</Text>
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>
      );
    }
  }

  return (
    <Box
      {...motionProps}
      component={motion.ul}
      sx={{
        margin: 0,
        padding: 0,
        display: 'flex',
        borderRadius: 30,
        alignItems: 'start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: `1px solid ${t.colors.gray[3]}`,
        '> li:not(:last-child)': {
          borderBottom: `1px solid ${t.colors.gray[3]}`,
        },
      }}
    >
      {progressDatas.map((progress, i) => (
        <ProgressCompByType progressData={progress} key={`progress-${i}`} />
      ))}
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
          alignItems: 'flex-start',
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
          alignItems: 'stretch',
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
