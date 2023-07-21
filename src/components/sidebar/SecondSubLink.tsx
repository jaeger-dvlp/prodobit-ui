import React from 'react';
import { CustomCaret } from '@/components/icons';
import { Box, Button, Text } from '@mantine/core';
import { NavLink, useMatch } from 'react-router-dom';
import { RouteMapItem, SubRouteAnims } from '@/routes';
import { AnimatePresence, motion } from 'framer-motion';
import ThirdSubRouteLink from '@/components/sidebar/ThirdSubLink';

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
          padding: `10px 20px 10px ${isActive ? '20px' : '0px'}`,
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
            borderRadius: 7,
            fontSize: '15px',
            padding: `10.5px 15px 10.5px ${isActive ? '15px' : '0px'}`,
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
              margin: '25px 0px 0px 22px',
            }}
          >
            {subRoutes.map((thirdSubRoute) => (
              <React.Fragment key={thirdSubRoute.path}>
                <ThirdSubRouteLink to={thirdSubRoute.path}>
                  <Text span p={0} m={0} lh={1.2}>
                    {thirdSubRoute.name}
                  </Text>
                </ThirdSubRouteLink>
              </React.Fragment>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default SecondSubRouteLink;
