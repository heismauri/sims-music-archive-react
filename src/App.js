import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Release from './pages/Release';
import Releases from './pages/Releases';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
