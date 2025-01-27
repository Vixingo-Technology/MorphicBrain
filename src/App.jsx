import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Paper, Typography } from "@mui/material";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Signup from "./pages/Signup";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Paper>contact</Paper>} />
                <Route path="/whitepaper" element={<Paper>whitepaper</Paper>} />
                <Route path="/research" element={<Paper>research</Paper>} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/services" element={<Paper>services</Paper>} />
                <Route path="/team" element={<Paper>team</Paper>} />
                <Route path="/careers" element={<Paper>careers</Paper>} />
                <Route path="/blog" element={<Paper>blog</Paper>} />
                <Route path="/faq" element={<Paper>faq</Paper>} />
                <Route path="/terms" element={<Paper>terms</Paper>} />
                <Route path="/privacy" element={<Paper>privacy</Paper>} />
                <Route path="/login" element={<Paper>login</Paper>} />
                <Route path="/logout" element={<Paper>logout</Paper>} />
                <Route path="/signup" element={Signup} />
                <Route
                    path="/forgot-password"
                    element={<Paper>forgot-password</Paper>}
                />
                <Route
                    path="/reset-password"
                    element={<Paper>reset-password</Paper>}
                />
                <Route path="*" element={<Paper>404</Paper>} />
            </Routes>
        </>
    );
}

export default App;
