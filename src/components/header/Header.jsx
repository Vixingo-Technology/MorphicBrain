import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return children
        ? React.cloneElement(children, {
              elevation: trigger ? 4 : 0,
          })
        : null;
}

ElevationScroll.propTypes = {
    children: PropTypes.element,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const logo = prefersDarkMode ? "/img/logo.png" : "/img/lightlogo.png";

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    component="nav"
                    position="fixed"
                    sx={{
                        backdropFilter: "blur(24px)",
                        backgroundColor: "transparent",
                        backgroundImage: "none",

                        width: "100%",

                        // zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Toolbar
                        sx={{
                            backgroundImage: "none",
                            maxWidth: "1200px",
                            width: "100%",
                            margin: "0 auto",
                        }}
                    >
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { sm: "none" },
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flex: 1,
                                display: { xs: "none", sm: "flex" },
                                alignItems: "center",
                                textTransform: "uppercase",
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            <img
                                src={logo}
                                alt="logo"
                                width={50}
                                height={50}
                                style={{ marginRight: "10px" }}
                            />
                            <b>Morphic</b>Brain
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    sx={{
                                        textTransform: "Capitalize",
                                        color: (theme) =>
                                            theme.palette.text.secondary,
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
