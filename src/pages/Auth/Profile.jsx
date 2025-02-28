import Grid from "@mui/material/Grid2";

import React from "react";
import Logo from "../../components/dynamic/Logo";
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import SignupForm from "../../components/forms/SignupForm";

import ProfileForm from "../../components/forms/ProfileForm";
export default function Profile() {
    return (
        <div>
            <Grid
                container
                spacing={2}
                columns={{ xs: 1, sm: 8, md: 12 }}
                sx={{ alignItems: "center" }}
            >
                <Grid
                    item
                    size={{ xs: 2, sm: 4, md: 5 }}
                    sx={{
                        background: (theme) =>
                            `linear-gradient(90deg,${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                        height: { xs: "100%", sm: "100vh" },
                        display: "flex",
                        flexDirection: "column",
                        pt: "2rem",
                        alignItems: "center",
                    }}
                >
                    <Logo />
                    <Box
                        sx={{
                            maxWidth: "600px",
                            textAlign: "center",
                            p: "1rem",
                            position: "relative",
                            textAlign: "center",
                            flex: 2,
                            pb: "4rem",
                        }}
                    >
                        <Box sx={{ my: "1rem" }}>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                Let's set you up for success
                            </Typography>
                            <br />
                            <Typography variant="h6">
                                {/* No credit card required. */}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "flex", sm: "none" },
                                // bgcolor: "red",
                                maxWidth: "500px",
                                margin: "0 auto",
                                justifyContent: "center",
                                flexGrow: 1,
                                mb: "2rem",
                            }}
                        >
                            <ProfileForm />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "gray",
                                mt: "4rem",
                                position: "absolute",
                                bottom: 10,
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            © 2025 MorpicBrain INC. All Rights Reserved.
                        </Typography>{" "}
                    </Box>
                </Grid>
                <Grid
                    item
                    size={{ xs: 2, sm: 4, md: 6 }}
                    sx={{
                        // bgcolor: "red",
                        maxWidth: "600px",
                        margin: "0 auto",
                        justifyContent: "center",
                        flexGrow: 1,
                        display: { xs: "none", sm: "flex" },
                        p: "1rem",
                    }}
                >
                    <ProfileForm />
                </Grid>
            </Grid>
        </div>
    );
}
