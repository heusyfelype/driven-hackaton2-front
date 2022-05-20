
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstScreen from "./FirstScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

