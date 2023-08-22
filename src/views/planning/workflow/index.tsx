import React from 'react';
import dayjs from 'dayjs';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Select, Sx, Text } from '@mantine/core';
import { BoldCalendarIcon, CustomRadarIcon } from '@/components/icons';

import 'dayjs/locale/tr';
import WorkflowWrapper, { useWorkflow } from '@/components/context/Workflow.context';

dayjs.locale('tr');

type Views = 'calendar' | 'workflow';

function isWeekend(date: string) {
  return dayjs(date).day() === 0 || dayjs(date).day() === 6;
}

function ViewSelector({
  view,
  setView,
}: {
  view: Views;
  setView: React.Dispatch<React.SetStateAction<Views>>;
}) {
  const getViewSx = (viewName: string): Sx => ({
    gap: '10px',
    height: 'auto',
    border: 'none',
    display: 'flex',
    fontWeight: 500,
    fontSize: '15px',
    borderRadius: 100,
    lineHeight: '18px',
    padding: '9px 18px',
    flexDirection: 'row',
    alignContent: 'center',
    color: t.colors.gray[8],
    justifyContent: 'center',
    transition: 'all 200ms ease-in-out',
    opacity: view === viewName ? 1 : 0.6,
    backgroundColor: view === viewName ? t.colors.gray[3] : 'transparent',
    ':hover': {
      backgroundColor: view === viewName ? t.colors.gray[3] : t.colors.gray[2],
    },
  });

  return (
    <Box
      sx={{
        gap: 1,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        minWidth: 'fit-content',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="default"
        onClick={() => setView('calendar')}
        sx={(() => getViewSx('calendar'))()}
      >
        <BoldCalendarIcon width={16} height={16} />
        <Text ml={10}>Takvim Görünümü</Text>
      </Button>
      <Button
        variant="default"
        onClick={() => setView('workflow')}
        sx={(() => getViewSx('workflow'))()}
      >
        <CustomRadarIcon width={16} height={16} />
        <Text ml={10}>Akış Görünümü</Text>
      </Button>
    </Box>
  );
}

function DaysSlider({
  days,
  onClick,
}: {
  days: { value: string; label: string }[];
  onClick: (day: { value: string; label: string }) => void;
}) {
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
        day.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
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
        duration: 0.6,
        ease: 'anticipate',
      }}
    >
      {days.map((day, i) => (
        <Button
          className="day-btn"
          component={motion.button}
          onClick={() => onClick(day)}
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
        </Button>
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
          overflowX: 'auto',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          transformOrigin: 'left',
          '> .day-btn': {
            padding: 0,
            color: '#000',
            width: 'auto',
            height: 'auto',
            borderRadius: 20,
            minWidth: 'calc((100% / 8) - 60px)!important',
            transform: 'none!important',
            backgroundColor: 'transparent!important',
            ':hover': {
              color: t.colors.green[6],
            },
            "&[data-selected-day='true']": {
              opacity: '1!important',
              color: '#fff!important',
              backgroundColor: `${t.colors.green[3]}!important`,
            },
            '> div > span': {
              gap: 10,
              display: 'flex',
              padding: '20px 7.5px',
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
            },
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

function WorkflowTable() {
  return <Box>x</Box>;
}

function PlanningWorkflow() {
  const [view, setView] = React.useState<Views>('workflow');
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/planning');
  const Route2 = Route?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/planning/workflow',
  );
  return (
    <WorkflowWrapper>
      <Box
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        component={motion.section}
        sx={(theme) => ({
          gap: 50,
          padding: 60,
          width: '100%',
          display: 'grid',
          minHeight: '100%',
          placeItems: 'flex-start',
          placeContent: 'flex-start',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          backgroundColor: 'transparent',
          [theme.fn.smallerThan('md')]: {
            padding: 45,
            paddingTop: 80,
          },
        })}
      >
        <Navbar
          paths={[Route, Route2].map((route) => ({
            path: route?.path,
            name: route?.name || '?',
          }))}
          middleChilds={<ViewSelector view={view} setView={setView} />}
        />
        <Box
          sx={{
            gap: 30,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <ControlBar />
          <WorkflowTable />
        </Box>
      </Box>
    </WorkflowWrapper>
  );
}
export default PlanningWorkflow;
