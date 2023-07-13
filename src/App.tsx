import '@/index.css';
import Sidebar from '@/components/sidebar';
import loadable from '@loadable/component';
import Loader from '@/components/layout/Loader';
import { Box, MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LoadableWrapper = (component: any) =>
  loadable(() => component, { fallback: <Loader /> });

const ViewDashboard = LoadableWrapper(import('@/views/dashboard'));
const ViewAnalyzes = LoadableWrapper(import('@/views/analyzes'));

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
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
        sx={{
          width: '100%',
          display: 'flex',
          minHeight: '100vh',
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'start',
          backgroundColor: '#fff',
        }}
      >
        <BrowserRouter>
          <Sidebar />
          <Box
            sx={{
              width: '100%',
              minHeight: '100%',
              position: 'relative',
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<ViewDashboard />} />
              <Route path="/analyzes" element={<ViewAnalyzes />} />
              <Route path="*" element={<ViewDashboard />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </MantineProvider>
  );
}

export default App;
