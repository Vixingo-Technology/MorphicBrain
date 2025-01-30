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
import LandingLayout from "./layouts/LandingLayout";
import DashLayout from "./layouts/DashLayout";
import Dashboard from "./pages/Dashboard";

import AuthLayout from "./layouts/AuthLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path="dashboard" element={<DashLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="about" element={<About />} />
                </Route>

                <Route element={<LandingLayout />}>
                    <Route index element={<Landing />} />
                    <Route path="capabilities" element={<Capabilities />} />
                </Route>
                <Route path="auth" element={<AuthLayout />}>
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Paper>login</Paper>} />
                    <Route
                        path="forgot-password"
                        element={<Paper>forgot-password</Paper>}
                    />
                </Route>

                <Route path="*" element={<Paper>404</Paper>} />
            </Routes>
        </>
    );
}

export default App;
