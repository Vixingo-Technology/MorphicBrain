import * as React from "react";
import { Outlet } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { AppProvider } from "@toolpad/core/AppProvider";
import DashHeader from "../components/header/DashHeader";
import { Box } from "@mui/material";

export default function DashLayout() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <DashHeader open={open} setOpen={setOpen} />
            <Box
                sx={{
                    pt: "64px",
                    maxWidth: open ? 800 : 1140,
                    margin: "0 auto",
                    pl: { xs: "60px", sm: "70px", xl: 0 },
                    transition: "max-width 0.5s",
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}

{
    /* // <DashboardLayout>
        //     <PageContainer>
        //         <Outlet />
        //     </PageContainer>
        // </DashboardLayout> */
}
