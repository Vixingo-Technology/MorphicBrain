import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Logo from "../dynamic/Logo";
import { NavLink } from "react-router";

export default function SetPassword() {
    return (
        <>
            <Box
                sx={{
                    background: (theme) =>
                        `linear-gradient(90deg,${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                    height: { xs: "100%", sm: "100vh" },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "440px",
                        textAlign: "center",
                        p: "1rem",
                        position: "relative",
                        textAlign: "center",
                        flex: 2,
                        pb: "4rem",
                        my: "auto",
                    }}
                >
                    <Paper elevation={3} sx={{ p: 6, borderRadius: 2 }}>
                        <Box sx={{ margin: "0 auto", width: "fit-content" }}>
                            <Logo />
                        </Box>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Create Your Account
                        </Typography>
                        <Typography variant="body1" sx={{ my: 2 }}>
                            Set your password for MB to continue to MB Dashboard
                        </Typography>
                        <Stack sx={{ gap: 2, my: 2 }}>
                            {" "}
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Email"
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Password*"
                            />
                        </Stack>
                        <Button variant="contained" fullWidth size="large">
                            Continue{" "}
                        </Button>
                        <Typography variant="body2" sx={{ my: 2 }}>
                            Already have an account?{" "}
                            <NavLink to={"/auth/login"}>Log in</NavLink>
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
