import React from 'react';
import Home from './pages/Home';
import Channel from './pages/Channel';
import PrivateRoute from './privateRoute/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path='/channels' element={<Channel />} />
            <Route path='/channels/:id' element={<Channel />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
