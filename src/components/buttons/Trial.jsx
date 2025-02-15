import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export default function Trial() {
    return (
        <>
            <NavLink to={"/auth/signup"}>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "50px",
                        fontSize: "1.1rem",
                        px: "1.5rem",
                    }}
                >
                    {" "}
                    Exlpore Now
                </Button>
            </NavLink>
        </>
    );
}
