import '@/index.css';
import Sidebar from '@/components/sidebar';
import Dashboard from '@/views/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section className="w-full flex flex-row justify-start min-h-screen">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
