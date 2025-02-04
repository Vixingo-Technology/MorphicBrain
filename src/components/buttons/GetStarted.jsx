import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export default function GetStarted() {
    return (
        <NavLink to={"/auth/signup"}>
            <Button
                variant="contained"
                size="large"
                sx={{
                    // position: "fixed",
                    bottom: 10,

                    borderRadius: "10px",
                    my: 2,
                    mx: 2,
                }}
            >
                Get Started
            </Button>
        </NavLink>
    );
}
