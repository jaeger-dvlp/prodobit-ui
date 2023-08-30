import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Text } from '@mantine/core';

function Login() {
  return (
    <Box
      component="section"
      sx={{
        gap: 10,
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Text align="center">Login View</Text>
      <Button variant="link" bg="green" component={NavLink} to="/dashboard">
        Go to Dashboard
      </Button>
    </Box>
  );
}

export default Login;
