import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export default function DontMiss() {
    return (
        <Box sx={{ py: 15 }}>
            <Typography
                align="center"
                sx={{
                    mt: 4,
                    fontSize: {
                        xs: "50px",

                        lg: "70px",
                    },
                }}
            >
                Put a Tiger In Your Business!{" "}
            </Typography>
            <Typography
                variant="h6"
                align="center"
                sx={{
                    mt: 2,
                    mb: 5,
                    maxWidth: 800,
                    mx: "auto",
                    color: "text.secondary",
                }}
            >
                Don't miss out on the opportunity to grow your business with
                MorphicBrain. Register now and select our Trial Plan to
                experience the power of our AI SuperBrain. You can always update
                your plan later to suit your evolving needs.
            </Typography>

            <NavLink
                to="/auth/signup"
                style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    maxWidth: 400,
                    margin: "0 auto",
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    sx={{ fontSize: "24px" }}
                    fullWidth
                >
                    Get Started
                </Button>
            </NavLink>
        </Box>
    );
}
