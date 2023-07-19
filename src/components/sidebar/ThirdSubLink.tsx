import { Button } from '@mantine/core';
import React from 'react';
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
    <Button
      to={to}
      variant="default"
      className={`main-route-link ${isActive && 'main-route-link-active'}`}
      component={NavLink}
      sx={(theme) => ({
        padding: '10px 0px',
        border: 'none',
        display: 'flex',
        fontWeight: 300,
        fontSize: '20px',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: 'fit-content',
        justifyContent: 'start',
        transition: 'all 0.15s ease-in-out',
        color: isActive ? '#000' : '#878688',
        backgroundColor: 'transparent',
        ':hover': {
          color: isActive ? '#000' : theme.colors.foundationgreen[9],
          backgroundColor: 'transparent',
        },
      })}
    >
      {children}
    </Button>
  );
}

export default ThirdSubRouteLink;
