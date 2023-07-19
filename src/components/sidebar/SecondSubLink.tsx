import { Box, Button } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import ThirdSubRouteLink from '@/components/sidebar/ThirdSubLink';
import { RouteMapItem, SubRouteAnims } from '@/routes';
import { CustomCaret } from '../icons';

function SecondSubRouteLink({
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
          fontWeight: 500,
          fontSize: '20px',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          height: 'fit-content',
          justifyContent: 'start',
          transition: 'all 0.15s ease-in-out',
          padding: `14.5px 20px 14.5px ${isActive ? '20px' : '0px'}`,
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
        })}
      >
        {children}
        {subRoutes && (
          <CustomCaret
            width={24}
            style={{
              right: '20px',
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
            variants={SubRouteAnims.thirds}
            sx={{
              listStyle: 'none',
              position: 'relative',
              margin: '30px 0px 0px 35px',
            }}
          >
            {subRoutes.map((thirdSubRoute) => (
              <Box component="li" key={thirdSubRoute.path}>
                <ThirdSubRouteLink to={thirdSubRoute.path}>
                  {thirdSubRoute.name}
                </ThirdSubRouteLink>
              </Box>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default SecondSubRouteLink;
