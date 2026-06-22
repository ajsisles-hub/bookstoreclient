import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookContainer from './book/BookContainer';
import Login from '../module/user/Login';
import { SnackbarProvider } from 'notistack';
import Auth from './auth';
import Register from '../module/user/Register';

export const App = () => {

  return (
    //maxSnack -> how many alert can stack
    <SnackbarProvider maxSnack={1}>
      <Layout>

        <Router>
          <Routes>
            {/* Public Route */}
            <Route path="login" element={<Login />} />

            {/* Protected Routes Wrapper */}
            <Route element={<Auth />} />
            {/* Anything inside here requires a token */}
            <Route path='/' element={<BookContainer />} />
            {/* You can easily add more protected pages here later, like: */}
           <Route path='/register' element={<Register />} />

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Router>

      </Layout>
    </SnackbarProvider >
  );
};

export default App;