import React from 'react';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, MantineColor, createStyles } from '@mantine/core';

const styles = createStyles(
  (
    _,
    {
      color,
      maw,
    }: {
      color: MantineColor;
      maw?: string;
    },
  ) => ({
    root: {
      margin: '0',
      width: '100%',
      display: 'block',
      minWidth: '56px',
      aspectRatio: '1/1',
      maxWidth: maw || '100px',
    },
    progressBg: {
      fill: 'none',
      stroke: t.colors[color][0],
      strokeWidth: '3.8',
    },
    percentage: {
      fill: t.colors[color][7],
      fontSize: '0.5em',
      textAnchor: 'middle',
    },
    progress: {
      fill: 'none',
      strokeWidth: 2.8,
      strokeLinecap: 'round',
      stroke: t.colors[color][3],
    },
    bg: {
      fill: t.colors[color][1],
      width: '90%',
      height: '90%',
    },
  }),
);

function ProgressCircle({
  percentage,
  color,
  maw,
}: {
  percentage: string;
  color: MantineColor;
  maw?: string;
}) {
  const [perc, setPerc] = React.useState(0);
  const { classes } = styles({ color, maw });

  React.useEffect(() => {
    (async () => {
      if (perc === 0) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 100);
        });
      }

      if (perc < Number(percentage)) {
        return setTimeout(() => {
          setPerc(perc + 1);
        }, 10);
      }
      return false;
    })();
  }, [perc, percentage]);

  return (
    <Box component="svg" viewBox="0 0 36 36" className={classes.root}>
      <path
        className={classes.progressBg}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <circle className={classes.bg} cx="18" cy="18" r="12" />
      <motion.path
        className={classes.progress}
        animate={{
          strokeDasharray: [`0, 100`, `${percentage}, 100`],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.2,
        }}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className={classes.percentage}>
        %{perc}
      </text>
    </Box>
  );
}

export default ProgressCircle;
