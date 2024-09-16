import {useState} from 'react'

import viteLogo from '/vite.svg'
import './styles/App.css'
import LoginPage from "./features/example-feature/containers/login/login.tsx";
import SignUpPage from "./features/example-feature/containers/sign-up/signup.tsx";

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
            <SignUpPage/>
            <LoginPage/>
        </>
    )
}

export default App
