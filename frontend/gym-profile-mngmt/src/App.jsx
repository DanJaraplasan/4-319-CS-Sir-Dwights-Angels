import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
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
        </Routes>
       </>
       
       
    )    
}
export default App;