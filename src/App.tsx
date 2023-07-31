import Views from '@/views';
import AppLayout from '@/components/layout';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout sidebar />}>
          <Route path="/dashboard" element={<Views.Dashboard />} />
          <Route path="/items" element={<Views.Items.Index />} />
          <Route path="/items/edit/:id" element={<Views.Items.Edit />} />
          <Route path="/items/list" element={<Views.Items.List />} />
          <Route path="/items/categories" element={<Views.Items.Categories.Index />} />
          <Route path="/items/categories/list" element={<Views.Items.Categories.List />} />
          <Route path="/items/categories/deleted" element={<Views.Items.Categories.Deleted />} />
          <Route path="/items/categories/jobs" element={<Views.Items.Categories.Jobs />} />
          <Route path="/items/performance" element={<Views.Items.Performance />} />
          <Route path="/requests" element={<Views.Requests />} />
          <Route path="/tasks" element={<Views.Tasks />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<Views.Auth.Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
