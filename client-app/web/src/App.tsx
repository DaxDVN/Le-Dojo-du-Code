import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routeConfig';


function App() {
    return (
        <div className={"w-full"}>
          <Router>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Router>
        </div>
    )
}

export default App
