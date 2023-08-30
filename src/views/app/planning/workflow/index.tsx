import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { ProdobitAppTheme as t } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import RoutesMap, { RouteMapItem } from '@/routes';
import { Box, Button, Sx, Text } from '@mantine/core';
import WorkflowWrapper from '@/components/context/Workflow.context';
import { BoldCalendarIcon, CustomRadarIcon } from '@/components/icons';
import ControlBar from '@/components/views/planning/workflow/ControlBar';
import WorkflowTable from '@/components/views/planning/workflow/WorkflowTable';

import 'dayjs/locale/tr';
import WorkflowToolbar from '@/components/views/planning/workflow/Toolbar';

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

function PlanningWorkflow() {
  const [view, setView] = React.useState<Views>('workflow');
  const Route = RoutesMap.find((route: RouteMapItem) => route.path === '/app/planning');
  const Route2 = Route?.subRoutes?.find(
    (route: RouteMapItem) => route.path === '/app/planning/workflow',
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
        <WorkflowToolbar />
      </Box>
    </WorkflowWrapper>
  );
}
export default PlanningWorkflow;
