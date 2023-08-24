import React from 'react';
import dayjs from 'dayjs';
import { MockWorkflow } from 'mockdata';
import { EditIcon } from '@/components/icons';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';

import 'dayjs/locale/tr';

dayjs.locale('tr');

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

function StatusIndicator({ pos }: { pos: number }) {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        maxWidth: `${pos}px`,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRight: `1px solid ${t.colors.green[5]}`,
        overflow: 'hidden',
      }}
    >
      <Box
        component={motion.div}
        animate={{
          x: ['-218px', `${pos}px`],
          opacity: ['0', '1', '0'],
        }}
        transition={{
          duration: 5,
          ease: 'backInOut',
          repeat: Infinity,
        }}
        sx={{
          width: '218px',
          height: '100%',
          background: t.fn.linearGradient(90, 'transparent', t.colors.green[1]),
        }}
      />
    </Box>
  );
}

function WorkflowTable() {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [grabSpecs, setGrabSpecs] = React.useState({
    startX: 0,
    scrollLeft: 0,
  });
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const daysSelector = document.querySelector('.days-selector');
    const gridBox = document.querySelector('.grid-box');
    const { scrollLeft } = e.currentTarget;

    if (daysSelector) {
      daysSelector.scrollTo({
        left: scrollLeft,
        behavior: 'instant',
      });
    }

    if (gridBox) {
      gridBox.scrollTo({
        left: scrollLeft,
        behavior: 'instant',
      });
    }
  };

  const onMouseDown = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(true);
    e.currentTarget.style.cursor = 'grabbing';
    setGrabSpecs({
      startX: e.pageX - e.currentTarget.offsetLeft,
      scrollLeft: e.currentTarget.scrollLeft,
    });
  }, []);

  const MouseLeaveEvents = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(false);
    e.currentTarget.style.cursor = 'grab';
  }, []);

  const onMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - grabSpecs.startX) * 3;
      e.currentTarget.scrollLeft = grabSpecs.scrollLeft - walk;
    },
    [grabSpecs.scrollLeft, grabSpecs.startX, isMouseDown],
  );

  return (
    <Box
      sx={{
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        borderRadius: 40,
        flexWrap: 'nowrap',
        position: 'relative',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'stretch',
        '> .workflow-left-col': {
          gap: 0,
          zIndex: 25,
          padding: 0,
          width: '100%',
          minWidth: 160,
          maxWidth: 160,
          height: '100%',
          display: 'flex',
          position: 'relative',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'stretch',
          borderRadius: '30px 0px 0px 30px',
          '.start-gradient': {
            top: 0,
            zIndex: 25,
            left: '100%',
            width: '15%',
            position: 'absolute',
            minHeight: '100%',
            background: t.fn.linearGradient(90, 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)'),
          },
          backgroundColor: '#fff',
          '> div': {
            padding: 10,
            width: '100%',
            height: '111.5px',
            maxHeight: '111.5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '> .mantine-Text-root': {
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '21.6px',
              color: t.colors.gray[5],
            },
          },
        },
        '> .jobs-list': {
          gap: 0,
          zIndex: 6,
          padding: 0,
          width: '900%',
          cursor: 'grab',
          display: 'flex',
          paddingRight: 200,
          overflowX: 'auto',
          overflowY: 'hidden',
          position: 'relative',
          flexDirection: 'column',
          borderTopRightRadius: 30,
          justifyContent: 'flex-start',
          borderBottomRightRadius: 30,
          alignItems: 'flex-start',
          '> .wf-job-col': {
            gap: 13,
            zIndex: 2,
            margin: 0,
            padding: 0,
            width: '100%',
            overflow: 'hidden',
            height: '111.5px',
            maxHeight: '111.5px',
            display: 'flex',
            minWidth: '100%',
            flexWrap: 'nowrap',
            alignItems: 'center',
            transformOrigin: 'left',
            justifyContent: 'flex-start',
            '> .wfj-item': {
              gap: 10,
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
        '> .grid-box': {
          top: 0,
          right: 0,
          margin: 0,
          padding: 0,
          height: '100%',
          border: 'none',
          borderRadius: 30,
          overflow: 'hidden',
          position: 'absolute',
          width: 'calc(100% - 10px)',
          '> .background-pattern': {
            top: -1,
            left: 0,
            zIndex: 5,
            height: '100%',
            color: 'black',
            minWidth: '999%',
            position: 'absolute',
            pointerEvents: 'none',
          },
        },
      }}
    >
      <Box className="grid-box">
        <svg className="background-pattern" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="126" height="112" patternUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="none" />
              <path
                d="M 126 0 L 0 0 0 112"
                fill="none"
                stroke="rgba(0, 0, 0, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </Box>
      <Box className="workflow-left-col">
        <Box className="start-gradient" />
        {MockWorkflow.map((wfItem) => (
          <Box key={`wf-item-name-${wfItem.id}`}>
            <Text>{wfItem.name}</Text>
          </Box>
        ))}
      </Box>
      <Box
        className="jobs-list"
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseLeave={MouseLeaveEvents}
        onMouseUp={MouseLeaveEvents}
        onMouseMove={onMouseMove}
      >
        <StatusIndicator pos={680} />
        {MockWorkflow.map((wfItem) => (
          <Box className="wf-job-col" key={`wf-item-cont-${wfItem.id}`}>
            <AnimatePresence>
              {wfItem.jobs.map((job) => (
                <Box
                  transition={{
                    duration: 1,
                    ease: 'anticipate',
                    delay: 0.4,
                  }}
                  className="wfj-item"
                  component={motion.div}
                  animate={{
                    translateX: 0,
                    translateY: 0,
                    scaleX: 1,
                    opacity: 1,
                  }}
                  initial={{
                    translateX: -50,
                    translateY: Math.floor(Math.random() * 200) - 100,
                    scaleX: 0.8,
                    opacity: 0,
                  }}
                  key={`wf-item-${wfItem.id}-job-${job.id}`}
                  sx={(() => {
                    const diff = Number(
                      calculateJobDuration(job.start_date, job.end_date, 'number'),
                    );
                    const startDay = Number(dayjs(job.start_date).format('D'));
                    return {
                      backgroundColor: job.color[1],
                      border: `1px solid ${job.color[4]}`,
                      /*
                      ? Left & minWidth Calculation Algorithm;
                      ?  Gap between absolute items : 60px
                      ? Days per row in control bar : 8
                      ! - Calculate left value by its % & its start day.
                      *   Example : start day is 3, then must be relative to control bar 3. day button.
                      ! - Calculate minWidth value by its % & its duration.
                      *   Example : start is 3, duration is 5, then must be relative to control bar 5. day button.
                      */
                      position: 'absolute',
                      minWidth: `calc((100% / 8) * ${diff} - 13px)!important`,
                      left: `calc((100% / 8) * ${startDay} - 100px)!important`,
                      [t.fn.smallerThan('xl')]: {
                        minWidth: `calc((100% / 2) * ${diff} - 13px)!important`,
                        left: `calc((100% / 2) * ${startDay} - 100px)!important`,
                      },
                    };
                  })()}
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

export default WorkflowTable;
