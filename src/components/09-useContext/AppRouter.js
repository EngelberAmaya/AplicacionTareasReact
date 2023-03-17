import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen />} />                
                <Route path='/about' element={<AboutScreen />} />
                <Route path='/login' element={<LoginScreen />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
