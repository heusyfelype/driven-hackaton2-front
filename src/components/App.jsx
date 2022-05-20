import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useNavigate, useLocation, useState } from 'react';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstScreen />} />
                <Route path="/question" element={<SecondScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
