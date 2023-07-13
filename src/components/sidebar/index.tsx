import React from 'react';
import { Box, Button } from '@mantine/core';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <Box
      className="sidebar"
      sx={(theme) => ({
        width: '100%',
        display: 'flex',
        maxWidth: '300px',
        minHeight: '100%',
        flexDirection: 'column',
        padding: theme.spacing.xl,
        backgroundColor: theme.colors.gray[3],
      })}
    >
      <Box
        component="ul"
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        <Box component="li">
          <Button component={NavLink} to="/dashboard" variant="light" fullWidth>
            Dashboard
          </Button>
          <Button component={NavLink} to="/analyzes" variant="light" fullWidth>
            Analyzes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
