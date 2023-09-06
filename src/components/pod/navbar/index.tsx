import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { ProdobitAppTheme as t } from '@/theme';
import { NavLink, useMatch, useParams } from 'react-router-dom';

const BASE_URL = '/pod/production/item';

function NavItem({ name, tab }: { name: string; tab: string }) {
  const { id } = useParams();
  const matched = useMatch(`${BASE_URL}/${id}/${tab}`);
  return (
    <Button
      sx={{
        border: 'none',
        height: 'auto',
        fontWeight: 500,
        fontSize: '18px',
        padding: '12px 0px',
        position: 'relative',
        opacity: matched ? 1 : 0.5,
        transition: 'all 0.2s ease-in-out',
        backgroundColor: 'transparent!important',
        color: matched ? t.colors.purple[6] : t.colors.gray[9],
        '> .mantine-Text-root': {
          lineHeight: 1,
        },
        '&:after': {
          bottom: 0,
          left: '50%',
          content: '""',
          width: '100%',
          position: 'absolute',
          height: matched ? '2px' : 0,
          transform: 'translateX(-50%)',
          backgroundColor: t.colors.purple[6],
          transition: 'all 0.2s ease-in-out',
        },
        '&:hover': {
          opacity: 1,
          color: t.colors.purple[6],
        },
      }}
      to={`${BASE_URL}/${id}/${tab}`}
      replace
      variant="default"
      component={NavLink}
    >
      <Text>{name}</Text>
    </Button>
  );
}

function PodItemsNavbar({
  items: NavbarItems,
}: {
  items: {
    name: string;
    tab: string;
  }[];
}) {
  return (
    <Box
      sx={{
        gap: 40,
        width: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      {NavbarItems.map((item) => (
        <NavItem key={item.tab} name={item.name} tab={item.tab} />
      ))}
    </Box>
  );
}

export default PodItemsNavbar;
