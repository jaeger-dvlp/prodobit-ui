import React from 'react';
import { Box, Button } from '@mantine/core';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <Box p={5}>
      Not made yet, go to{' '}
      <Button variant="link" bg="foundationgreen" component={NavLink} to="/dashboard">
        Dashboard
      </Button>
    </Box>
  );
}

export default Login;
