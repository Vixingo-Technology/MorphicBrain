import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Trial from "../buttons/Trial";

function LandingHero() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const brain = prefersDarkMode ? "/img/brain-dark.svg" : "/img/brain.svg";

    return (
        <div>
            <Box
                sx={{
                    backgroundColor: "",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    px: "1.5rem",
                    py: "1.5rem",

                    textAlign: { xs: "center", sm: "left" },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                    sx={{ alignItems: "center" }}
                >
                    <Grid
                        item
                        size={{ xs: 2, sm: 4, md: 7 }}
                        sx={{ backgroundColor: "", my: "4rem" }}
                    >
                        <Typography variant="h1">
                            AI Super Brain for Business{" "}
                        </Typography>
                        {/* <Typography variant="body1" sx={{ my: "1rem" }}>
                            {" "}
                            Empowering Minds: MorphicBrain integrates DeepSeek,
                            championing adaptability and scalability without the
                            weight of heavy infrastructure.{" "}
                        </Typography> */}
                        <Typography variant="h5" sx={{ my: "1rem" }}>
                            The Smartest Investment for SMEs
                        </Typography>
                        <Trial />
                    </Grid>
                    <Grid
                        item
                        size={{ xs: 2, sm: 4, md: 5 }}
                        sx={{ backgroundColor: "" }}
                    >
                        <img src={brain} alt="brain" width={"100%"} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default LandingHero;
