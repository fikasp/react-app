import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navigation from './Navigation'
import Subpage from './Subpage'
import Home from './Home'

export default function Apps() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/subpage" element={<Subpage />}/>
            </Routes>
        </Router>
    )
}
