import { Box, Typography } from "@mui/material";
import React from "react";
import PriceCard from "../cards/PriceCard";

export default function PricingPlan() {
    return (
        <>
            <div>
                <Typography variant="h4" align="center" sx={{ mt: 5, mb: 5 }}>
                    Our Pricing Plan
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                        flexWrap: { xs: "wrap", md: "nowrap" },
                    }}
                >
                    <PriceCard
                        title={"Free"}
                        description={"No credit card needed to sign up."}
                        btnText={"Start Building for free"}
                        features={[
                            "Standard Adaptive AI Module",
                            "Limited to 10 users",
                            "Standard Data Storage",
                            "Standard Data Processing",
                        ]}
                    />
                    <PriceCard
                        title={"Essentials"}
                        description={
                            "For projects with higher production demands."
                        }
                        price={"49"}
                        btnText={"Get Started"}
                        features={[
                            "Standard Adaptive AI Module",
                            "Limited to 10 users",
                            "Standard Data Storage",
                            "Standard Data Processing",
                        ]}
                    />
                    <PriceCard
                        title={"Professional"}
                        description={
                            "Best for teams and projects that need added security."
                        }
                        price={"249"}
                        btnText={"Get Started"}
                        features={[
                            "Standard Adaptive AI Module",
                            "Limited to 10 users",
                            "Standard Data Storage",
                            "Standard Data Processing",
                            "Enhanced Computer Vision",
                        ]}
                    />
                    <PriceCard
                        title={"Enterprise"}
                        description={
                            "For enterprises that need to scale. Top-tier SLAs, advanced security, white-glove support and more."
                        }
                        btnText={"Contact Sales"}
                        features={[
                            "Standard Adaptive AI Module",
                            "Limited to 10 users",
                            "Standard Data Storage",
                            "Standard Data Processing",
                        ]}
                    />
                </Box>
            </div>
        </>
    );
}
