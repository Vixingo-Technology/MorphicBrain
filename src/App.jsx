import { useState } from "react";

import "./App.css";
import { Button, Paper, Typography } from "@mui/material";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Signup from "./pages/Auth/Signup";
import LandingLayout from "./layouts/LandingLayout";
import DashLayout from "./layouts/DashLayout";
import Dashboard from "./pages/Dashboard";

import AuthLayout from "./layouts/AuthLayout";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import ForgotPass from "./pages/Auth/ForgotPass";
import Login from "./pages/Auth/Login";
import SetPassword from "./components/forms/SetPassword";

function App() {
    return (
        <>
            <Routes>
                <Route path="dashboard" element={<DashLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route
                        path="analytics"
                        element={<Paper>Analytics</Paper>}
                    />
                    <Route path="models" element={<Paper>Models</Paper>} />
                    <Route
                        path="documents"
                        element={<Paper>Documents</Paper>}
                    />
                    <Route path="terminal" element={<Paper>Terminal</Paper>} />
                    <Route path="chat" element={<Paper>Chat</Paper>} />
                    <Route path="plans" element={<Paper>Plans</Paper>} />
                    <Route
                        path="settings"
                        element={<Paper>Users Settings</Paper>}
                    />
                </Route>

                <Route element={<LandingLayout />}>
                    <Route index element={<Landing />} />
                    <Route path="about" element={<About />} />
                    <Route path="capabilities" element={<Capabilities />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="auth" element={<AuthLayout />}>
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="verify-email" element={<VerifyEmail />} />
                    <Route path="signup/password" element={<SetPassword />} />
                    <Route path="forgot-password" element={<ForgotPass />} />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
