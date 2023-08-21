import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Box, Button, Select, Sx, Text } from '@mantine/core';
import { BoldCalendarIcon, CustomRadarIcon } from '@/components/icons';

import 'dayjs/locale/tr';

dayjs.locale('tr');

type Views = 'calendar' | 'workflow';

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

/* Control Bar | pkg's: dayjs
Must list the days as a button in a horizontal row. When click to a day, it must be scroll to that day in the calendar & control bar.  (Must be scrollable to right & left)
After that, must be list the next days to.
When click to prev day, must be scroll to left. After that, must be list the prev days to.
7 days must be listed in the control bar. ( Days per view is 7 )
*/

function ControlBar() {
  const [currentMonth, setCM] = React.useState(dayjs().format('M'));
  return (
    <Box
      sx={{
        gap: 40,
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
      }}
      className="control-bar"
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
    <Box
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={motion.section}
      sx={(theme) => ({
        gap: 50,
        padding: 60,
        width: '100%',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
      </Box>
    </Box>
  );
}
export default PlanningWorkflow;
