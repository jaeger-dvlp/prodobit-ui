import React from 'react';
import RoutesMap from '@/routes';
import { Box, Image } from '@mantine/core';
import MainRouteLink from '@/components/sidebar/MainRouteLink';
import SidebarProfile from '@/components/sidebar/SidebarProfile';
import RouteLeftIndicator from '@/components/sidebar/RouteLeftIndicator';

const Images = {
  logo: '/assets/img/logo.svg',
};

function Routes() {
  return (
    <Box
      className="sidebar-routes"
      component="ul"
      sx={(theme) => ({
        margin: 0,
        padding: '0px 50px',
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
      {RoutesMap.map(({ path, name, icon: Icon, subRoutes }) => {
        return (
          <React.Fragment key={path}>
            <MainRouteLink to={path} subRoutes={subRoutes} key={path}>
              {Icon}
              <span>{name}</span>
            </MainRouteLink>
          </React.Fragment>
        );
      })}
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
