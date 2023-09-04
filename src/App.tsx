import React from 'react';
import Views from '@/views';
import AppLayout from '@/components/layout/app';
import PodLayout from '@/components/layout/pod';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout sidebar />}>
          <Route path="/app/dashboard" element={<Views.App.Dashboard />} />
          <Route path="/app/items" element={<Views.App.Items.Index />} />
          <Route path="/app/items/edit/:id" element={<Views.App.Items.Edit />} />
          <Route path="/app/items/new" element={<Views.App.Items.New />} />
          <Route path="/app/items/list" element={<Views.App.Items.List />} />
          <Route path="/app/items/categories" element={<Views.App.Items.Categories.Index />} />
          <Route path="/app/items/categories/list" element={<Views.App.Items.Categories.List />} />
          <Route
            path="/app/items/categories/deleted"
            element={<Views.App.Items.Categories.Deleted />}
          />
          <Route path="/app/items/categories/jobs" element={<Views.App.Items.Categories.Jobs />} />
          <Route path="/app/items/performance" element={<Views.App.Items.Performance />} />
          <Route path="/app/orders" element={<Views.App.Orders.Index />} />
          <Route path="/app/orders/list" element={<Views.App.Orders.List />} />
          <Route path="/app/planning" element={<Views.App.Planning.Index />} />
          <Route path="/app/planning/workflow" element={<Views.App.Planning.Workflow />} />
          <Route path="/app/tasks" element={<Views.App.Tasks />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<Views.App.Auth.Login />} />
        </Route>
        <Route element={<PodLayout />}>
          <Route path="/pod/dashboard" element={<Views.PodApp.Index />} />
          <Route path="/pod/production/list" element={<Views.PodApp.Production.List />} />
          <Route
            path="/pod/production/item/:id/notes"
            element={<Views.PodApp.Production.Item.Notes />}
          />
          <Route path="/pod/*" element={<Navigate to="/pod/dashboard" />} />
        </Route>
        <Route path="*" element={<Navigate to="/app/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
