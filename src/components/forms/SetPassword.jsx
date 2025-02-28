import {
    Box,
    Button,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Logo from "../dynamic/Logo";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthData } from "../../utils/slice/Auth";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
export default function SetPassword() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateAuthData({ field: name, value })); // Dispatch the update action
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                sx={{
                    background: (theme) =>
                        `linear-gradient(90deg,${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                    // height: "100vh",
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
                                value={userData.email}
                                name="email"
                                onChange={handleChange}
                            />
                            <FormControl
                                sx={{ width: "100%" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword
                                                        ? "hide the password"
                                                        : "display the password"
                                                }
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                onMouseUp={
                                                    handleMouseUpPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Stack>
                        <NavLink to={"/auth/profile"}>
                            <Button variant="contained" fullWidth size="large">
                                Continue{" "}
                            </Button>
                        </NavLink>
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
