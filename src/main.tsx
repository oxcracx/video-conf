import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // ✅ Correct import
import VideoConf from './components/VideoConf.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/video-conference" element={<VideoConf />} />
    </Routes>
  </BrowserRouter>
);
