import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookContainer from './book/BookContainer';
import Login from '../module/user/Login';

export const App = () => {

  return (
    <Layout>

      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path='/' element={<BookContainer />} />
        </Routes>
      </Router>

    </Layout>
  );
};

export default App;