import React from 'react';
import { PodMockProdLine } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import PodSidebar from '@/components/pod/sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Text, Title, createStyles } from '@mantine/core';

export const getProdItemPercent = (self: number, total: number) => {
  const percent = (self / total) * 100;
  return percent;
};

export const getColorByStatus = (status: string, isMachine: boolean = false) => {
  switch (status) {
    case 'completed':
      if (isMachine) return t.colors.purple[5];
      return t.colors.purple[6];
    case 'waiting':
      return t.colors.yellow[3];
    case 'ready':
      if (isMachine) return t.colors.green[5];
      return t.colors.green[3];
    case 'stopped':
      if (isMachine) return t.colors.red[5];
      return t.colors.red[3];
    default:
      return t.colors.gray[3];
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
    padding: '20px 30px',
  },
});

function DetailsPanel({ item }: { item: any }) {
  const { classes } = DetailsStyles();

  return <Box className={classes.root}>x</Box>;
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
          <Box className="line-no" bg={getColorByStatus(item.status, true)}>
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
              bg={getColorByStatus(prod.status)}
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
