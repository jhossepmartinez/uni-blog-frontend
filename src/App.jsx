import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        const currentPath = window.location.pathname;
        setShowHeader(currentPath === "/");
    })
    return (
        <Router>
            {showHeader && <Header />}
            <Routes>
                <Route path="/login" element={<Login />}>
                </Route>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
