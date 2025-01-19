import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Header() {
    let logo = "logo.png";
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background with 70% opacity
                padding:{ xs: "3px 0px", sm: "10px 20px" },
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
                marginBottom: { xs: "0px", sm: "20px" },
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo with Weather App Text */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px", // Add spacing between logo and text
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Weather App Logo"
                        sx={{
                            height: { xs: "30px", sm: "55px" }, // Adjust height based on screen size
                        }}
                    />
                    <Typography
                        variant="h6" // Adjust the variant for a smaller, single-line text
                        sx={{
                            color: "#fff", // White text
                            fontWeight: "bold",
                            fontSize: { xs: "0.9rem", sm: "1.5rem" }, // Responsive font size
                            whiteSpace: "nowrap", // Prevent text wrapping
                        }}
                    >
                      |  Weather App
                    </Typography>
                </Box>

                {/* Subtitle */}
                <Box>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "0.7rem", sm: "1rem" },
                            color: "#fff", // White text color
                        }}
                    >
                        Your reliable weather forecast
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
