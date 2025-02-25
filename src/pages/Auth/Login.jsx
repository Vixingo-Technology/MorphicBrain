import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../components/dynamic/Logo";
import { NavLink } from "react-router";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
export default function Login() {
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
                    overflow: "hidden",
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
                            Welcome
                        </Typography>
                        <Typography variant="body1" sx={{ my: 2 }}>
                            Log in to MB to continue to MB Dashboard.
                        </Typography>
                        <Stack sx={{ gap: 2, my: 2 }}>
                            {" "}
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Email Address"
                            />
                        </Stack>
                        <Button variant="contained" fullWidth size="large">
                            Continue{" "}
                        </Button>
                        <Typography variant="body2" sx={{ my: 2 }}>
                            Already have an account?{" "}
                            <NavLink to={"/auth/login"}>Log in</NavLink>
                        </Typography>
                        <Stack spacing={2}>
                            <Typography
                                gutterBottom
                                sx={{
                                    color: "text.secondary",
                                    fontSize: 14,
                                    display: "flex",

                                    alignItems: "center",
                                    mt: "1rem",
                                    "&::before": {
                                        content: '""',
                                        display: "inline-block",
                                        width: "100%",
                                        borderBottom: (theme) =>
                                            `1px solid ${theme.palette.text.secondary}`,
                                        opacity: "30%",
                                        margin: "0 10px",
                                    },
                                    "&::after": {
                                        content: '""',
                                        display: "inline-block",
                                        width: "100%",
                                        borderBottom: (theme) =>
                                            `1px solid ${theme.palette.text.secondary}`,
                                        opacity: "30%",
                                        margin: "0 10px",
                                    },
                                }}
                            >
                                OR
                            </Typography>

                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<GoogleIcon />}
                            >
                                Continue with Google
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<GitHubIcon />}
                            >
                                Continue with GitHub
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<MicrosoftIcon />}
                            >
                                Continue with Microsoft
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
