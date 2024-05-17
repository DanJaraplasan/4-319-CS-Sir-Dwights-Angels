import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Profile2 from './pages/Profile2.jsx';
import React from 'react';
import './index.css';
import {Cube} from 'react-preloaders';

function App() {
    return (
        <>
        <Routes>
            <Route path="/Login" element={<Login/>}>
            </Route>
            <Route path="/Register" element={<Register/>}>
            </Route>
            <Route path="/Home" element={<Home/>}>
            </Route>
            <Route path="/Profile" element={<Profile/>}>
            </Route>
            <Route path="/Profile2" element={<Profile2/>}>
            </Route>
        </Routes>
       </>
    )    
}



export default App;