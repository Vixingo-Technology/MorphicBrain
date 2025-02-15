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
                    Supercharging Intelligence, Scaling Limitlessly with
                    <br />
                    <b>MorphicBrain's Proprietary DeepSeek Engine</b>
                </Typography>
                <Typography variant="h6" maxWidth={800} mx="auto">
                    Powered by MorphicBrain's proprietary DeepSeek Engine, our
                    AI platform redefines scalability - amplifying intelligence
                    and computing power to deliver unmatched capabilities for
                    businesses and AI driven applications worldwide.
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
                                "MorphicBrain is redefining the future of AI by making advanced artificial intelligence accessible, scalable, and adaptable to the needs of businesses, researchers, and innovators. Our mission is to democratize AI by removing the barriers of heavy infrastructure and technical complexity, allowing organizations of all sizes to harness its full potential. By seamlessly integrating intelligence with security, MorphicBrain ensures that cutting-edge AI is both powerful and responsible, setting a new standard for adaptive, real-world applications."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"What We Offer"}
                            description={
                                "MorphicBrain delivers unparalleled computing power and adaptive intelligence, creating a scalable AI ecosystem that seamlessly integrates into businesses, research institutions, and AI-driven applications. As a Super Brain for enterprises, MorphicBrain enhances decision-making, automates complex processes, and continuously evolves to meet the challenges of an ever-changing digital world. Whether optimizing business operations, conducting advanced research, or pioneering new AI-driven innovations, MorphicBrain provides an intelligent, self-improving infrastructure that transforms the way organizations harness AI—empowering them to think bigger, act faster, and scale effortlessly."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"Our Technology"}
                            description={
                                "Built on proprietary AI architectures, MorphicBrain fuses advanced neural networks, deep learning algorithms, and innovative machine intelligence techniques to create an adaptive, self-improving ecosystem. Unlike traditional AI models, our platform leverages MorphicBrain’s own DeepSeek-like Engine to exponentially scale intelligence and computing power, ensuring unmatched performance, accuracy, and scalability. Designed to be flexible and resource-efficient, MorphicBrain provides AI-driven solutions that grow with your needs while maintaining peak computational efficiency."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"Security & Ethics"}
                            description={
                                "Security is the foundation of MorphicBrain, safeguarded by a four-layer defense framework that integrates both internal protection and external resilience. Every component of our platform is designed to ensure data integrity, privacy, and real-time threat mitigation. Our AI-powered defense mechanisms continuously analyze potential risks, detecting and neutralizing cyber threats before they escalate. With the TT Hacker & Tracker Defender, MorphicBrain goes beyond standard security, actively shielding users from malicious tracking, phishing attempts, and unauthorized intrusions. Rooted in ethical AI principles, we uphold the highest industry standards for compliance, transparency, and responsible development—ensuring that intelligence is always aligned with integrity."
                            }
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}

export default Feature;
