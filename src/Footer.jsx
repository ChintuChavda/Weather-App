import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '13vh', // Ensures the container takes up at least the full viewport height
                minHeight: { xs: '10vh', md: '15vh' },
            }}
        >
            {/* Main content goes here */}
            <Box sx={{ flexGrow: 1 }}>
                {/* Your main content */}
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                    color: 'white',
                    padding: '10px 20px',
                    textAlign: 'center',
                    boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
                }}
            >
                <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                    Developed by Deep Kardeni
                </Typography>
            </Box>
        </Box>
    );
}
