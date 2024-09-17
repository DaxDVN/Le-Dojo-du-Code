import ProtectedRoute from "./ProtectedRoute.tsx";
import ExampleFeatureComponent from '../features/example-feature/components/ExampleFeatureComponent.tsx';
import React from 'react';

export const privateRoutes = [
    {
        path: '/example',
        element: (
            <ProtectedRoute>
                <ExampleFeatureComponent/>
            </ProtectedRoute>
        ),
    },
];
