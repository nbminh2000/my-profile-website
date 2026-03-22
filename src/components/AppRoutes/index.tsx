import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import Home from '../../pages/Home';

export default function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
