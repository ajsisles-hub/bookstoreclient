import React from 'react';
import { Card, CardContent, Typography, TextField, FormGroup, FormControlLabel, Checkbox, Divider, Box } from '@mui/material';

const BookFilter = () => {
    return (
        // The Sidebar Container Box fixes the layout width and provides uniform alignment
        <Box sx={{ width: 260, display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            {/* Sidebar Container Header */}
            <Box sx={{ px: 1 }}>
                <Typography variant="h6" fontWeight="600" color="text.primary">
                    Filters
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Narrow down your bookstore search
                </Typography>
            </Box>

            {/* The Main Filter Card Container */}
            <Card variant="outlined" sx={{ borderRadius: 3, bgcolor: 'background.paper', boxShadow: 'none' }}>
                <CardContent sx={{ p: 3 }}>
                    
                    {/* Search Input Section */}
                    <Typography variant="subtitle2" fontWeight="600" color="text.secondary" mb={1}>
                        Keywords
                    </Typography>
                    <TextField 
                        size="small" 
                        placeholder="Search title or author..." 
                        fullWidth 
                        sx={{ mb: 3 }}
                    />
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    {/* Categories Section */}
                    <Typography variant="subtitle2" fontWeight="600" color="text.secondary" mb={1}>
                        Categories
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Fiction" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Sci-Fi & Fantasy" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Biography" />
                        <FormControlLabel control={<Checkbox size="small" />} label="Technology" />
                    </FormGroup>

                </CardContent>
            </Card>
        </Box>
    );
};

export default BookFilter;