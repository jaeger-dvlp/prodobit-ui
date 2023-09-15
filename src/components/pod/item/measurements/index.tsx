import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Divider, Text, Title, createStyles } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomPlusIcon, CustomSmoothArrowDown } from '@/components/icons';

const mockMeasurements = [
  {
    type: 'short',
    name: 'Kısa Boy',
    currentMeasurement: 1.48,
    measurementHistory: [1.46, 1.43, 1.41, 1.38, 1.36, 1.33, 1.31, 1.28],
  },
  {
    type: 'hole-diamaeter',
    name: 'Delik Çapı',
    currentMeasurement: 1.49,
    measurementHistory: [1.46, 1.43, 1.41, 1.38, 1.36, 1.33, 1.31, 1.28],
  },
  {
    type: 'outer-diameter',
    name: 'Dış Çap',
    currentMeasurement: 1.54,
    measurementHistory: [1.46, 1.43, 1.41, 1.38, 1.36, 1.33, 1.31, 1.28],
  },
];

type Props = {
  item: any;
};

const styles = createStyles({
  root: {
    gap: 30,
    width: '100%',
    paddingTop: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    paddingBottom: 30,
    color: t.colors.gray[9],
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
  },
  measurementList: {
    gap: 15,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  measurementItemContainer: {
    gap: 0,
    display: 'flex',
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    transition: 'all 0.4s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow:
      '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
    '&:before': {
      top: 0,
      left: 0,
      zIndex: -1,
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      backdropFilter: 'blur(19px)',
    },
    "&[data-collapsed='true']": {
      borderRadius: 50,
      '& .collapse-button': {
        transform: 'rotateX(180deg)',
      },
    },
    '> .measurement-item-top': {
      gap: 5,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: '20px 40px 20px 20px',
      justifyContent: 'space-between',
      '> .measurement-item-name': {
        width: '100%',
        maxWidth: 166,
        fontWeight: 500,
        fontSize: '22px',
        borderRadius: 100,
        textAlign: 'center',
        padding: '15px 30px',
        textOverflow: 'ellipsis',
        color: t.colors.purple[0],
        backgroundColor: t.colors.purple[5],
      },
      '> .measurement-item-content': {
        gap: 23,
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        '> .measurement-item-tolerance': {
          gap: 15,
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          '> .from, > .to': {
            fontWeight: 400,
            fontSize: '22px',
            color: t.colors.gray[9],
          },
        },
        '> .measurement-item-value': {
          fontWeight: 600,
          fontSize: '22px',
          color: t.colors.gray[9],
        },
      },
      '> .measurement-item-buttons': {
        gap: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        '> .add-measurement-button, > .collapse-button': {
          padding: 1,
          border: 'none',
          height: 'auto',
          color: t.colors.gray[9],
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
          '> div > span > svg': {
            width: 24,
            height: 24,
          },
        },
      },
    },
    '& .collapsable-container': {
      maxHeight: 300,
      overflowY: 'auto',
    },
    '& .collapsable-history': {
      gap: 25,
      display: 'flex',
      overflowY: 'auto',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '20px 40px 20px 20px',
      '> .collapsable-heading': {
        gap: 5,
        display: 'flex',
        padding: '25px 0px',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(0, 0, 0, 0.10)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
        '> .mantine-Title-root': {
          fontWeight: 500,
          fontSize: '15px',
          color: t.colors.gray[6],
        },
      },
      '> .collapsable-content': {
        gap: 25,
        display: 'flex',
        padding: '0px 17px',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
    },
  },
  chItemContainer: {
    gap: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
    paddingBottom: 25,
    "&[data-history-collapsed='true']": {
      '& .collapse-history-button': {
        transform: 'rotateX(180deg)',
      },
    },
    '> .ch-item-top': {
      gap: 5,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      '> .ch-item-main-value': {
        fontWeight: 400,
        fontSize: '22px',
        color: t.colors.gray[9],
      },
      '> .collapse-history-button': {
        padding: 1,
        border: 'none',
        height: 'auto',
        color: t.colors.gray[9],
        backgroundColor: 'transparent',
        transition: 'all 0.2s ease-in-out',
        '> div > span > svg': {
          width: 25,
          height: 25,
        },
      },
    },
    '> .collapsable-container': {
      overflow: 'hidden',
      '> .ch-item-content': {
        gap: 10,
        paddingTop: 25,
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '> .ch-item-content-item': {
          gap: 10,
          display: 'flex',
          borderRadius: 100,
          padding: '10px 20px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.60)',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '> .ch-item-circle': {
            width: 8,
            height: 8,
            borderRadius: 100,
            backgroundColor: t.colors.green[5],
          },
          '> .ch-item-content-item-value': {
            fontWeight: 400,
            fontSize: '22px',
            color: t.colors.gray[9],
          },
        },
      },
    },
  },
});

function MHistoryColumn({ measurement, date }: { measurement: any; date: string }) {
  const { classes } = styles();
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  return (
    <Box data-history-collapsed={isCollapsed} className={classes.chItemContainer}>
      <Box className="ch-item-top">
        <Text className="ch-item-main-value">{`${date}:00`}</Text>
        <Button
          variant="default"
          className="collapse-history-button"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          <CustomSmoothArrowDown />
        </Button>
      </Box>
      <AnimatePresence mode="wait">
        {isCollapsed && (
          <Box
            component={motion.div}
            transition={{ duration: 0.3 }}
            exit={{ height: 0, opacity: 0 }}
            className="collapsable-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
          >
            <Box className="ch-item-content">
              {measurement?.measurementHistory?.map((m: number, i: number) => (
                <Box key={`measurement-${i}`} className="ch-item-content-item">
                  <Box className="ch-item-circle" />
                  <Text className="ch-item-content-item-value">{m}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

function MeasurementColumn({ measurement }: any) {
  const { classes } = styles();
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  return (
    <Box data-collapsed={isCollapsed} className={classes.measurementItemContainer}>
      <Box className="measurement-item-top">
        <Text className="measurement-item-name">{measurement.name}</Text>
        <Box className="measurement-item-content">
          <Box className="measurement-item-tolerance">
            <Text className="from">{Math.abs(measurement.currentMeasurement - 0.02)}</Text>
            <Divider w={55} orientation="horizontal" />
            <Text className="to">{Math.abs(measurement.currentMeasurement + 0.08)}</Text>
          </Box>
          <Divider orientation="vertical" />
          <Text className="measurement-item-value">{measurement.currentMeasurement}</Text>
        </Box>
        <Box className="measurement-item-buttons">
          <Button variant="default" className="add-measurement-button">
            <CustomPlusIcon />
          </Button>
          <Button
            variant="default"
            className="collapse-button"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <CustomSmoothArrowDown />
          </Button>
        </Box>
      </Box>
      <AnimatePresence mode="wait">
        {isCollapsed && (
          <Box
            component={motion.div}
            transition={{ duration: 0.3 }}
            className="collapsable-container"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
          >
            <Box className="collapsable-history">
              <Box className="collapsable-heading">
                <Title order={3}>ÖLÇÜ GEÇMİŞİ</Title>
              </Box>
              <Box className="collapsable-content">
                {Array.from({ length: 10 }, (_, i) => (
                  <MHistoryColumn
                    key={`measurement-${i}`}
                    measurement={measurement}
                    date={(i + 9 >= 10 ? i + 9 : `0${i + 9}`).toString()}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

function PaProductionItemMeasurementsContent({ item }: Props) {
  const { classes } = styles();

  const measurementData = Array.from({ length: 15 }, (_, i) => ({
    ...mockMeasurements[i % 3],
  }));

  console.log(item);
  return (
    <Box className={classes.root}>
      <Title className={classes.pageHeading} order={1}>
        Ölçüm Listesi
      </Title>
      <Box className={classes.measurementList}>
        {measurementData.map((measurement, i) => (
          <MeasurementColumn key={`measurement-${i}`} measurement={measurement} />
        ))}
      </Box>
    </Box>
  );
}

export default PaProductionItemMeasurementsContent;
