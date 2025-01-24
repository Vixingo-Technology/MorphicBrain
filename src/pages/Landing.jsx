import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

function Landing() {
    return (
        <div>
            <Box
                sx={{
                    backgroundColor: "blue",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    px: "1.5rem",
                }}
            >
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid
                        item
                        size={{ xs: 2, sm: 4, md: 6 }}
                        sx={{ backgroundColor: "red" }}
                    >
                        hELLO
                    </Grid>
                    <Grid
                        item
                        size={{ xs: 2, sm: 4, md: 6 }}
                        sx={{ backgroundColor: "green" }}
                    >
                        hELLO
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Landing;
