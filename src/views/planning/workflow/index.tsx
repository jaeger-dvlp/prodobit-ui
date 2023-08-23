import React from 'react';
import dayjs from 'dayjs';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Select, Sx, Text } from '@mantine/core';
import { BoldCalendarIcon, CustomRadarIcon, EditIcon } from '@/components/icons';

import 'dayjs/locale/tr';
import WorkflowWrapper, { useWorkflow } from '@/components/context/Workflow.context';
import { MockWorkflow } from 'mockdata';

dayjs.locale('tr');

type Views = 'calendar' | 'workflow';

function isWeekend(date: string) {
  return dayjs(date).day() === 0 || dayjs(date).day() === 6;
}

const calculateJobDuration = (
  startDate: string,
  endDate: string,
  returnAs: 'sentence' | 'number' = 'sentence',
) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const duration = end.diff(start, 'day');

  if (returnAs === 'sentence') {
    return duration > 1 ? `${duration} Gün` : `${end.diff(start, 'hour')} Saat`;
  }

  return duration;
};

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
          flexWrap: 'nowrap',
          alignItems: 'center',
          transformOrigin: 'left',
          justifyContent: 'flex-start',

          '> .day-btn': {
            padding: 0,
            color: '#000',
            height: 'auto',
            borderRadius: 20,
            width: 'auto',
            transform: 'none!important',
            transition: 'all 200ms ease-in-out',
            backgroundColor: 'transparent!important',
            minWidth: 'calc((100% / 8) - 60px)!important',
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
              padding: '20px 15px',
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
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const daysSelector = document.querySelector('.days-selector');
    const { scrollLeft } = e.currentTarget;

    if (daysSelector) {
      daysSelector.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      sx={{
        padding: 10,
        width: '100%',
        height: '100%',
        display: 'grid',
        borderRadius: 40,
        gridAutoRows: '1fr',
        backgroundColor: '#fff',
        placeContent: 'start stretch',
        gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
        '> .workflow-left-col': {
          gap: 31,
          width: '100%',
          height: '100%',
          display: 'grid',
          gridAutoRows: '1fr',
          gridColumn: 'span 1 / span 1',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          '> .mantine-Text-root': {
            width: '100%',
            height: '100%',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '21.6px',
            color: t.colors.gray[5],
            padding: '40px 50px 40px 40px',
          },
        },
        '> .jobs-list': {
          gap: 31,
          width: '100%',
          padding: 0,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          display: 'grid',
          minWidth: '100%',
          overflowX: 'auto',
          gridAutoRows: '1fr',
          position: 'relative',
          gridColumn: 'span 7 / span 7',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          '> .wf-job-col': {
            gap: 13,
            zIndex: 2,
            height: '100%',
            display: 'flex',
            minWidth: '100%',
            flexWrap: 'nowrap',
            alignItems: 'center',
            transformOrigin: 'left',
            justifyContent: 'flex-start',
            '> .wfj-item': {
              gap: 40,
              padding: 10,
              display: 'flex',
              borderRadius: 10,
              width: 'fit-content',
              flexDirection: 'row',
              alignItems: 'stretch',
              transformOrigin: 'left',
              justifyContent: 'space-between',
              '> .wfj-item-left-col': {
                gap: 10,
                display: 'flex',
                minWidth: 'fit-content',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                '> div': {
                  minWidth: 'fit-content',
                },
              },
              '> .wfj-item-right-col': {
                gap: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                '> .wfj-item-edit-btn': {
                  padding: 0,
                  height: 'auto',
                  border: 'none!important',
                  backgroundColor: 'transparent!important',
                  '> div > span > svg': {
                    width: 16,
                    height: 16,
                  },
                },
                '> .wfj-item-metadata': {
                  gap: 20,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  '.wfji-metadata': {
                    gap: 2,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    '> .mantine-Text-root': {
                      fontWeight: 500,
                      fontSize: '12px',
                      textAlign: 'center',
                      lineHeight: '14.4px',
                      '&:not(:first-of-type)': {
                        fontWeight: 300,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }}
    >
      <Box className="workflow-left-col">
        {MockWorkflow.map((wfItem) => (
          <Text key={`wf-item-name-${wfItem.id}`}>{wfItem.name}</Text>
        ))}
      </Box>
      <Box className="jobs-list" onScroll={handleScroll}>
        {MockWorkflow.map((wfItem) => (
          <Box className="wf-job-col" key={`wf-item-cont-${wfItem.id}`}>
            <AnimatePresence>
              {wfItem.jobs.map((job, x) => (
                <Box
                  transition={{
                    duration: 0.2,
                    delay: x * 0.2,
                  }}
                  className="wfj-item"
                  component={motion.div}
                  animate={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                  key={`wf-item-${wfItem.id}-job-${job.id}`}
                  sx={{
                    backgroundColor: job.color[1],
                    border: `1px solid ${job.color[4]}`,
                    minWidth: `calc(260px + ${calculateJobDuration(
                      job.start_date,
                      job.end_date,
                      'number',
                    )} * 50px)`,
                  }}
                >
                  <Box className="wfj-item-left-col">
                    <Box>
                      <Text
                        sx={{
                          fontWeight: 700,
                          fontSize: '15px',
                          lineHeight: '18px',
                          color: job.color[9],
                          whiteSpace: 'nowrap',
                          minWidth: 'fit-content',
                        }}
                      >
                        {job.name}
                      </Text>
                      <Text
                        sx={{
                          opacity: 0.8,
                          fontWeight: 400,
                          fontSize: '12px',
                          color: job.color[9],
                          lineHeight: '14.4px',
                        }}
                      >
                        {job.category}
                      </Text>
                    </Box>
                    <Box
                      sx={{
                        gap: 0,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                      }}
                    >
                      {job.users.map((user) => (
                        <Box
                          key={`wf-item-${wfItem.id}-job-${job.id}-user-${user.id}`}
                          sx={{
                            '&:not(:first-of-type)': {
                              marginLeft: -7,
                            },
                          }}
                        >
                          <img
                            alt={user.name}
                            src={user.avatar}
                            style={{
                              width: 17,
                              height: 17,
                              borderRadius: 100,
                              objectFit: 'cover',
                              objectPosition: 'center',
                              border: `2px solid ${job.color[1]}`,
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box className="wfj-item-right-col">
                    <Button
                      sx={{
                        color: job.color[9],
                      }}
                      className="wfj-item-edit-btn"
                      variant="default"
                    >
                      <EditIcon />
                    </Button>
                    <Box className="wfj-item-metadata">
                      <Box
                        sx={{
                          color: job.color[9],
                        }}
                        className="wfji-metadata"
                      >
                        <Text>İş Süresi</Text>
                        <Text>{calculateJobDuration(job.start_date, job.end_date)}</Text>
                      </Box>
                      <Box
                        sx={{
                          color: job.color[9],
                        }}
                        className="wfji-metadata"
                      >
                        <Text>Taslak</Text>
                        <Text>{job.drafts.length}</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </AnimatePresence>
          </Box>
        ))}
      </Box>
    </Box>
  );
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
