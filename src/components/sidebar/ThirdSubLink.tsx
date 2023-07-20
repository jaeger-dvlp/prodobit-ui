import React from 'react';
import { Box, Button } from '@mantine/core';
import { NavLink, useMatch } from 'react-router-dom';

function ThirdSubRouteLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const isActive = useMatch(`${to.endsWith('/') ? to : `${to}/`}*`);

  return (
    <Box component="li">
      <Button
        to={to}
        variant="default"
        component={NavLink}
        className={`main-route-link ${isActive && 'main-route-link-active'}`}
        sx={(theme) => ({
          border: 'none',
          display: 'flex',
          marginLeft: -10,
          fontWeight: 300,
          fontSize: '20px',
          borderRadius: 20,
          padding: '10px 0px',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          height: 'fit-content',
          justifyContent: 'start',
          backgroundColor: 'transparent',
          transition: 'all 0.15s ease-in-out',
          color: isActive ? '#000' : '#878688',
          ':hover': {
            color: isActive ? '#000' : theme.colors.foundationgreen[9],
            backgroundColor: 'transparent',
          },
          [theme.fn.smallerThan('md')]: {
            fontSize: '15px',
            padding: '5px 0px',
          },
        })}
      >
        {children}
      </Button>
    </Box>
  );
}

export default ThirdSubRouteLink;
