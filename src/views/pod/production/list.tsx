import React from 'react';
import { PodMockProdLine } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import PodSidebar from '@/components/pod/sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Text, Title, createStyles } from '@mantine/core';
import {
  CustomArrowRightIcon,
  CustomPauseIcon,
  CustomRulerIcon,
  CustomSpeedoMeterIcon,
  EyeIcon,
  PenToolIcon,
  SandTimerIcon,
} from '@/components/icons';

export const getProdItemPercent = (self: number, total: number) => {
  const percent = (self / total) * 100;
  return percent;
};

export const getColorByStatus = (status: string) => {
  switch (status) {
    case 'completed':
      return t.colors.purple;
    case 'waiting':
      return t.colors.yellow;
    case 'ready':
      return t.colors.green;
    case 'stopped':
      return t.colors.red;
    default:
      return t.colors.gray;
  }
};

const Styles = createStyles({
  controlBar: {
    gap: 35,
    display: 'flex',
    alignItems: 'end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '> .mantine-Title-root': {
      fontWeight: 300,
      fontSize: '31px',
      minWidth: 'fit-content',
      color: t.colors.gray[9],
    },
    '> .tabs-container': {
      gap: 30,
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      alignItems: 'center',
      justifyContent: 'stretch',
      '> .tab': {
        opacity: 0.5,
        border: 'none',
        height: 'auto',
        fontWeight: 500,
        fontSize: '18px',
        borderRadius: 0,
        padding: '12px 2px',
        position: 'relative',
        color: t.colors.gray[9],
        backgroundColor: 'transparent!important',
        transition: 'all 0.2s ease-in-out',
        '&::after': {
          left: 0,
          bottom: 0,
          content: '""',
          width: '100%',
          height: '0px',
          position: 'absolute',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
        },
        "&[data-tab-active='true']": {
          opacity: 1,
          color: t.colors.purple[6],
          '&::after': {
            height: '3px',
            backgroundColor: t.colors.purple[6],
          },
        },
      },
    },
  },
  prodLineCont: {
    gap: 16,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  prodLine: {
    gap: 0,
    padding: 0,
    display: 'grid',
    borderRadius: 20,
    position: 'relative',
    placeItems: 'stretch',
    placeContent: 'center',
    backdropFilter: 'blur(12.5px)',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    '&:hover': {
      transform: 'scale(1.025)',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
    },
    '> .main-panel': {
      gap: 55,
      display: 'grid',
      padding: '20px 30px',
      placeItems: 'center',
      placeContent: 'center',
      gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
      [t.fn.smallerThan('lg')]: {
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      },
      '> .left-col': {
        gap: 30,
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        gridColumn: 'span 3',
        placeContent: 'start',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        [t.fn.smallerThan('lg')]: {
          gridColumn: 'span 11',
        },
        '> .line-no': {
          width: '100%',
          fontWeight: 500,
          fontSize: '22px',
          borderRadius: 100,
          textAlign: 'center',
          padding: '15px 30px',
          color: t.colors.purple[0],
        },
        '> .line-name': {
          fontSize: '15px',
          fontWeight: 700,
          whiteSpace: 'pre-wrap',
          color: t.colors.gray[9],
        },
      },
      '> .center-col': {
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        gridColumn: 'span 6',
        placeContent: 'stretch',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        [t.fn.smallerThan('lg')]: {
          gridColumn: 'span 11',
        },
        '> .cc-item': {
          gap: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'center',
          '> .cc-title': {
            opacity: 0.5,
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: 1.1,
            color: t.colors.gray[9],
          },
          '> .cc-value': {
            fontWeight: 500,
            lineHeight: 1.1,
            fontSize: '22px',
            color: t.colors.gray[9],
          },
        },
        '> .cc-desc': {
          width: '100%',
          maxWidth: 120,
          fontSize: '15px',
          fontWeight: 400,
          textAlign: 'left',
          whiteSpace: 'pre-wrap',
          color: t.colors.gray[9],
        },
      },
      '> .right-col': {
        gap: 2,
        width: '100%',
        display: 'flex',
        gridColumn: 'span 2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [t.fn.smallerThan('lg')]: {
          gridColumn: 'span 11',
        },
        '> .prod-progress-item': {
          height: 34,
          width: '100%',
          borderRadius: 5,
        },
      },
    },
    '> .details-panel-container': {
      padding: 0,
      width: '100%',
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      gridColumn: 'span 11',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
});

const DetailsStyles = createStyles({
  root: {
    gap: 5,
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '20px 30px',
    alignItems: 'stretch',
    flexDirection: 'row',
    borderTop: `1px solid ${t.colors.gray[2]}`,
    justifyContent: 'space-between',
    [t.fn.smallerThan('lg')]: {
      flexWrap: 'wrap',
    },
    '> .left-col': {
      gap: 40,
      width: '100%',
      display: 'flex',
      maxWidth: '35%',
      flexWrap: 'nowrap',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'stretch',
      [t.fn.smallerThan('lg')]: {
        flexWrap: 'wrap',
        maxWidth: '100%',
        justifyContent: 'stretch',
      },
      '> .prod-item': {
        gap: 11,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '> .prod-item-status': {
          borderRadius: 42,
          padding: '7px 10px',
          '> .mantine-Text-root': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: 1,
          },
        },
        '> .prod-item-name': {
          lineHeight: 1,
          fontWeight: 400,
          fontSize: '12px',
          color: t.colors.gray[9],
        },
        '> .prod-item-count': {
          marginTop: 14,
          '> .mantine-Text-root:nth-of-type(1)': {
            lineHeight: 1,
            fontWeight: 700,
            fontSize: '31px',
            color: t.colors.gray[9],
          },
          '> .mantine-Text-root:nth-of-type(2)': {
            opacity: 0.6,
            lineHeight: 1,
            marginLeft: 5,
            fontWeight: 400,
            fontSize: '12px',
            color: t.colors.gray[9],
          },
        },
      },
    },
    '> .right-col': {
      gap: 45,
      width: '100%',
      maxWidth: '55%',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'stretch',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      [t.fn.smallerThan('lg')]: {
        maxWidth: '100%',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
      },
      '> .info-buttons': {
        gap: 15,
        display: 'grid',
        placeItems: 'stretch',
        placeContent: 'stretch',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        '> .mantine-Button-root': {
          height: '100%',
          padding: '14px',
          borderRadius: 10,
          fontSize: '12px',
          fontWeight: 400,
          maxWidth: 85 + 14,
          color: t.colors.gray[9],
          backgroundColor: 'transparent',
          border: '1px solid rgba(0, 0, 0, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.gray[0],
          },
          '> div > span': {
            display: 'flex',
            whiteSpace: 'pre-wrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            '> svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
      '> .fast-actions': {
        gap: 10,
        display: 'grid',
        placeItems: 'stretch',
        placeContent: 'stretch',
        minWidth: 'fit-content',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        '> .mantine-Button-root': {
          height: '100%',
          padding: '10px',
          borderRadius: 10,
          fontSize: '12px',
          fontWeight: 400,
          minWidth: 85 + 10,
          color: t.colors.gray[9],
          backgroundColor: 'transparent',
          border: '1px solid rgba(0, 0, 0, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.gray[0],
          },
          '> div > span': {
            display: 'flex',
            whiteSpace: 'pre-wrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            '> svg': {
              width: 18,
              height: 18,
            },
          },
        },
      },
    },
  },
});

function DetailsPanel({ item }: { item: any }) {
  const { classes } = DetailsStyles();

  const TotalProdCount = React.useMemo(() => {
    return item.production.reduce((a, b) => a + b.count, 0);
  }, [item]);

  const ItemProductions = React.useMemo(() => {
    if (item.production.length > 3) {
      return item.production.slice(0, 3);
    }

    return item.production;
  }, [item]);

  return (
    <Box className={classes.root}>
      <Box className="left-col">
        {ItemProductions.map((prod, i) => (
          <Box key={`prod-item${item.id}-details-${i}`} className="prod-item">
            <Box className="prod-item-status" bg={getColorByStatus(prod.status)[1]}>
              <Text c={getColorByStatus(prod.status)[9]}>{prod.label}</Text>
            </Box>
            <Text className="prod-item-name">{prod.name}</Text>
            <Text className="prod-item-count">
              <Text span>{prod.count.toLocaleString('tr-TR')}</Text>
              <Text span>/{TotalProdCount.toLocaleString('tr-TR')}</Text>
            </Text>
          </Box>
        ))}
      </Box>
      <Box className="right-col">
        <Box className="info-buttons">
          <Button variant="default">
            <PenToolIcon />
            <Text>Teknik Resimler</Text>
          </Button>
          <Button variant="default">
            <CustomRulerIcon />
            <Text>Ölçü Bilgileri</Text>
          </Button>
          <Button variant="default">
            <EyeIcon />
            <Text>Tümünü Görüntüle</Text>
          </Button>
        </Box>
        <Box className="fast-actions">
          <Button variant="default">
            <CustomPauseIcon />
            <Text>Duraklat</Text>
          </Button>
          <Button variant="default">
            <SandTimerIcon />
            <Text>Beklemede</Text>
          </Button>
          <Button variant="default">
            <CustomArrowRightIcon />
            <Text>İşleniyor</Text>
          </Button>
          <Button variant="default">
            <CustomSpeedoMeterIcon />
            <Text>Kontrolde</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export function ProdLine({ item }: { item: any }) {
  const { classes } = Styles();
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box
      component={motion.div}
      className={classes.prodLine}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box className="main-panel">
        <Box className="left-col">
          <Box className="line-no" bg={getColorByStatus(item.status)[5]}>
            {item.no}
          </Box>
          <Text className="line-name">{item.name}</Text>
        </Box>
        <Box className="center-col">
          <Box className="cc-item">
            <Text className="cc-title">SİLİNENLER</Text>
            <Text className="cc-value">3.460</Text>
          </Box>
          <Box className="cc-item">
            <Text className="cc-title">KRİTER DIŞI</Text>
            <Text className="cc-value">250</Text>
          </Box>
          <Box className="cc-item">
            <Text className="cc-title">TOPLAM ÜRETİM</Text>
            <Text className="cc-value">{item.production.reduce((a, b) => a + b.count, 0)}</Text>
          </Box>
          <Text className="cc-desc">CNC TORNA İŞLEME</Text>
        </Box>
        <Box className="right-col">
          {item.production.map((prod, i) => (
            <Box
              className="prod-progress-item"
              bg={getColorByStatus(prod.status)[4]}
              key={`prod-item${item.id}-progress-${i}`}
              maw={`${getProdItemPercent(
                prod.count,
                item.production.reduce((a, b) => a + b.count, 0),
              )}%`}
            />
          ))}
        </Box>
      </Box>
      <AnimatePresence mode="wait">
        {isHovered && (
          <Box
            component={motion.div}
            className="details-panel-container"
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            key={`prod-item${item.id}-details`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <DetailsPanel item={item} />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

export function ProdLines() {
  const { classes } = Styles();

  return (
    <Box
      component={motion.div}
      exit={{ opacity: 0, scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={classes.prodLineCont}
    >
      {PodMockProdLine.map((item) => (
        <ProdLine key={`prod-line-${item.id}`} item={item} />
      ))}
    </Box>
  );
}

const Tabs = [
  {
    label: 'İşlemdekiler',
    value: 'in-progress',
    view: ProdLines,
  },
  {
    label: 'Beklemede',
    value: 'pending',
    view: ProdLines,
  },
  {
    label: 'Kontrolde',
    value: 'in-check',
    view: ProdLines,
  },
  {
    label: 'Tamamlanan',
    value: 'completed',
    view: ProdLines,
  },
  {
    label: 'Durdurulan',
    value: 'stopped',
    view: ProdLines,
  },
  {
    label: 'İptal Edilen',
    value: 'canceled',
    view: ProdLines,
  },
];

function PaProductionList() {
  const { classes } = Styles();
  const [activeTab, setActiveTab] = React.useState(Tabs[0]);
  return (
    <>
      <PodSidebar />
      <Box
        sx={{
          padding: 80,
          width: '100%',
          height: '100%',
          display: 'flex',
          paddingLeft: 174,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            gap: 75,
            width: '100%',
            display: 'flex',
            maxWidth: '1196px',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Box className={classes.controlBar}>
            <Title order={1}>Üretim Listesi</Title>
            <Box className="tabs-container">
              {Tabs.map((tab) => (
                <Button
                  key={tab.value}
                  className="tab"
                  variant="default"
                  onClick={() => setActiveTab(tab)}
                  data-tab-active={activeTab.value === tab.value}
                >
                  {tab.label}
                </Button>
              ))}
            </Box>
          </Box>
          <AnimatePresence mode="wait">
            <activeTab.view key={activeTab.value} />
          </AnimatePresence>
        </Box>
      </Box>
    </>
  );
}

export default PaProductionList;
