import {RouteObject} from "react-router-dom";
import WelcomePage from "../features/auth/containers/WelcomePage.tsx";
import AuthenticationPage from "../features/auth/containers/AuthenticationPage.tsx";
import React from 'react';

export const publicRoutes: RouteObject[] = [
    // {
    //     path: "app",
    //     element: isLoggedIn ? <HomeComponent /> : <Navigate to="/login" />,
    //     children: [
    //         { index: true, element: <Navigate to="dashboard" /> },
    //         { path: "dashboard", element: <DashboardComponent /> },
    //         { path: "other", element: <OtherComponent /> }
    //     ]
    // },
    {
        path: "/auth",
        element: <AuthenticationPage/>
    },
    {
        path: "/",
        element: <WelcomePage/>
    },
];