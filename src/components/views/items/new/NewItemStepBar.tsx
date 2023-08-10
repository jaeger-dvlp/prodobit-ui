import React from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@mantine/core';
import { ProdobitAppTheme as t } from '@/theme';
import { CustomCheckIcon } from '@/components/icons';

export default function NewItemStepBar() {
  return (
    <Box
      component={motion.ul}
      exit={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      sx={{
        gap: 0,
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 10,
        width: '100%',
        display: 'flex',
        listStyle: 'none',
        position: 'sticky',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        backdropFilter: 'blur(32px)',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        borderBottom: `1px solid ${t.colors.gray[5]}`,
        [t.fn.smallerThan('md')]: {
          flexWrap: 'wrap',
          position: 'relative',
        },
        '> li': {
          gap: 5,
          width: '100%',
          display: 'flex',
          padding: '40px 30px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          ':not(:last-child)': {
            borderRight: `1px solid ${t.colors.gray[5]}`,
            [t.fn.smallerThan('md')]: {
              borderRight: 'none',
              borderBottom: `1px solid ${t.colors.gray[5]}`,
            },
          },
          '> .ct-icon-completed': {
            width: 24,
            height: 24,
            color: t.colors.green[7],
          },
          '> .content': {
            gap: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            '> .ct-h': {
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '14.4px',
            },
            '> .ct-h.ct-h-completed': {
              color: t.colors.green[7],
            },
            '> .ct-h.ct-h-waiting': {
              color: t.colors.orange[4],
            },
            '> .ct-desc': {
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
              color: t.colors.gray[8],
            },
            '> .ct-s': {
              gap: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              '> .ct-s-t': {
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '14.4px',
                color: t.colors.gray[6],
              },
              '> .ct-s-steps': {
                gap: 3,
                margin: 0,
                padding: 0,
                display: 'flex',
                listStyle: 'none',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                '> li': {
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: `1px solid ${t.colors.gray[5]}`,
                  ':nth-child(1), :nth-child(2)': {
                    backgroundColor: t.colors.gray[8],
                    border: `1px solid ${t.colors.gray[8]}`,
                  },
                  ':nth-child(3)': {
                    backgroundColor: t.colors.green[6],
                    border: `1px solid ${t.colors.green[6]}`,
                  },
                },
              },
            },
          },
        },
      }}
    >
      <Box component="li">
        <Box className="content">
          <Text className="ct-h ct-h-completed">Tamamlandı</Text>
          <Text className="ct-desc">1. Varyasyon Seçimi</Text>
        </Box>
        <CustomCheckIcon className="ct-icon-completed" />
      </Box>
      <Box component="li">
        <Box className="content">
          <Text className="ct-h ct-h-completed">Tamamlandı</Text>
          <Text className="ct-desc">2. Öğe Kimliği Belirleme</Text>
        </Box>
        <CustomCheckIcon className="ct-icon-completed" />
      </Box>
      <Box component="li">
        <Box className="content">
          <Box className="ct-s">
            <Text className="ct-s-t">İşleniyor</Text>
            <Box component="ul" className="ct-s-steps">
              <Box component="li" />
              <Box component="li" />
              <Box component="li" />
              <Box component="li" />
              <Box component="li" />
            </Box>
          </Box>
          <Text className="ct-desc">3. İşleme</Text>
        </Box>
      </Box>
      <Box component="li">
        <Box className="content">
          <Text className="ct-h ct-h-waiting">Beklemede</Text>
          <Text className="ct-desc">4. Öğe İsmi</Text>
        </Box>
      </Box>
    </Box>
  );
}
