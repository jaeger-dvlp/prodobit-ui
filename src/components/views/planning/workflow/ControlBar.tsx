import React from 'react';
import dayjs from 'dayjs';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Select, Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useWorkflow } from '@/components/context/Workflow.context';

import 'dayjs/locale/tr';

dayjs.locale('tr');

function isWeekend(date: string) {
  return dayjs(date).day() === 0 || dayjs(date).day() === 6;
}

function DaysSlider({
  days,
  onClick,
}: {
  days: { value: string; label: string }[];
  onClick: (day: { value: string; label: string }) => void;
}) {
  console.log(onClick);
  const { currentDay, currentMonth } = useWorkflow();

  React.useEffect(() => {
    (async () => {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      const daysSelector = document.querySelector('.days-selector');
      const day = daysSelector?.querySelector(`.day-btn:nth-of-type(${currentDay})`);

      if (day) {
        // day.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'nearest',
        //   inline: 'center',
        // });
      }
    })();
  }, [currentDay]);

  return (
    <Box
      component={motion.div}
      className="days-selector"
      exit={{ opacity: 0, scaleX: 0.7 }}
      animate={{ opacity: 1, scaleX: 1 }}
      initial={{ opacity: 0, scaleX: 0.7 }}
      transition={{
        duration: 1,
        ease: 'anticipate',
      }}
    >
      {days.map((day, i) => (
        <Box
          className="day-elm"
          component={motion.div}
          // onClick={() => onClick(day)}
          data-selected-day={currentDay === day.value}
          key={`day-btn-${i}-${day.value}-${day.label}`}
          opacity={
            isWeekend(
              dayjs()
                .month(Number(currentMonth) - 1)
                .date(Number(day.value))
                .format('YYYY-MM-DD'),
            )
              ? 0.4
              : 1
          }
        >
          <Text className="day-no">{day.value}</Text>
          <Text className="day-label">{day.label}</Text>
        </Box>
      ))}
    </Box>
  );
}

function ControlBar() {
  const { currentDay, currentMonth, setCurrentDay: setCD, setCurrentMonth: setCM } = useWorkflow();

  const daysToRender = React.useMemo(() => {
    return Array(
      dayjs()
        .month(Number(currentMonth) - 1)
        .daysInMonth(),
    )
      .fill(0)
      .map((_, i) => {
        const day = dayjs()
          .month(Number(currentMonth) - 1)
          .date(i + 1);
        return {
          value: day.format('D'),
          label: day.format('ddd'),
        };
      });
  }, [currentMonth]);

  React.useEffect(() => {
    if (Number(currentDay) > daysToRender.length) {
      setCD('1');
    }
  }, [currentDay, currentMonth, daysToRender, setCD]);

  return (
    <Box
      className="control-bar"
      sx={{
        gap: 43,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        '> .month-selector': {
          gap: 15,
          maxWidth: 150,
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          '> .mantine-Text-root': {
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: '18px',
            color: t.colors.gray[9],
          },
          '.mantine-Select-input': {
            fontSize: '15px',
            fontWeight: 400,
            borderRadius: 10,
            lineHeight: '18px',
            padding: '10px 15px 10px 10px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(0, 0, 0, 0.20)',
          },
          '.mantine-Select-dropdown': {
            borderRadius: 10,
            '.mantine-Select-item': {
              borderRadius: 10,
              "&[data-selected='true']": {
                backgroundColor: `${t.colors.green[5]}!important`,
              },
            },
          },
        },
        '> .days-selector': {
          gap: 60,
          padding: 0,
          width: '100%',
          display: 'flex',
          borderRadius: 20,
          overflow: 'hidden',
          flexWrap: 'nowrap',
          alignItems: 'center',
          transformOrigin: 'left',
          justifyContent: 'stretch',
          '> .day-elm': {
            color: '#000',
            height: 'auto',
            borderRadius: 20,
            overflow: 'visible',
            padding: '20px 15px',
            transform: 'none!important',
            transition: 'all 200ms ease-in-out',
            backgroundColor: 'transparent!important',
            width: 'calc((100% / 8) - 60px)!important',
            minWidth: 'calc((100% / 8) - 60px)!important',
            maxWidth: 'calc((100% / 8) - 60px)!important',
            "&[data-selected-day='true']": {
              opacity: '1!important',
              color: '#fff!important',
              backgroundColor: `${t.colors.green[3]}!important`,
            },
            gap: 10,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            '> .day-no': {
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '44.4px',
            },
            '> .day-label': {
              opacity: 0.8,
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '18px',
            },
            [t.fn.smallerThan('xl')]: {
              width: 'calc((100% / 2) - 30px)!important',
              minWidth: 'calc((100% / 2) - 30px)!important',
              maxWidth: 'calc((100% / 2) - 30px)!important',
            },
            // ':hover': {
            //   color: t.colors.green[6],
            // },
          },
        },
      }}
    >
      <Box className="month-selector">
        <Text>Ay Seçimi</Text>
        <Select
          defaultValue={currentMonth}
          onChange={(e: string) => {
            setCM(e.toString());
          }}
          data={Array(12)
            .fill(0)
            .map((_, i) => ({
              value: (i + 1).toString(),
              label: dayjs().month(i).format('MMMM'),
            }))}
        />
      </Box>
      <AnimatePresence mode="wait">
        <DaysSlider
          days={daysToRender}
          key={`days-slider-${currentMonth}`}
          onClick={(day) => setCD(day.value)}
        />
      </AnimatePresence>
    </Box>
  );
}

export default ControlBar;
