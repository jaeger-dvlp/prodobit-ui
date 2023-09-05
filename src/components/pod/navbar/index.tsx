import React from 'react';
import { Box, Button } from '@mantine/core';
import { ProdobitAppTheme as t } from '@/theme';
import { NavLink, useMatch, useParams } from 'react-router-dom';

const NavbarItems = [
  {
    name: 'Ölçümler',
    path: '/pod/production/item/:id/measurements',
  },
  {
    name: 'Üretim Kayıtları',
    path: '/pod/production/item/:id/records',
  },
  {
    name: 'Notlar',
    path: '/pod/production/item/:id/notes',
  },
  {
    name: 'Dosyalar',
    path: '/pod/production/item/:id/files',
  },
];

function NavItem({ name, path }: { name: string; path: string }) {
  const { id } = useParams();
  const matched = useMatch(path);
  const UrlTo = path.replace(':id', id as string);
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
        '&:after': {
          bottom: 0,
          left: '50%',
          content: '""',
          width: '100%',
          position: 'absolute',
          height: matched ? '2px' : 0,
          transform: 'translateX(-50%)',
          backgroundColor: t.colors.purple[6],
        },
        '&:hover': {
          opacity: 1,
          color: t.colors.purple[6],
        },
      }}
      to={UrlTo}
      variant="default"
      component={NavLink}
    >
      {name}
    </Button>
  );
}

function PodItemsNavbar() {
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
        <NavItem key={item.path} name={item.name} path={item.path} />
      ))}
    </Box>
  );
}

export default PodItemsNavbar;
