import { Box, Typography } from "@mui/material";
import React from "react";

function Feature() {
    return (
        <>
            <Box textAlign={"center"} py={10}>
                <Typography
                    variant="h4"
                    // fontFamily={"inter"}
                    textAlign="center"
                    fontWeight={500}
                    mb={4}
                >
                    Affordable, Scalable, Adaptable <br /> MorphicBrain for SMEs
                </Typography>
                <Typography variant="h6">
                    MorphicBrain is the most affordable, scalable, and adaptable
                    AI solution for small and medium enterprises.
                </Typography>
            </Box>
        </>
    );
}

export default Feature;
