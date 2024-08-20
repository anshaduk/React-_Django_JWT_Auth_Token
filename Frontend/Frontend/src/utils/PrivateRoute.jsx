import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const PrivateWrapper = ({ auth }) => {
    // const isAuthenticated = auth?.isAuthenticated ?? false;
    let {user} = useContext(AuthContext)

    return user ? <Outlet /> : <Navigate to="/login" />;
};
