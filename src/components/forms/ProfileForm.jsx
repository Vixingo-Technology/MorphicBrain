import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    Grow,
    TextField,
    Typography,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router";
function ProfileForm() {
    const [accoutnType, setAccountType] = React.useState("");
    return (
        <div>
            {" "}
            <Box>
                <Typography variant="h4" sx={{ my: 1 }}>
                    Account Type
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Are you creating this account for yourself or on behalf of a
                    company?
                </Typography>
                <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                    size="large"
                >
                    <Button
                        startIcon={<BusinessIcon />}
                        onClick={() => setAccountType("company")}
                        sx={{
                            backgroundColor:
                                accoutnType === "company"
                                    ? "#f0f0f030"
                                    : "transparent",
                        }}
                    >
                        Company
                    </Button>

                    <Button
                        onClick={() => setAccountType("personal")}
                        sx={{
                            backgroundColor:
                                accoutnType === "personal"
                                    ? "#f0f0f030"
                                    : "transparent",
                        }}
                    >
                        Personal
                    </Button>
                </ButtonGroup>

                {accoutnType === "company" ? (
                    <Grow
                        in={accoutnType === "company"}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(accoutnType === "company"
                            ? { timeout: 1000 }
                            : {})}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ my: 2 }}
                            ></Typography>
                            <TextField
                                variant="standard"
                                label="Company Name *"
                                focused
                                sx={{ my: 1, width: "60%" }}
                            />

                            <Typography variant="body1" sx={{ my: 1 }}>
                                Company Size
                            </Typography>
                            <ButtonGroup
                                variant="outlined"
                                aria-label="Basic button group"
                                size="large"
                            >
                                <Button>1-49</Button>
                                <Button>50-200</Button>
                                <Button>201-999</Button>
                                <Button>1000+</Button>
                            </ButtonGroup>
                        </Box>
                    </Grow>
                ) : (
                    <></>
                )}
                <Box sx={{ my: 6 }}>
                    <FormControlLabel
                        value="I need advanced settings"
                        control={<Checkbox />}
                        label="I need advanced settings"
                        labelPlacement="end"
                    />
                    <Typography variant="body1" sx={{ px: 4 }}>
                        We’ve assigned your data region to the United States and
                        given you a tenant Child AI . Check this box if you need
                        to process your data in a different region to comply
                        with privacy laws.
                    </Typography>
                </Box>
                <NavLink to={"/dashboard"}>
                    <Button variant="contained" size="large" sx={{ px: 16 }}>
                        Next
                    </Button>
                </NavLink>
                <Typography variant="body2" sx={{ my: 2 }}>
                    By submitting, I agree to MorphicBrain's{" "}
                    <NavLink>Privacy Policy</NavLink>{" "}
                </Typography>
            </Box>
        </div>
    );
}

export default ProfileForm;
