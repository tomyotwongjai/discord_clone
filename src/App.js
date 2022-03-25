import React from 'react';
import Home from './pages/Home';
import Channel from './pages/Channel';
import PrivateRoute from './privateRoute/PrivateRoute';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/channels' element={<Channel />} />
        </Route>
        <Route path='/channels/:id' element={<Channel />} />
      </Routes>
    </Router>
  );
};

export default App;
