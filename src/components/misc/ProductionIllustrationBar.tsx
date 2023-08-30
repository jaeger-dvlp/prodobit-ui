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
    width: '100%',
    height: '100%',
    borderRadius: 33,
    padding: '30px',
    minHeight: '413px',
    gridColumn: 'span 6',
    backgroundColor: t.colors.gray[0],
    backdropFilter: 'blur(74.56938171386719px)',
    boxShadow:
      '0px 18.261890411376953px 22.827362060546875px 0px rgba(0, 0, 0, 0.05), -0.7609121203422546px 0.7609121203422546px 0.7609121203422546px -1.5218242406845093px rgba(255, 255, 255, 0.35) inset, 0px 0.7609121203422546px 6.087296962738037px 0px rgba(255, 255, 255, 0.35) inset',
    [t.fn.smallerThan('lg')]: {
      gridColumn: 'span 12',
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

function ProductionIllustrationBar() {
  const { classes } = styles();

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
        Çözemezsin, yok. Bu düğüm kör düğüm. Korkmuyorum gecelerden, beni sen öldür.
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
                  data={[
                    {
                      value: 68,
                      fill: t.colors.purple[5],
                    },
                    {
                      value: 32,
                      fill: t.colors.yellow[5],
                    },
                  ]}
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
              <Text>%63</Text>
              <Text>%37</Text>
            </Box>
            <Box className={classes.rcChartIndicator}>
              <Box
                component={motion.span}
                initial={{ rotate: 0 }}
                animate={{ rotate: 122.5 }}
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
