import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
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
        </Routes>
       </>
    )    
}
export default App;