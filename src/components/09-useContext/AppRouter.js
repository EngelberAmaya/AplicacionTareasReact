import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Navbar from './Navbar';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container mt-3'>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />                
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path="*" element={<HomeScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
