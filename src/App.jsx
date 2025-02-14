import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ValidatorInfo from './pages/ValidatorInfo';
import Documentation from './pages/Documentation';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/validator-info" element={<ValidatorInfo />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
