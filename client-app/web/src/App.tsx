import {useState} from 'react'

import viteLogo from '/vite.svg'
import './styles/App.css'
import LoginPage from "./features/auth/containers/LoginPage.tsx";
import RegisterPage from "./features/auth/containers/RegisterPage.tsx";
import VerificationPage from "./features/auth/containers/VerificationPage.tsx";
import AuthPopup from "./features/auth/components/AuthPopup.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={"flex flex-row justify-between"}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <RegisterPage/>
            <LoginPage/>
            <VerificationPage/>
            <AuthPopup/>
        </>
    )
}

export default App
