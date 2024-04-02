import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import MainTrades from './pages/MainTrades';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/trades" element={<MainTrades />} />
            {/* Add more routes for other pages as needed */}
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

