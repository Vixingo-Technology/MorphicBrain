import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TeamCard from "../cards/TeamCard";

export default function Team() {
    return (
        <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h4" gutterBottom>
                Meet the team
            </Typography>
            <Stack
                sx={{ gap: 2, mt: 2 }}
                direction="row"
                justifyContent="center"
            >
                <TeamCard
                    imgsrc="/img/tmp1.jpg"
                    name={"Daniel Nicolas"}
                    des={
                        "Founder – Conceptualizer – Solo Developer - AI Solutions Architect "
                    }
                    linkedinLink={
                        "https://www.linkedin.com/in/daniel-nicolas-morphic-brain/"
                    }
                />
                <TeamCard
                    imgsrc="/img/tmp2.jpg"
                    name={"Altaf Sayyed"}
                    des={
                        "Head of future Developers Coordination - Talented manager."
                    }
                />
                <TeamCard
                    imgsrc="/img/tmp3.jpg"
                    name={"Nazmul Khandoker"}
                    des={" Head Web Designer & Developer - The Beyond Man"}
                    linkedinLink={"www.linkedin.com/in/vixingo"}
                    XLink={"https://x.com/vixingo"}
                    facebookLink={"https://www.facebook.com/nazmulthekhandoker"}
                />
            </Stack>
        </Box>
    );
}
