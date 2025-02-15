import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Typography from "@mui/material/Typography";

export default function PriceCard({
    title,
    description,
    des2,
    price,
    btnText,
    features,
}) {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Box
                    sx={{
                        minHeight: "100px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                    }}
                >
                    <Typography
                        sx={{
                            color: "text.secondary",
                            mb: 1.5,
                        }}
                    ></Typography>
                    <Typography
                        variant="h4"
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                        {price ? <Typography>$</Typography> : ""}
                        {price}
                        {price ? <Typography> /month</Typography> : ""}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {des2}
                    </Typography>
                </Box>

                <br />

                <hr
                    style={{
                        color: "text.secondary",
                    }}
                />

                <Button
                    fullWidth
                    variant="outlined"
                    sx={{ borderRadius: "10px", my: 2 }}
                >
                    {btnText}
                </Button>

                <hr
                    style={{
                        color: "text.secondary",
                    }}
                />

                <Box>
                    {features.map((feature) => (
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 1.5,
                                color: "text.secondary",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <CheckRoundedIcon sx={{ fontSize: "16px" }} />{" "}
                            {feature}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
        </React.Fragment>
    );
    console.log(features);

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    mx: "auto",
                }}
            >
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
