import './styles/App.css'
import {BrowserRouter as Router, Routes, Outlet,Route} from 'react-router-dom';
import { routes } from './routes/routeConfig';
import React from 'react';
import AuthBackground from "./shared/components/AuthBackground.tsx";

function App() {
    return (
        <div>
            <AuthBackground/>
            <Outlet/>
            <div className={"w-full"}>
                <Router>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element}/>
                        ))}
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App
