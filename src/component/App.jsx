import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookContainer from './book/BookContainer';
import Login from '../module/user/Login';
import { SnackbarProvider } from 'notistack';

export const App = () => {

  return (
    //maxSnack -> how many alert can stack
    <SnackbarProvider maxSnack={1}>
      <Layout>

        <Router>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path='/' element={<BookContainer />} />
          </Routes>
        </Router>

      </Layout>
    </SnackbarProvider>
  );
};

export default App;