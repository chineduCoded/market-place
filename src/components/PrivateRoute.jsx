import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    const user = {loggedIn: true}
    return user && user.loggedIn;
}

export const PrivateRoute = ({children}) => {
    const isAuth = useAuth()
    return isAuth ? children: <Navigate to="/userinfo" />;
};

