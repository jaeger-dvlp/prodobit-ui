import React from 'react';
import { Box, Image } from '@mantine/core';
import { useMatch } from 'react-router-dom';
import MainRouteLink from '@/components/sidebar/MainRouteLink';
import SidebarProfile from '@/components/sidebar/SidebarProfile';
import RouteLeftIndicator from '@/components/sidebar/RouteLeftIndicator';

import {
  TasksIcon,
  AnalyzesIcon,
  RequestsIcon,
  DashboardIcon,
} from '@/components/icons';

const Images = {
  logo: '/assets/img/logo.svg',
};

function isActiveRoute(route: string) {
  return useMatch(route);
}

function Routes() {
  return (
    <Box
      component="ul"
      sx={(theme) => ({
        margin: 0,
        padding: 50,
        width: '100%',
        maxHeight: '70%',
        overflow: 'auto',
        listStyle: 'none',
        position: 'relative',
        [theme.fn.smallerThan('lg')]: {
          padding: 25,
        },
      })}
    >
      <Box component="li">
        <MainRouteLink to="/dashboard" haveSubRoutes>
          <DashboardIcon
            fill="currentColor"
            width={23}
            height={23}
            style={{
              marginRight: 15,
            }}
          />
          <span>Dashboard</span>
        </MainRouteLink>
      </Box>
      <Box component="li">
        <MainRouteLink to="/analyzes">
          <AnalyzesIcon
            fill="currentColor"
            width={23}
            height={23}
            style={{
              marginRight: 15,
            }}
          />
          <span>Analyzes</span>
        </MainRouteLink>
      </Box>
      <Box component="li">
        <MainRouteLink to="/requests">
          <RequestsIcon
            fill="currentColor"
            width={23}
            height={23}
            style={{
              marginRight: 15,
            }}
          />
          <span>Requests</span>
        </MainRouteLink>
      </Box>
      <Box component="li">
        <MainRouteLink to="/tasks">
          <TasksIcon
            fill="currentColor"
            width={23}
            height={23}
            style={{
              marginRight: 15,
            }}
          />
          <span>Tasks</span>
        </MainRouteLink>
      </Box>
      <RouteLeftIndicator />
    </Box>
  );
}

function Sidebar() {
  return (
    <Box
      className="sidebar"
      sx={(theme) => ({
        padding: 0,
        width: '100%',
        display: 'flex',
        maxWidth: '400px',
        minHeight: '100%',
        alignItems: 'start',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: theme.radius.xl,
        justifyContent: 'space-between',
        [theme.fn.smallerThan('md')]: {
          top: 0,
          left: 0,
          zIndex: 100,
          borderRadius: 0,
          position: 'fixed',
          backgroundColor: '#fff',
          maxWidth: '80%',
        },
      })}
    >
      <Image
        alt="Logo"
        src={Images.logo}
        sx={(theme) => ({
          margin: '50px 50px 50px 80px',
          width: '100%',
          display: 'block',
          maxWidth: '170px',
          [theme.fn.smallerThan('md')]: {
            display: 'none',
          },
        })}
      />
      <Routes />
      <SidebarProfile />
    </Box>
  );
}

export default Sidebar;
