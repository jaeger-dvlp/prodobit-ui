import React from 'react';
import { ProdobitAppTheme as t } from '@/theme';
import { NavLink, useMatch } from 'react-router-dom';
import { PodRoutesMap, RouteMapItem } from '@/routes';
import { Box, Button, createStyles } from '@mantine/core';

const sidebarStyles = createStyles(() => ({
  root: {
    left: 47,
    top: '50%',
    gap: 10.5,
    zIndex: 10,
    padding: 10.5,
    display: 'flex',
    borderRadius: 105,
    position: 'fixed',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backdropFilter: 'blur(52px)',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(188, 191, 255, 0.20)',
    boxShadow:
      '0px 8.33617px 36.25px 0px rgba(0, 0, 0, 0.15), 0px 1.04202px 1.04202px 0px rgba(255, 255, 255, 0.25) inset, 0px -1.04202px 1.04202px 0px rgba(255, 255, 255, 0.10) inset',
    '> .pod-sidebar-nav-button': {
      padding: 0,
      width: '50px',
      height: '50px',
      border: 'none',
      display: 'flex',
      borderRadius: 105,
      alignItems: 'center',
      color: t.colors.gray[0],
      justifyContent: 'center',
      backgroundColor: 'transparent',
      transition: 'all 0.15s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
      },
      "&[pod-active-nav='true']": {
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
      },
      '> div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '> span': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
        },
      },
      '& svg': {
        width: 20,
        height: 20,
        color: t.colors.gray[0],
        margin: '0!important',
      },
    },
  },
}));

function SidebarNavButton({ route, ...rest }: { route: RouteMapItem }) {
  const isActive = useMatch(`${route.path.endsWith('/') ? route.path : `${route.path}/`}*`);
  return (
    <Button
      {...rest}
      to={route.path}
      variant="default"
      component={NavLink}
      className="pod-sidebar-nav-button"
      pod-active-nav={isActive ? 'true' : 'false'}
    >
      {route.icon}
    </Button>
  );
}

function PodSidebar({ ...rest }) {
  const { classes } = sidebarStyles();
  return (
    <Box {...rest} className={classes.root}>
      {PodRoutesMap.map((route, index) => (
        <SidebarNavButton key={`pod-sidebar-${index}`} route={route} />
      ))}
    </Box>
  );
}

export default PodSidebar;
