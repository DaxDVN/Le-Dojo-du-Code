import React, {useState} from 'react';
import AuthLoginForm from "../components/AuthLoginForm.tsx";
import AuthRegisterForm from "../components/AuthRegisterForm.tsx";

function AuthenticationPage() {
    // Overlay
    const [overlay, setIsOverlay] = useState(true);
    const setOverlay = () => {
        console.log(1)
        setIsOverlay(!overlay );
    };
    return (
        <div className={"container-fluid mx-auto px-4 relative"}>
            <div className="grid h-screen grid-cols-2 p-8">
                <div className="flex h-full w-full justify-end">
                    <AuthRegisterForm overlay={overlay} setOverlay={setOverlay}/>
                </div>
                <div className="flex h-full w-full justify-start">
                    <AuthLoginForm overlay={overlay}  setOverlay={setOverlay}/>
                </div>
            </div>
        </div>
    );
}

export default AuthenticationPage;