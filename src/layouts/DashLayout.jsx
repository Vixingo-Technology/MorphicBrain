import * as React from "react";
import { Outlet } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { AppProvider } from "@toolpad/core/AppProvider";

export default function DashLayout() {
    return (
        <>
            <h1>Layout dash</h1>
            <Outlet />
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
