import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Release from './pages/Release';
import Releases from './pages/Releases';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/releases">
            <Route index element={<Releases />} />
            <Route path=":slug" element={<Release />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
