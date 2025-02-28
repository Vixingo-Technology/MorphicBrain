import React from "react";
import { Outlet } from "react-router";

import MiniLogo from "../components/dynamic/MiniLogo";

export default function BlogLayout() {
    return (
        <>
            {/* <BlogHead /> */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem",
                }}
            >
                <MiniLogo />
            </div>
            <Outlet />
        </>
    );
}
