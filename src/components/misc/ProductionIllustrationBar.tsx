import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text, createStyles } from '@mantine/core';
import { CustomPlusIcon, SandTimerIcon, TrashIcon } from '../icons';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const styles = createStyles({
  container: {
    gap: 10,
    padding: 60,
    width: '100%',
    display: 'grid',
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
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
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
    padding: 0,
    margin: 0,
    height: 80,
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
              <PieChart
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <Pie
                  endAngle={0}
                  dataKey="value"
                  startAngle={180}
                  innerRadius={50}
                  outerRadius={80}
                  cornerRadius={6}
                  paddingAngle={5}
                  cx="50%"
                  cy="100%"
                  data={[
                    {
                      value: 68,
                      fill: t.colors.purple[4],
                    },
                    {
                      value: 32,
                      fill: t.colors.yellow[4],
                    },
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductionIllustrationBar;
