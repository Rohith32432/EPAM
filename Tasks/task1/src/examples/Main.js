import React, { useEffect, useState } from 'react'
import Otp from './otp'
import { Route, Routes, json } from 'react-router-dom';
import Home from './home';
import Prodt from './prodt';
import Prodtlist from './prodtlist';

function Main() {

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />}></Route>
               
                <Route path='/product/:id' element={<Prodt />}>
                </Route>
            </Routes>
        </div>
    )
}

export default Main