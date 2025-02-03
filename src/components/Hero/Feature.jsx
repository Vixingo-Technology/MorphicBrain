import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import IconCard from "../cards/IconCard";

function Feature() {
    return (
        <>
            <Box
                textAlign={"center"}
                sx={{ maxWidth: "1140px", mx: "auto" }}
                pt={10}
            >
                <Typography
                    variant="h4"
                    // fontFamily={"inter"}
                    textAlign="center"
                    fontWeight={500}
                    mb={4}
                >
                    Empowering Minds:
                    <br />
                    MorphicBrain integrates DeepSeek
                </Typography>
                <Typography variant="h6" maxWidth={800} mx="auto">
                    championing adaptability and scalability without the weight
                    of heavy infrastructure. MorphicBrain is the most
                    affordable, scalable, and adaptable AI solution for small
                    and medium enterprises.
                </Typography>

                <Grid2
                    container
                    spacing={2}
                    sx={{ my: 8 }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                >
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"Our Vision"}
                            description={
                                "MorphicBrain is pioneering the future of AI solutions, making advanced artificial intelligence accessible and practical for businesses and researchers. We believe in democratizing AI technology while maintaining the highest standards of innovation and security."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"What We Offer"}
                            description={
                                "Our platform provides scalable AI solutions that adapt to your specific needs. Whether you're a startup looking to innovate or a researcher pushing the boundaries of what's possible, MorphicBrain offers the tools and capabilities you need to succeed."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"Our Technology"}
                            description={
                                "Built on cutting-edge AI architectures, MorphicBrain combines advanced neural networks, machine learning algorithms, and innovative approaches to create a powerful, flexible, and intelligent system that grows with your needs."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"Security & Ethics"}
                            description={
                                "We maintain the highest standards of security and ethical AI development. Our platform is designed with robust security measures and adherence to ethical AI principles, ensuring responsible and reliable AI solutions."
                            }
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}

export default Feature;
