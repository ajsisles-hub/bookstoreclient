import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

            {/* 1. Automatic Redirect: When hitting '/', send them to '/login' */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* 2. Public Routes */}
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Register is usually public */}

            {/* 3. Protected Routes Wrapper */}
            {/* Notice how the protected routes are now INSIDE the Auth Route */}
            <Route element={<Auth />}>
              <Route path="/book-list" element={<BookContainer />} />
              {/* Any other protected routes go here seamlessly */}
            </Route>
          </Routes>
        </Router>

      </Layout>
    </SnackbarProvider >
  );
};

export default App;