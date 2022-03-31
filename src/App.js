import React from 'react';
import Home from './pages/Home';
import Channel from './pages/Channel';
import PrivateRoute from './privateRoute/PrivateRoute';
import Login from './pages/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/channels' element={<Channel />} />
          <Route path='/channels/:id' element={<Channel />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
