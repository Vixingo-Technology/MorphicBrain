import React from "react";
import Card from "@mui/material/Card";
import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { NavLink, useNavigate } from "react-router";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthData } from "../../utils/slice/Auth";
function SignupForm() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateAuthData({ field: name, value })); // Dispatch the update action
    };
    const userEmail = userData?.email || "";
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();
    const GoNext = () => {
        if (!userEmail.includes("@")) {
            setError(true);
            setOpen(true);
        } else {
            setError(false);
            setOpen(false);
            navigate("password");
        }
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            {" "}
            <Snackbar
                open={open}
                message="Please enter a valid email"
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={handleClose}
            />
            <Card
                elevation={5}
                sx={{
                    borderRadius: "12px",
                    minWidth: 275,
                    width: "100%",

                    p: { xs: 1, sm: "2rem" },
                    mt: 0,
                    pt: 0,
                    textAlign: "center",
                    backgroundColor: "background.default",
                }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        // variant="h3"
                        sx={{
                            color: "text.primary",
                            fontSize: 32,
                            mt: 0,
                            mb: 4,
                            // fontFamily: "Roboto",
                        }}
                    >
                        Create an account
                    </Typography>
                    {/* <Typography
                        gutterBottom
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                        }}
                    >
                        Lectus neque interdum mattis etiam morbi mauris ac.{" "}
                    </Typography>
                    <Typography variant="h5" component="div">
                        asasas
                    </Typography> */}
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="Email"
                        value={userData.email}
                        name="email"
                        onChange={handleChange}
                        error={error}
                    />

                    <Typography
                        gutterBottom
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                            mt: "1rem",
                        }}
                    >
                        By continuing, you agree to the{" "}
                        <NavLink>Self Service PSS</NavLink> and{" "}
                        <NavLink> Privacy Policy</NavLink>.
                    </Typography>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            borderRadius: "50px",
                            my: "1rem",
                            px: "2rem",
                        }}
                        onClick={GoNext}
                    >
                        Continue
                    </Button>

                    <Typography variant="body2">
                        Already have an account?{" "}
                        <NavLink to={"/auth/login"}>Login</NavLink>
                    </Typography>
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
                </CardContent>
                <CardActions
                    sx={{
                        flexDirection: "column",
                        gap: 2,
                        justifyContent: "center",
                        pb: "2rem",
                    }}
                >
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
                </CardActions>
            </Card>
        </>
    );
}

export default SignupForm;
