import {RouteObject} from "react-router-dom";
import WelcomePage from "../features/auth/containers/WelcomePage.tsx";
import AuthenticationPage from "../features/auth/containers/AuthenticationPage.tsx";
import React from 'react';
import VerificationPage from "../features/auth/containers/VerificationPage.tsx";
import AuthPopup from "../features/auth/components/AuthPopup.tsx";

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
    {
        path: "/verify",
        element: <VerificationPage/>
    },
    {
        path: "/verify/complete",
        element: <AuthPopup/>
    },
];