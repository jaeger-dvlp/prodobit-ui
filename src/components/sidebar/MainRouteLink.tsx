import React from 'react';
import { Box, Button } from '@mantine/core';
import { CustomCaret } from '@/components/icons';
import { NavLink, useMatch } from 'react-router-dom';
import { RouteMapItem, SubRouteAnims } from '@/routes';
import { AnimatePresence, motion } from 'framer-motion';
import SecondSubRouteLink from '@/components/sidebar/SecondSubLink';

function MainRouteLink({
  to,
  children,
  subRoutes,
}: {
  to: string;
  children: React.ReactNode;
  subRoutes?: RouteMapItem[];
}) {
  const isActive = useMatch(`${to.endsWith('/') ? to : `${to}/`}*`);

  return (
    <Box component="li">
      <Button
        to={to}
        variant="default"
        className={`main-route-link ${isActive && 'main-route-link-active'}`}
        component={NavLink}
        sx={(theme) => ({
          border: 'none',
          display: 'flex',
          fontWeight: 700,
          fontSize: '20px',
          borderRadius: 20,
          padding: '20px 30px',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          height: 'fit-content',
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
            {subRoutes.map(({ path, name, subRoutes: innerSubRoutes }) => (
              <React.Fragment key={path}>
                <SecondSubRouteLink to={path} subRoutes={innerSubRoutes}>
                  {name}
                </SecondSubRouteLink>
              </React.Fragment>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default MainRouteLink;
