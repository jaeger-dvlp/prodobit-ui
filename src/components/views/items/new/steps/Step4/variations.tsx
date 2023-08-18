import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomCheckIcon, CustomOutlineIcon, CustomXICon } from '@/components/icons';

type T = {
  id: string;
  name: string;
};

type Props<Y extends T> = {
  isActive: boolean | string | null;
  itemProps: Y[];
  setItemProps: React.Dispatch<React.SetStateAction<Y[]>>;
};

function Step4Variations<Y extends T>({ isActive, itemProps, setItemProps }: Props<Y>) {
  const [editModeFor, setEditModeFor] = React.useState<string | null>(null);

  const deleteItem = (id: string) => {
    setItemProps((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AnimatePresence>
      {isActive && (
        <Box
          component={motion.div}
          exit={{ opacity: 0, width: 0, x: -100, scaleX: 0 }}
          initial={{ opacity: 0, width: 0, x: -100, scaleX: 0 }}
          animate={{ opacity: 1, width: 'fit-content', x: 10, scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              gap: 40,
              padding: 30,
              maxWidth: 476,
              height: '100%',
              display: 'flex',
              borderRadius: 40,
              overflow: 'hidden',
              alignItems: 'stretch',
              flexDirection: 'column',
              backgroundColor: '#fff',
              justifyContent: 'flex-start',
              boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
            }}
          >
            <Text
              sx={{
                fontWeight: 300,
                fontSize: '45px',
                lineHeight: '54px',
                padding: '0px 20px',
                color: t.colors.gray[8],
              }}
            >
              Varyasyon Değişkenleri
            </Text>
            <Text
              sx={{
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '22px',
                padding: '0px 20px',
                color: t.colors.gray[5],
              }}
            >
              Varyasyon değişkeni özelliği ürünlerinizin sabit olandeğerlerini tutar yalnızca
              değiştirilecek bölgerini düzenlemenize yardımcı olur. Böylece hızlı ve daha sadece bir
              ekleme paneli oluşturmuş olursunuz kendinize.
            </Text>
            <Box
              component="ul"
              sx={{
                gap: 30,
                padding: 0,
                display: 'flex',
                listStyle: 'none',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                '> li': {
                  gap: 5,
                  padding: 30,
                  display: 'flex',
                  borderRadius: 30,
                  alignItems: 'center',
                  flexDirection: 'row',
                  transition: 'all 0.2s ease',
                  justifyContent: 'space-between',
                  '.item-name': {
                    fontWeight: 400,
                    fontSize: '26px',
                    lineHeight: '31.2px',
                  },
                  '.btn-edit': {
                    width: 'auto',
                    color: '#000',
                    height: 'auto',
                    borderRadius: 100,
                    padding: '5px 15px',
                    border: '1px solid #000',
                    backgroundColor: 'transparent!important',
                    '> div > span > svg': {
                      width: 15,
                      height: 15,
                    },
                  },
                  '.edit-controls': {
                    gap: 10,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    button: {
                      padding: 0,
                      width: 'auto',
                      border: 'none',
                      height: 'auto',
                      backgroundColor: 'transparent!important',
                      '> div > span': {
                        gap: 8,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '> svg': {
                          width: 24,
                          height: 24,
                        },
                        '.mantine-Text-root': {
                          fontWeight: 300,
                          fontSize: '22px',
                          lineHeight: '26.4px',
                        },
                      },
                      '&:nth-of-type(1)': {
                        color: t.colors.red[3],
                        '&:hover': {
                          color: t.colors.red[4],
                        },
                      },
                      '&:nth-of-type(2)': {
                        color: t.colors.green[2],
                        '&:hover': {
                          color: t.colors.green[3],
                        },
                      },
                    },
                  },
                },
              }}
            >
              {itemProps.map((item) => (
                <Box
                  component="li"
                  key={`item-${item.id}`}
                  sx={{
                    backgroundColor: editModeFor === item.id ? t.colors.gray[8] : t.colors.gray[2],
                  }}
                >
                  <Text
                    className="item-name"
                    sx={{
                      color: editModeFor === item.id ? t.colors.gray[0] : t.colors.gray[9],
                    }}
                  >
                    {item.name}
                  </Text>
                  <AnimatePresence mode="wait">
                    {editModeFor !== item.id && (
                      <Button
                        component={motion.button}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        variant="default"
                        className="btn-edit"
                        key={`edit-${item.id}`}
                        onClick={() => setEditModeFor(item.id)}
                      >
                        <CustomOutlineIcon />
                      </Button>
                    )}
                    {editModeFor === item.id && (
                      <Box
                        component={motion.div}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="edit-controls"
                      >
                        <Button onClick={() => setEditModeFor(null)} variant="default">
                          <CustomXICon />
                          <Text>İptal</Text>
                        </Button>
                        <Button onClick={() => deleteItem(item.id)} variant="default">
                          <CustomCheckIcon />
                          <Text>Silin</Text>
                        </Button>
                      </Box>
                    )}
                  </AnimatePresence>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}

export default Step4Variations;
