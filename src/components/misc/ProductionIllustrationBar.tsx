import React from 'react';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Box, Button, Text, createStyles } from '@mantine/core';

import {
  TrashIcon,
  SandTimerIcon,
  CustomPlusIcon,
  CustomArrowRightUpIcon,
  CustomArrowRightDownIcon,
  CustomChartIndicatorIcon,
} from '@/components/icons';

const mockData = [
  {
    count: 2024,
    status: 'completed',
    label: 'Tamamlandı',
    color: t.colors.purple[5],
  },
  {
    count: 1755,
    status: 'pending',
    label: 'Beklemede',
    color: t.colors.yellow[5],
  },
  {
    count: 1221,
    status: 'stopped',
    label: 'Durduruldu',
    color: t.colors.red[5],
  },
];

const GraphStyle = createStyles({
  root: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '> .percent-column': {
      padding: 0,
      width: '100%',
      minHeight: 50,
      paddingLeft: 10,
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderLeft: `0.5px solid ${t.colors.gray[9]}`,
      '> .count-text': {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: 0.9,
        color: t.colors.gray[9],
        '> span': {
          fontSize: '12px',
          fontWeight: 400,
        },
      },
      '> .percent-bar': {
        gap: 5,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        '> .percent-text': {
          fontSize: '12px',
          fontWeight: 300,
          color: t.colors.gray[9],
        },
        '> .percent-progress': {
          height: 34,
          width: '100%',
          borderRadius: 5,
        },
      },
    },
  },
});

function Graph() {
  const { classes } = GraphStyle();

  const colsWithPercentages = React.useMemo(() => {
    const total = mockData.reduce((acc, curr) => acc + curr.count, 0);
    return mockData.map((col) => ({
      ...col,
      percentage: (col.count / total) * 100,
    }));
  }, []);

  return (
    <Box className={classes.root}>
      {colsWithPercentages.map((col, i) => (
        <Box
          initial={{ opacity: 0, height: 110 }}
          animate={{ opacity: [0, 1], height: `calc(${col.percentage} * 2px + 80px)` }}
          transition={{
            delay: i === 0 ? 0.5 : 0.5 + i * 0.2,
            duration: 1,
          }}
          component={motion.div}
          key={`graph-col-${i}`}
          className="percent-column"
          sx={{
            maxWidth: `${col.percentage}%`,
          }}
        >
          <Text className="count-text">
            {col.count.toLocaleString('tr-TR')}
            <Text span> /ADET</Text>
          </Text>
          <Box className="percent-bar">
            <Text className="percent-text">
              %{Math.round(col.percentage)} {col.label}
            </Text>
            <Box
              initial={{ width: 0 }}
              component={motion.div}
              animate={{ width: `100%` }}
              className="percent-progress"
              transition={{
                delay: i === 0 ? 0.5 : 0.5 + i * 0.2,
                duration: 1,
              }}
              sx={{
                backgroundColor: i === 0 ? col.color : 'transparent',
                backgroundImage:
                  i === 0
                    ? 'none'
                    : `repeating-linear-gradient(90deg, ${col.color}, ${col.color} 2px, transparent 2px, transparent 4px)`,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

const styles = createStyles({
  container: {
    gap: 10,
    padding: 0,
    marginTop: 60,
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    placeContent: 'start stretch',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  centerColumn: {
    gap: 60,
    padding: 30,
    width: '100%',
    height: '100%',
    minHeight: 413,
    display: 'flex',
    borderRadius: 33,
    gridColumn: 'span 6',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: t.colors.gray[0],
    backdropFilter: 'blur(74.56938171386719px)',
    boxShadow:
      '0px 18.261890411376953px 22.827362060546875px 0px rgba(0, 0, 0, 0.05), -0.7609121203422546px 0.7609121203422546px 0.7609121203422546px -1.5218242406845093px rgba(255, 255, 255, 0.35) inset, 0px 0.7609121203422546px 6.087296962738037px 0px rgba(255, 255, 255, 0.35) inset',
    [t.fn.smallerThan('lg')]: {
      gridColumn: 'span 12',
    },
  },
  ccContent: {
    gap: 30,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  ccMetaTopBar: {
    gap: 10,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '> .meta-texts': {
      gap: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      '> .indicator-group': {
        gap: 6,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        '> .indicator-color': {
          width: 12,
          height: 12,
          borderRadius: 3,
          backgroundColor: t.colors.purple[7],
        },
        '> .indicator-text': {
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '14.4px',
          color: t.colors.gray[9],
        },
      },
      '> .meta-counts': {
        gap: 5,
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        '> .meta-count': {
          fontSize: '31px',
          fontWeight: 700,
          lineHeight: 0.9,
          color: t.colors.gray[9],
        },
        '> .meta-count-small': {
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '14.4px',
          color: t.colors.gray[9],
        },
      },
    },
    '> .view-size-cont': {
      gap: 5,
      padding: 5,
      display: 'flex',
      borderRadius: 15,
      width: 'fit-content',
      alignItems: 'stretch',
      flexDirection: 'row',
      backgroundColor: t.colors.gray[2],
      '> .view-size-btn': {
        height: 'auto',
        border: 'none',
        borderRadius: 10,
        fontSize: '12px',
        fontWeight: 400,
        padding: '10px 15px',
        color: t.colors.gray[7],
        backgroundColor: 'transparent',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
          backgroundColor: t.colors.gray[3],
        },
        "&[data-active='true']": {
          color: t.colors.gray[0],
          backgroundColor: t.colors.gray[8],
        },
      },
    },
  },
  ccWeekSizeCont: {
    gap: 0,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: 'transparent',
    border: `1px solid ${t.colors.gray[2]}`,
    '> .week-size-btn': {
      flex: 1,
      height: 'auto',
      border: 'none',
      fontWeight: 400,
      fontSize: '12px',
      borderRadius: 10,
      padding: '10px 15px',
      color: t.colors.gray[7],
      backgroundColor: 'transparent',
      transition: 'all 0.15s ease-in-out',
      "&[data-active='true']": {
        backgroundColor: t.colors.gray[2],
      },
    },
  },
  cornerColumn: {
    gap: 15,
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: 33,
    maxWidth: '290px',
    padding: '50px 30px',
    gridColumn: 'span 3',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: t.colors.gray[0],
    backdropFilter: 'blur(74.56938171386719px)',
    boxShadow:
      '0px 18.261890411376953px 22.827362060546875px 0px rgba(0, 0, 0, 0.05), -0.7609121203422546px 0.7609121203422546px 0.7609121203422546px -1.5218242406845093px rgba(255, 255, 255, 0.35) inset, 0px 0.7609121203422546px 6.087296962738037px 0px rgba(255, 255, 255, 0.35) inset',
    [t.fn.smallerThan('lg')]: {
      gridColumn: 'span 12',
    },
  },
  cornerIdentify: {
    gap: 15,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    '> .mantine-Text-root:nth-of-type(1)': {
      fontWeight: 700,
      fontSize: '15px',
      color: t.colors.gray[9],
    },
    '> .mantine-Text-root:nth-of-type(2)': {
      opacity: 0.5,
      fontWeight: 400,
      fontSize: '12px',
      color: t.colors.gray[9],
    },
  },
  leftCornerContent: {
    gap: 15,
    padding: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightCornerContent: {
    gap: 15,
    padding: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rcPieChartCont: {
    margin: 0,
    padding: 0,
    width: '100%',
    minHeight: 140,
    display: 'flex',
    paddingBottom: 5,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rcChartTexts: {
    gap: 15,
    width: '100%',
    display: 'flex',
    padding: '0 2.5px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .mantine-Text-root': {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '14.4px',
      color: t.colors.gray[6],
    },
  },
  rcChartIndicator: {
    bottom: 0,
    left: '50%',
    width: 53,
    height: 53,
    display: 'flex',
    borderRadius: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)',
    transform: 'translateX(-50%)',
    backgroundColor: t.colors.red[0],
    border: `3px solid ${t.colors.gray[0]}`,
    boxShadow: '0px 24px 54px -13px rgba(177, 109, 92, 0.30)',
    '& span': {
      width: 25,
      height: 25,
      display: 'flex',
      alignItems: 'center',
      color: t.colors.gray[6],
      justifyContent: 'center',
      transformOrigin: 'center',
    },
  },
  rcMetaData: {
    gap: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '> div': {
      gap: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      '> .mantine-Text-root:nth-of-type(1)': {
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '14.4px',
        color: t.colors.gray[9],
      },
      '> div': {
        gap: 5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        '> .mantine-Text-root:nth-of-type(1)': {
          fontWeight: 700,
          fontSize: '15px',
          lineHeight: '18px',
          color: t.colors.gray[8],
        },
        '> div': {
          gap: 1,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          '> .mantine-Text-root:nth-of-type(1)': {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '14.4px',
          },
          '> svg': {
            width: 13,
            height: 13,
          },
        },
      },
    },
  },
});

const LCornerButtonStyle = createStyles((_, color: string) => ({
  root: {
    padding: 20,
    border: 'none',
    height: 'auto',
    borderRadius: 10,
    color: t.colors[color][6],
    backgroundColor: 'transparent',
    transition: 'all 0.15s ease-in-out',
    '&:hover': {
      backgroundColor: t.colors[color][0],
    },
    '> div > span': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '> svg': {
        width: 18,
        height: 18,
      },
    },
  },
}));

function LCornerButton({ children, color }: { children: React.ReactNode; color: string }) {
  const { classes } = LCornerButtonStyle(color);
  return (
    <Button className={classes.root} variant="default">
      {children}
    </Button>
  );
}

export type Size = {
  label: string;
  value: string;
};

const viewSizes: Size[] = [
  {
    label: 'Haftalık',
    value: 'weekly',
  },
  {
    label: 'Aylık',
    value: 'monthly',
  },
  {
    label: 'Yıllık',
    value: 'yearly',
  },
];

const weekSizes: Size[] = [
  {
    label: 'Tüm Hafta',
    value: 'all',
  },
  {
    label: 'PTS',
    value: 'monday',
  },
  {
    label: 'SAL',
    value: 'tuesday',
  },
  {
    label: 'ÇAR',
    value: 'wednesday',
  },
  {
    label: 'PER',
    value: 'thursday',
  },
  {
    label: 'CUM',
    value: 'friday',
  },
  {
    label: 'CMT',
    value: 'saturday',
  },
  {
    label: 'PAZ',
    value: 'sunday',
  },
];

function ProductionIllustrationBar() {
  const { classes } = styles();
  const [viewSize, setViewSize] = React.useState<Size>(viewSizes[0]);
  const [weekSize, setWeekSize] = React.useState<Size>(weekSizes[0]);

  const colsWithPercentages = React.useMemo(() => {
    const total = mockData
      .filter((col) => col.status !== 'stopped')
      .reduce((acc, curr) => acc + curr.count, 0);
    return mockData
      .filter((col) => col.status !== 'stopped')
      .map((col) => ({
        ...col,
        percentage: (col.count / total) * 100,
      }));
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.cornerColumn}>
        <Box className={classes.cornerIdentify}>
          <Text>Kısayollar</Text>
          <Text>İşlerinizi Kolaylaştıracak Bileşenler İle Daha Verimli Çalışın</Text>
        </Box>
        <Box className={classes.leftCornerContent}>
          <LCornerButton color="purple">
            <Text>Yeni Üretim Ekle</Text>
            <CustomPlusIcon />
          </LCornerButton>
          <LCornerButton color="yellow">
            <Text>Yeni Üretim Ekle</Text>
            <SandTimerIcon />
          </LCornerButton>
          <LCornerButton color="red">
            <Text>Yeni Üretim Ekle</Text>
            <TrashIcon />
          </LCornerButton>
        </Box>
      </Box>
      <Box className={classes.centerColumn}>
        <Box className={classes.ccMetaTopBar}>
          <Box className="meta-texts">
            <Box className="indicator-group">
              <Box className="indicator-color" />
              <Text className="indicator-text">Toplam Üretim</Text>
            </Box>
            <Box className="meta-counts">
              <Text className="meta-count">
                {mockData.reduce((acc, curr) => acc + curr.count, 0)}
              </Text>
              <Text className="meta-count-small">ADET</Text>
            </Box>
          </Box>
          <Box className="view-size-cont">
            {viewSizes.map((size, i) => (
              <Button
                variant="default"
                key={`view-size-${i}`}
                className="view-size-btn"
                data-active={viewSize === size}
                onClick={() => setViewSize(size)}
              >
                {size.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box className={classes.ccContent}>
          <Graph />
          <Box className={classes.ccWeekSizeCont}>
            {weekSizes.map((size, i) => (
              <Button
                variant="default"
                key={`week-size-${i}`}
                className="week-size-btn"
                data-active={weekSize === size}
                onClick={() => setWeekSize(size)}
              >
                {size.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className={classes.cornerColumn}>
        <Box className={classes.cornerIdentify}>
          <Text>Üretim Performansı</Text>
          <Text>Üretimin Genel Toplamına Oranla Performansı Verir.</Text>
        </Box>
        <Box className={classes.rightCornerContent}>
          <Box className={classes.rcPieChartCont}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  animationDuration={1500}
                  endAngle={0}
                  dataKey="value"
                  startAngle={180}
                  innerRadius={80}
                  outerRadius={115}
                  cornerRadius={6}
                  paddingAngle={5}
                  cx="50%"
                  cy="100%"
                  data={colsWithPercentages.map((col) => ({
                    value: col.percentage,
                    fill: col.color,
                  }))}
                />
              </PieChart>
            </ResponsiveContainer>
            <Box
              transition={{
                delay: 1,
                duration: 1,
                ease: 'easeInOut',
              }}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={classes.rcChartTexts}
            >
              <Text>%{Math.round(colsWithPercentages[0].percentage)}</Text>

              <Text>%{Math.round(colsWithPercentages[1].percentage)}</Text>
            </Box>
            <Box className={classes.rcChartIndicator}>
              <Box
                component={motion.span}
                initial={{ rotate: 0 }}
                animate={{ rotate: colsWithPercentages[0].percentage * 1.75 }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
              >
                <CustomChartIndicatorIcon />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          transition={{
            delay: 1,
            duration: 1,
            ease: 'easeInOut',
          }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={classes.rcMetaData}
        >
          <Box>
            <Text>Üretimde</Text>
            <Box>
              <Text>2.350</Text>
              <Box c={t.colors.green[6]}>
                <Text>+21%</Text>
                <CustomArrowRightUpIcon />
              </Box>
            </Box>
          </Box>
          <Box>
            <Text>Durdurulan</Text>
            <Box>
              <Text>512</Text>
              <Box c={t.colors.red[5]}>
                <Text>-11%</Text>
                <CustomArrowRightDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductionIllustrationBar;
