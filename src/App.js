import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Release from './pages/Release';
import Releases from './pages/Releases';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <HelmetProvider>
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
      <Footer />
    </HelmetProvider>
  );
};

export default App;
