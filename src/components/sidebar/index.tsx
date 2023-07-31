import React from 'react';
import RoutesMap from '@/routes';
import { motion } from 'framer-motion';
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
        [theme.fn.smallerThan('md')]: {
          padding: 25,
        },
      })}
    >
      {RoutesMap.map(({ path, name, icon: Icon, subRoutes, viewInSidebar }) => {
        return (
          viewInSidebar && (
            <React.Fragment key={path}>
              <MainRouteLink to={path} subRoutes={subRoutes} key={path} name={name}>
                {Icon}
              </MainRouteLink>
            </React.Fragment>
          )
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
        color: theme.colors.green[9],
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
          backgroundColor: theme.colors.green[1],
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
      <SidebarButton collapseSidebar={collapseSidebar} />
      <Box
        component={motion.aside}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
        }}
        exit="exit"
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.2,
        }}
        className="sidebar"
        sx={(theme) => ({
          top: 0,
          padding: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          maxWidth: '400px',
          position: 'sticky',
          alignItems: 'start',
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
            maxWidth: 'calc(100% - 106px)',
            position: 'fixed',
            backgroundColor: '#fff',
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            boxShadow: theme.shadows.xl,
            transform: `translateX(${collapse ? '-100%' : '0'})`,
          },
        })}
      >
        <Image
          alt="Logo"
          src={Images.logo}
          sx={(theme) => ({
            marginTop: 50,
            marginLeft: 80,
            marginBottom: 50,
            display: 'block',
            maxWidth: '170px',
            position: 'relative',
            transition: 'all 0.15s ease-in-ot',
            [theme.fn.smallerThan('md')]: {
              marginTop: 30,
              marginLeft: 45,
              marginBottom: 30,
              maxWidth: '120px',
            },
          })}
        />
        <Routes />
        <SidebarProfile />
      </Box>
    </>
  );
}

export default Sidebar;
