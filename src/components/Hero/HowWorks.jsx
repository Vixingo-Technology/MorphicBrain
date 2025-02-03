import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";

const steps = [
    {
        title: "Register",
        description: "Sign up for MorphicBrain",
    },
    {
        title: "Select a Plan",
        description: "Select a plan that suits your business",
    },
    {
        title: "MB Creates Child AI",
        description:
            "MorphicBrain creates a child AI for your business based on your business needs",
    },
    {
        title: "Log In to Dashboard",
        description: "Start using MorphicBrain to grow your business",
    },

    {
        title: "Grow Your Business",
        description: "Expand your business with additional modules as needed.",
    },
];
export default function HowWorks() {
    return (
        <div
            style={{
                maxWidth: "1140px",
                margin: "0 auto",
            }}
        >
            <Typography variant="h4" align="center" sx={{ mt: 5 }}>
                How MorphicBrain Works
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    mt: 5,
                }}
            >
                <Box>
                    <img src="/img/skull.png" width={"100%"} alt="" />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
                    <Stepper orientation="vertical" sx={{ mt: 5, mb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label.title}>
                                <StepLabel>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {label.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ maxWidth: "270px" }}
                                    >
                                        {label.description}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>
        </div>
    );
}
