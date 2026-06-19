import React from 'react';
import Layout from './layout/Layout';
import BookContainer from './book/BookContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../module/user/Login';

export const App = () => {

  return (
    <Layout>

      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route exact path='/' element={<BookContainer />} />
        </Routes>
      </Router>

    </Layout>
  );
};

export default App;