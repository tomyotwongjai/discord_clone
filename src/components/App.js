import React from 'react';
import Home from './Home';
import Channel from './Channel';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/channel' element={<Channel />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
