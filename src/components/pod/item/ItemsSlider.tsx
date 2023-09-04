import React from 'react';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import { CustomArrowLeftIcon } from '@/components/icons';
import { Box, Button, Divider, Text, createStyles } from '@mantine/core';
import { getColorByStatus, getProdItemPercent } from '@/views/pod/production/list';

type Props = {
  item: any;
};

const styles = createStyles({
  topBar: {
    gap: 33,
    display: 'flex',
    padding: '0px 50px',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '> .back-btn': {
      height: '100%',
      borderRadius: 10,
      minHeight: '110px',
      padding: '10px 30px',
      backgroundColor: 'transparent',
      border: `1px solid rgba(0, 0, 0, 0.10)`,
      '> div > span': {
        gap: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '> svg': {
          width: 31,
          height: 31,
          color: t.colors.gray[8],
        },
        '> .mantine-Text-root': {
          fontWeight: 500,
          fontSize: '12px',
          color: t.colors.gray[9],
        },
      },
    },
    '> .item-line': {
      gap: 23,
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'stretch',
      '> .item-line-top-container': {
        gap: 15,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '> .item-line-id': {
          gap: 20,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          '> .item-line-top-no': {
            fontWeight: 500,
            fontSize: '22px',
            borderRadius: 100,
            textAlign: 'center',
            padding: '10px 20px',
          },
          '> .item-line-top-name': {
            fontWeight: 700,
            fontSize: '15px',
            maxWidth: '120px',
            whiteSpace: 'pre-wrap',
            color: t.colors.gray[9],
          },
        },
        '> .item-line-spec-container': {
          gap: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '> .item-line-spec': {
            gap: 0,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
            '> .spec-name': {
              opacity: 0.4,
              lineHeight: 1,
              fontWeight: 700,
              fontSize: '12px',
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',

              color: t.colors.gray[9],
            },

            '>.spec-value': {
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: 1,
              color: t.colors.gray[9],
            },
          },
        },
      },
      '> .item-prods-container': {
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'stretch',
        '> .prod-progress-item': { height: 34, width: '100%', borderRadius: 5 },
      },
    },
  },
  container: {
    gap: 5,
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '60px 0px',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'stretch',
  },
});

function TopBar({ item }: Props) {
  const { classes } = styles();
  const itemStatusColor = getColorByStatus(item?.status);

  return (
    <Box className={classes.topBar}>
      <Button className="back-btn" variant="default">
        <CustomArrowLeftIcon />
        <Text>Geri</Text>
      </Button>
      <Box className="item-line">
        <Box className="item-line-top-container">
          <Box className="item-line-id">
            <Text className="item-line-top-no" c={itemStatusColor[0]} bg={itemStatusColor[5]}>
              {item?.no}
            </Text>

            <Text className="item-line-top-name">{item?.name}</Text>
          </Box>
          <Divider orientation="vertical" c="#000" opacity={0.2} />
          <Box className="item-line-spec-container">
            <Box className="item-line-spec">
              <Text className="spec-name">SİLİNENLER</Text>
              <Text className="spec-value">3.460</Text>
            </Box>
            <Box className="item-line-spec">
              <Text className="spec-name">KRİTER DIŞI</Text>
              <Text className="spec-value">250</Text>
            </Box>
            <Box className="item-line-spec">
              <Text className="spec-name">TOPLAM ÜRETİM</Text>
              <Text className="spec-value">15.200</Text>
            </Box>
          </Box>
        </Box>
        <Box className="item-prods-container">
          {item &&
            item?.production &&
            item?.production.map((prod, i) => (
              <Box
                component={motion.div}
                transition={{
                  duration: 1,
                  ease: 'anticipate',
                  delay: i * 0.5 || 0.5,
                }}
                animate={{
                  maxWidth: [
                    '0px',
                    `${getProdItemPercent(
                      prod.count,
                      item.production.reduce((a, b) => a + b.count, 0),
                    )}%`,
                  ],
                }}
                className="prod-progress-item"
                key={`${item.id}-progress-${i}`}
                bg={getColorByStatus(prod.status)[4]}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

function ItemsSlider({ item }: Props) {
  const { classes } = styles();
  return (
    <Box className={classes.container}>
      <TopBar item={item} />
    </Box>
  );
}

export default ItemsSlider;
