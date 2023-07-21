import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/sidebar';
import { Box, MantineProvider } from '@mantine/core';

type Props = {
  sidebar?: boolean;
};

function AppLayout({ sidebar = false }: Props) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Inter, sans-serif',
        colors: {
          foundationgreen: [
            '#EEFCF9',
            '#DDF5F0',
            '#B6EDE0',
            '#8CE4D0',
            '#6CDDC2',
            '#59D8B8',
            '#4DD6B4',
            '#3EBD9E',
            '#32A88C',
            '#1C9278',
          ],
        },
      }}
    >
      <Box
        className="app"
        sx={(theme) => ({
          width: '100%',
          display: 'flex',
          minHeight: '100vh',
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'start',
          backgroundImage: theme.fn.gradient({
            from: '#E6EDEB',
            to: '#FEEDEE',
            deg: 130,
          }),
        })}
      >
        {sidebar && <Sidebar />}
        <Outlet />
      </Box>
    </MantineProvider>
  );
}

export default AppLayout;
