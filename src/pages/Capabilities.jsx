import React from "react";
import OldCap from "../components/Hero/OldCap";
import { Box, Typography } from "@mui/material";

function Capabilities() {
    return (
        <>
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <Typography
                    variant="h4"
                    sx={{ mb: 2, maxWidth: 500, margin: "auto" }}
                >
                    Over 100+ Modules are available in the MorphicBrain Platform
                    to customize your AI model.
                </Typography>
            </Box>
            <OldCap />
        </>
    );
}

export default Capabilities;
