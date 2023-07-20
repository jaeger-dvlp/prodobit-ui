import Views from '@/views';
import Sidebar from '@/components/sidebar';
import { Box, MantineProvider } from '@mantine/core';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
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
              <Route path="/dashboard" element={<Views.Dashboard />} />
              <Route path="/items" element={<Views.Items />} />
              <Route path="/analytics" element={<Views.Analytics.Index />} />
              <Route
                path="/analytics/sales"
                element={<Views.Analytics.Sales />}
              />
              <Route
                path="/analytics/gn-analytics"
                element={<Views.Analytics.GnAnalytics.Index />}
              />
              <Route
                path="/analytics/gn-analytics/general"
                element={<Views.Analytics.GnAnalytics.General />}
              />
              <Route
                path="/analytics/gn-analytics/tasks"
                element={<Views.Analytics.GnAnalytics.Tasks />}
              />
              <Route
                path="/analytics/gn-analytics/jobs"
                element={<Views.Analytics.GnAnalytics.Jobs />}
              />
              <Route
                path="/analytics/performance"
                element={<Views.Analytics.Performance />}
              />
              <Route path="/requests" element={<Views.Requests />} />
              <Route path="/tasks" element={<Views.Tasks />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </MantineProvider>
  );
}

export default App;
