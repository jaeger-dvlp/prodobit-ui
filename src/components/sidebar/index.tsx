import React from 'react';
import RoutesMap from '@/routes';
import { BiMenuAltRight } from 'react-icons/bi';
import { Box, Button, Image } from '@mantine/core';
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

function SidebarButton({
  collapseSidebar,
}: {
  collapseSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Button
      onClick={() => collapseSidebar((prev) => !prev)}
      variant="default"
      sx={(theme) => ({
        top: 10,
        right: 10,
        padding: 10,
        zIndex: 200,
        height: 'auto',
        border: 'none',
        display: 'none',
        position: 'fixed',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
        boxShadow: theme.shadows.xl,
        color: theme.colors.foundationgreen[9],
        [theme.fn.smallerThan('md')]: {
          display: 'flex',
        },
      })}
    >
      <Box
        sx={(theme) => ({
          padding: 7,
          height: 'auto',
          borderRadius: 10,
          width: 'fit-content',
          backgroundColor: theme.colors.foundationgreen[1],
        })}
      >
        <BiMenuAltRight size={25} />
      </Box>
    </Button>
  );
}

function Sidebar() {
  const [collapse, collapseSidebar] = React.useState(false);

  return (
    <>
      <Image
        alt="Logo"
        src={Images.logo}
        sx={(theme) => ({
          margin: 50,
          zIndex: 150,
          marginLeft: 80,
          display: 'block',
          marginBottom: 50,
          maxWidth: '170px',
          position: 'absolute',
          transition: 'all 0.15s ease-in-ot',
          [theme.fn.smallerThan('md')]: {
            margin: 30,
            marginLeft: 45,
            maxWidth: '120px',
          },
        })}
      />
      <SidebarButton collapseSidebar={collapseSidebar} />
      <Box
        className="sidebar"
        sx={(theme) => ({
          padding: 0,
          width: '100%',
          paddingTop: 150,
          height: '100vh',
          display: 'flex',
          maxWidth: '400px',
          alignItems: 'start',
          position: 'relative',
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderTopRightRadius: 80,
          borderBottomRightRadius: 80,
          justifyContent: 'space-between',
          transition: 'transform 0.3s ease-in-out',
          [theme.fn.smallerThan('md')]: {
            top: 0,
            left: 0,
            zIndex: 100,
            paddingTop: 90,
            maxWidth: 'calc(100% - 81px)',
            position: 'fixed',
            backgroundColor: '#fff',
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            boxShadow: theme.shadows.xl,
            transform: `translateX(${collapse ? '-100%' : '0'})`,
          },
        })}
      >
        <Routes />
        <SidebarProfile />
      </Box>
    </>
  );
}

export default Sidebar;
