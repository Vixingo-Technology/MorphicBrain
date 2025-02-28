import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
export default function TeamCard({
    imgsrc,
    name,
    des,
    facebookLink,
    XLink,
    linkedinLink,
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={imgsrc}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {des}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <a href={linkedinLink} target="_blank">
                    <IconButton size="large">
                        <LinkedInIcon fontSize="32px" />
                    </IconButton>
                </a>
                <a href={XLink} target="_blank">
                    <IconButton size="large">
                        <XIcon fontSize="32px" />
                    </IconButton>
                </a>
                <a href={facebookLink} target="_blank">
                    <IconButton size="large">
                        <FacebookIcon fontSize="32px" />
                    </IconButton>
                </a>
            </CardActions>
        </Card>
    );
}
