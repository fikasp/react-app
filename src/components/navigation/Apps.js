import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navigation from './Navigation'
import Subpage from './Subpage'
import Home from './Home'

export default function Apps() {
    return (
        <BrowserRouter>
            <Navigation />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/subpage" element={<Subpage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
