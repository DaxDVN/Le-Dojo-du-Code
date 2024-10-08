import React from 'react';
import AuthLoginForm from "../components/AuthLoginForm.tsx";

function WelcomePage() {
    return (
        <>
                <div className="absolute top-0 right-0 flex items-center justify-center w-1/2 pt-12">
                    <AuthLoginForm/>
                </div>
        </>
    );
}

export default WelcomePage;
