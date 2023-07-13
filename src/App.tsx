import '@/index.css';
import Sidebar from '@/components/sidebar';
import Dashboard from '@/views/dashboard';
import { Box, MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box
        className="app"
        sx={{
          width: '100%',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'row',
          justifyContent: 'start',
        }}
      >
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </MantineProvider>
  );
}

export default App;
