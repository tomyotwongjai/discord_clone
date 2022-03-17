import React from 'react';
import Home from './pages/Home';
import Channel from './pages/Channel';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/channel' element={<Channel />} />
      </Routes>
    </Router>
  );
};

export default App;