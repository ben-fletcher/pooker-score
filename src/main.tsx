import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import Start from './Pages/Start.tsx'
import './main.scss'
import Splash from './Pages/Splash.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  </BrowserRouter>,
)
