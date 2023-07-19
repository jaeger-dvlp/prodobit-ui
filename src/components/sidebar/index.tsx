import React from 'react';
import { Box, Button, Image } from '@mantine/core';
import { NavLink, useMatch } from 'react-router-dom';

import {
  TasksIcon,
  CustomCaret,
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

function MainRouteLink({
  to,
  children,
  haveSubRoutes,
}: {
  to: string;
  children: React.ReactNode;
  haveSubRoutes?: boolean;
}) {
  const routeStatus = isActiveRoute(to);

  return (
    <Button
      to={to}
      variant="default"
      component={NavLink}
      sx={(theme) => ({
        border: 'none',
        display: 'flex',
        fontSize: '20px',
        borderRadius: 20,
        padding: '20px 30px',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: 'fit-content',
        justifyContent: 'start',
        transition: 'all 0.15s ease-in-out',
        color: routeStatus ? theme.colors.foundationgreen[9] : '#676668',
        backgroundColor: routeStatus
          ? theme.colors.foundationgreen[1]
          : 'transparent',
        ':hover': {
          color: theme.colors.foundationgreen[9],
          backgroundColor: routeStatus
            ? theme.colors.foundationgreen[1]
            : 'transparent',
        },
      })}
    >
      {children}
      {haveSubRoutes && (
        <CustomCaret
          width={24}
          style={{
            right: 30,
            top: '50%',
            position: 'absolute',
            transition: 'all 0.15s ease-in-out',
            transform: `translateY(-50%) ${
              routeStatus ? 'rotate(180deg)' : 'rotate(0deg)'
            }`,
          }}
        />
      )}
    </Button>
  );
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
        borderRadius: theme.radius.xl,
        justifyContent: 'space-between',
        backgroundColor: isActiveRoute('/dashboard') ? '#fff' : 'transparent',
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
          margin: 50,
          width: '100%',
          display: 'block',
          maxWidth: '170px',
          [theme.fn.smallerThan('md')]: {
            display: 'none',
          },
        })}
      />
      <Routes />
      <Box>Bottom</Box>
    </Box>
  );
}

export default Sidebar;
