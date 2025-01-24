import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Paper, Typography } from "@mui/material";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </>
    );
}

export default App;
