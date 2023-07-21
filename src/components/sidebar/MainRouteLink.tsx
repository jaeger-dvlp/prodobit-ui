import React from 'react';
import { CustomCaret } from '@/components/icons';
import { Box, Button, Text } from '@mantine/core';
import { NavLink, useMatch } from 'react-router-dom';
import { RouteMapItem, SubRouteAnims } from '@/routes';
import { AnimatePresence, motion } from 'framer-motion';
import SecondSubRouteLink from '@/components/sidebar/SecondSubLink';

function MainRouteLink({
  to,
  name,
  children,
  subRoutes,
}: {
  to: string;
  name: string;
  children: React.ReactNode;
  subRoutes?: RouteMapItem[];
}) {
  const isActive = useMatch(`${to.endsWith('/') ? to : `${to}/`}*`);

  return (
    <Box component="li" p={0} m={0}>
      <Button
        to={to}
        variant="default"
        className={`main-route-link ${isActive && 'main-route-link-active'}`}
        component={NavLink}
        sx={(theme) => ({
          height: 'auto',
          border: 'none',
          display: 'flex',
          fontWeight: 700,
          fontSize: '20px',
          borderRadius: 20,
          padding: '20px 30px',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'start',
          transition: 'all 0.15s ease-in-out',
          color: isActive ? theme.colors.foundationgreen[9] : '#676668',
          backgroundColor: isActive
            ? theme.colors.foundationgreen[1]
            : 'transparent',
          ':hover': {
            color: theme.colors.foundationgreen[9],
            backgroundColor: isActive
              ? theme.colors.foundationgreen[1]
              : 'transparent',
          },
          [theme.fn.smallerThan('md')]: {
            fontSize: '15px',
            borderRadius: 15,
            padding: '12.5px 20px',
          },
        })}
      >
        {children}
        <span>{name}</span>
        {subRoutes && (
          <CustomCaret
            width={24}
            style={{
              right: 30,
              top: '50%',
              position: 'absolute',
              transition: 'all 0.15s ease-in-out',
              transform: `translateY(-50%) ${
                isActive ? 'rotate(180deg)' : 'rotate(0deg)'
              }`,
            }}
          />
        )}
      </Button>
      <AnimatePresence>
        {isActive && subRoutes && (
          <Box
            exit="hidden"
            initial="hidden"
            animate="visible"
            component={motion.ul}
            variants={SubRouteAnims.seconds}
            sx={{
              listStyle: 'none',
              position: 'relative',
              margin: '30px 0px 0px 35px',
            }}
          >
            {subRoutes.map(
              ({ path, name: subRouteName, subRoutes: innerSubRoutes }) => (
                <React.Fragment key={path}>
                  <SecondSubRouteLink to={path} subRoutes={innerSubRoutes}>
                    <Text span p={0} m={0} lh={1.2}>
                      {subRouteName}
                    </Text>
                  </SecondSubRouteLink>
                </React.Fragment>
              ),
            )}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default MainRouteLink;
