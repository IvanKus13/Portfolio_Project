
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PortfolioEditor from "./pages/PortfolioEditor";
import PortfolioView from "./pages/PortfolioView";

import DevicePreview from "./components/DevicePreview";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DevicePreview />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/editor" element={<PortfolioEditor />} />
                    <Route path="/portfolio/:username" element={<PortfolioView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
