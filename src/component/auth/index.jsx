import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserToken } from '../../module/user/userSelector';


const Auth = () => {
    const token = useSelector(getUserToken);


    // If there is no token, safely redirect to login immediately
    // replace: true ensures they can't hit the "back" button to return here
    if (!token) {
        return <Navigate to='/login' />;
    }

    // If there is a token, render the matching child route
    return <Outlet />;



};

export default Auth;