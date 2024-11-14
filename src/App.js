import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import TransactionPage from './TransactionPage';
import FeaturesPage from './FeaturesPage';
import ReportPage from './ReportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/" element={<Login />} /> {/* Default route to login */}
      </Routes>
    </Router>
  );
}

export default App;

