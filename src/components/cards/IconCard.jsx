import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export default function IconCard({ title, description }) {
    const card = (
        <React.Fragment>
            <CardContent sx={{ textAlign: "justify" }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{ color: "text.secondary", mb: 1.5 }}
                ></Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <>
            <Box sx={{ minWidth: 275, mx: "auto", height: "100%" }}>
                <Card
                    variant="outlined"
                    sx={{ padding: 1, borderRadius: "20px", height: "100%" }}
                >
                    {card}
                </Card>
            </Box>
        </>
    );
}
