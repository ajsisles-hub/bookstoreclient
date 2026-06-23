import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Paper, TextField, Button,
    IconButton, InputAdornment, Container
} from '@mui/material';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from './userAction';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getRegisterPromise } from './userSelector';

const FormikTextField = ({ field, form: { touched, errors }, ...props }) => (
    <TextField
        {...field}
        {...props}
        fullWidth
        margin="normal"
        variant="outlined" // Gives fields a more distinct border
        error={touched[field.name] && Boolean(errors[field.name])}
        helperText={touched[field.name] && errors[field.name]}
        slotProps={{
            inputLabel: { shrink: true } // Keeps the layout clean when typed in
        }}
    />
);

const Register = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { isSuccess, isErrorOccured, errorMessage } = useSelector(getRegisterPromise) || {};
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar('Registration Success!', { variant: 'success' });
        }
        if (isErrorOccured && errorMessage) {
            enqueueSnackbar(errorMessage, { variant: 'error' });
        }
    }, [isSuccess, isErrorOccured, errorMessage, enqueueSnackbar]);

    const handleFormSubmit = (values, { setErrors }) => {
        dispatch(registerAction(values, setErrors));
    };

    return (
        <Container maxWidth="sm">
            {/* Center the form nicely on the screen vertically and horizontally */}
            <Box sx={{ 
                marginTop: { xs: 4, sm: 8 }, 
                marginBottom: 4,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={yup.object({
                        name: yup.string().required('Name is required'),
                        email: yup.string().email('Enter a valid email').required('Email is required'),
                        password: yup.string().min(8, 'Minimum 8 characters').required('Password is required')
                    })}
                    onSubmit={handleFormSubmit}
                >
                    <Form autoComplete='off' noValidate style={{ width: '100%' }}>
                        <Paper 
                            elevation={3} // Gives it a modern soft drop shadow
                            sx={{ 
                                padding: { xs: '2rem 1.5rem', sm: '3rem' }, 
                                borderRadius: 3, // Softer corners
                                border: '1px solid rgba(0, 0, 0, 0.08)' // Subtle framing line
                            }}
                        >
                            <Typography 
                                variant="h4" 
                                component="h1" 
                                align="center" 
                                fontWeight="600"
                                gutterBottom
                                sx={{ color: 'text.primary', marginBottom: '2rem' }}
                            >
                                Create Account
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Field
                                    name='name'
                                    id='name'
                                    label='Full Name'
                                    placeholder='John '
                                    component={FormikTextField}
                                />

                                <Field
                                    name='email'
                                    id='email'
                                    label='Email Address'
                                    placeholder='john@example.com'
                                    component={FormikTextField}
                                />

                                <Field
                                    name="password"
                                    label="Password"
                                    placeholder='Minimum 8 characters'
                                    type={showPassword ? 'text' : 'password'}
                                    component={FormikTextField}
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton 
                                                        onClick={() => setShowPassword(!showPassword)} 
                                                        edge="end"
                                                        aria-label="toggle password visibility"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                            </Box>

                            <Button
                                type='submit' 
                                variant='contained' 
                                color='primary'
                                fullWidth
                                size="large" // Makes the primary action button more prominent
                                sx={{ 
                                    marginTop: '2.5rem', 
                                    paddingY: '0.8rem',
                                    borderRadius: 2, // Matches overall card roundness
                                    textTransform: 'none', // Prevents loud all-caps formatting
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
                                    }
                                }}
                            >
                                Register
                            </Button>
                        </Paper>
                    </Form>
                </Formik>
            </Box>
        </Container>
    );
};

export default Register;