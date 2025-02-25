import { Box, Grid2, IconButton, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../components/forms/ContactForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
    return (
        <>
            <Grid2
                container
                spacing={2}
                columns={12}
                sx={{ maxWidth: "1100px", marginX: "auto" }}
            >
                <Grid2 item size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{ my: 8, textAlign: { xs: "center", md: "left" } }}
                    >
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            Phone: 123-456-7890
                        </Typography>
                        <Typography variant="body2">
                            Email:{" "}
                            <a href="mailto:triktrak@gmail.com">
                                morphicbrain@gmail.com
                            </a>
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Social Media
                        </Typography>
                        <IconButton size="large">
                            <FacebookIcon fontSize="32px" />
                        </IconButton>
                        <IconButton size="large">
                            <XIcon fontSize="32px" />
                        </IconButton>
                        <IconButton size="large">
                            <LinkedInIcon fontSize="32px" />
                        </IconButton>
                    </Box>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 6 }}>
                    <ContactForm />
                </Grid2>
            </Grid2>
        </>
    );
}
