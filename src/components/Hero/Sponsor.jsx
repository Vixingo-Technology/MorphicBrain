import {
    Box,
    Button,
    Card,
    Grid2,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import ControlPointDuplicateOutlinedIcon from "@mui/icons-material/ControlPointDuplicateOutlined";
export default function Sponsor() {
    return (
        <>
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <Typography variant="h4">Sponsor</Typography>
                <Typography
                    variant="h6"
                    sx={{ m: 0.5, color: "text.secondary" }}
                >
                    {/* You make this possible */}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "center",
                        maxWidth: 350,
                        margin: "auto",
                    }}
                >
                    The development of MorphicBrain is accelerated by our
                    generous sponsors.
                </Typography>
                <Box
                    sx={{
                        mt: 5,
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                    }}
                >
                    <Card
                        sx={{
                            borderRadius: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                            px: 0.6,
                            py: 2,
                            maxWidth: 500,

                            backgroundColor: "transparent",
                            border: (theme) =>
                                `1px solid ${theme.palette.divider}`,
                            "&:hover": {
                                dropShadow: (theme) =>
                                    `10px 10px 10px ${theme.palette.divider}`,
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Grid2
                            container
                            spacing={2}
                            alignItems="center"
                            // direction={"row"}
                            size={12}
                        >
                            <Grid2 item size={4}>
                                <img
                                    src="/img/Krezus.png"
                                    width={"100%"}
                                    alt=""
                                />
                            </Grid2>
                            <Grid2 item size={8}>
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Krezus (KRZ)
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ alignSelf: "center" }}
                                    >
                                        A dual-purpose cryptocurrency designed
                                        for both speculative trading (Krz-M) and
                                        humanitarian aid (Krz-V)
                                    </Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                            px: 0.6,
                            py: 2,
                            maxWidth: 500,

                            backgroundColor: "transparent",
                            border: (theme) =>
                                `1px solid ${theme.palette.divider}`,
                            "&:hover": {
                                dropShadow: (theme) =>
                                    `10px 10px 10px ${theme.palette.divider}`,
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Grid2
                            container
                            spacing={2}
                            alignItems="center"
                            // direction={"row"}
                            size={12}
                        >
                            <Grid2 item size={4}>
                                <IconButton size="large">
                                    <ControlPointDuplicateOutlinedIcon
                                        style={{ fontSize: "70px" }}
                                    />
                                </IconButton>
                            </Grid2>
                            <Grid2 item size={8}>
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Become our sponsor!
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ alignSelf: "center" }}
                                    >
                                        To join us, contact us at
                                        sales@morphicbrain.com for pre-approval.
                                    </Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Card>
                </Box>
            </Box>
        </>
    );
}
