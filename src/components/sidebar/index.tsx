import React from 'react';
import { NavLink, PathMatch } from 'react-router-dom';
import isRouteActive from '@/common/hooks/isRouteActive';
import MainRouteLink from '@/components/sidebar/MainRouteLink';
import { AnimatePresence, Variant, motion } from 'framer-motion';
import SidebarProfile from '@/components/sidebar/SidebarProfile';
import RouteLeftIndicator from '@/components/sidebar/RouteLeftIndicator';
import { Box, Button, CSSObject, Image, MantineTheme } from '@mantine/core';

import {
  TasksIcon,
  AnalyzesIcon,
  RequestsIcon,
  DashboardIcon,
} from '@/components/icons';

const Images = {
  logo: '/assets/img/logo.svg',
};

const SubRouteAnims: {
  [key: string]: Variant;
} = {
  hidden: {
    opacity: 0,
    y: -10,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.15,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    height: 'fit-content',
    marginTop: 30,
    transition: {
      duration: 0.15,
    },
  },
};

function Routes() {
  const SecondarySubRouteStyles = (
    theme: MantineTheme,
    isActive?: PathMatch<string> | null,
  ): CSSObject => ({
    border: 'none',
    display: 'flex',
    fontWeight: 500,
    fontSize: '20px',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 'fit-content',
    justifyContent: 'start',
    transition: 'all 0.15s ease-in-out',
    padding: `20px 30px 20px ${isActive ? 30 : 0}px`,
    color: isActive ? theme.colors.foundationgreen[9] : '#676668',
    backgroundColor: isActive ? theme.colors.foundationgreen[1] : 'transparent',
    ':hover': {
      color: theme.colors.foundationgreen[9],
      backgroundColor: isActive
        ? theme.colors.foundationgreen[1]
        : 'transparent',
    },
  });

  return (
    <Box
      className="sidebar-routes"
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
        <AnimatePresence>
          {isRouteActive('/dashboard') && (
            <Box
              exit="hidden"
              initial="hidden"
              animate="visible"
              className="sub-routes"
              component={motion.ul}
              variants={SubRouteAnims}
              sx={{
                listStyle: 'none',
                position: 'relative',
                margin: '30px 0px 0px 35px',
              }}
            >
              <Box component="li">
                <Button
                  to="/dashboard/sales"
                  variant="default"
                  component={NavLink}
                  sx={(theme) =>
                    SecondarySubRouteStyles(
                      theme,
                      isRouteActive('/dashboard/sales'),
                    )
                  }
                >
                  Sales
                </Button>
                <Button
                  to="/dashboard/general-analysis"
                  variant="default"
                  component={NavLink}
                  sx={(theme) =>
                    SecondarySubRouteStyles(
                      theme,
                      isRouteActive('/dashboard/general-analysis'),
                    )
                  }
                >
                  Gen. Analysis
                </Button>
                <Button
                  to="/dashboard/performance"
                  variant="default"
                  component={NavLink}
                  sx={(theme) =>
                    SecondarySubRouteStyles(
                      theme,
                      isRouteActive('/dashboard/performance'),
                    )
                  }
                >
                  Performance
                </Button>
              </Box>
            </Box>
          )}
        </AnimatePresence>
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
        height: '100vh',
        display: 'flex',
        maxWidth: '400px',
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
