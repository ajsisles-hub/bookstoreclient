import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';



const Register = () => {

    return (
        <Box>
            <Paper>
                <Typography>
                    User Registration
                </Typography>
                <TextField
                    name='name'
                    id='name'
                    label='Enter name'
                    placeholder='Enter name'
                ></TextField>

                <TextField
                    name='email'
                    id='email'
                    label='Enter email address'
                    placeholder='Enter email address'
                ></TextField>

                <TextField
                    name='password'
                    id='password'
                    label='Enter password'
                    placeholder='Enter password'
                ></TextField>
                <Button
                    sx={{ marginTop: '2rem' }}
                    type='submit' variant='contained' color='primary'>Register</Button>


            </Paper>
        </Box>
    )
}

export default Register;