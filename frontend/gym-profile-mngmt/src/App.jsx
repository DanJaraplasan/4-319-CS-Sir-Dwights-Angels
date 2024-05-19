import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Profile2 from './pages/Profile2.jsx';
import React from 'react';
import './index.css';
import { Cube } from 'react-preloaders';

function App() {
    return (
        <>
            <Cube />
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile2" element={<Profile2 />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

function NotFound() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <h1 className="text-4xl">404 - Page Not Found</h1>
        </div>
    );
}

export default App;