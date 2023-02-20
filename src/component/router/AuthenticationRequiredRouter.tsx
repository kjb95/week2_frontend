import React from 'react';
import {JWT_TOKEN} from "../../const/Const";
import {Navigate, Outlet} from "react-router-dom";

function AuthenticationRequiredRouter() {
    const isAuthenticated = sessionStorage.getItem(JWT_TOKEN);

    return (isAuthenticated) ? <Outlet/> : <Navigate to="/login"/>;
}

export default AuthenticationRequiredRouter;