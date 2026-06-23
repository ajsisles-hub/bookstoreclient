import React, { useEffect } from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../module/user/userAction';
import { useSnackbar } from 'notistack'
import { getUserPromise } from './userSelector'
import { useNavigate } from 'react-router-dom';




const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be a minimum of 8 char length')
        .required('Password is required')
});

const Login = () => {
    const dispatch = useDispatch();
    const loginPromise = useSelector(getUserPromise);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginPromise.isErrorOccured) {
            enqueueSnackbar('Email and password invalid', {
                variant: 'error'
            })

        } else if (loginPromise.isSuccess) {
            enqueueSnackbar('Login Success', {
                variant: 'success'
            });
            navigate('/book-list');
        }
    }, [loginPromise, enqueueSnackbar, navigate]);


    const formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.email, values.password));
        }
    });

    return (
        <form autoComplete='off' noValidate onSubmit={formik.handleSubmit}>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
                <Paper sx={{
                    display: 'flex', flexDirection: 'column',
                    padding: '24px', width: '100%', maxWidth: '400px'
                }}>
                    <Typography variant='h4' align='center' gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        sx={{ marginTop: '1.5rem' }}
                        name='email'
                        id='email'
                        inputProps={{ 'data-testid': 'email-testid' }}
                        label='Enter email address'
                        variant='outlined'
                        placeholder='Enter email'
                        values={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <TextField
                        sx={{ marginTop: '1.5rem' }}
                        name='password'
                        id='password'
                        type='password'
                        data-typeid='password-testid'
                        label='Enter password'
                        variant='outlined'
                        placeholder='Enter password'
                        values={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <Button
                        sx={{ marginTop: '2rem' }}
                        type='submit' variant='contained' color='primary'>Login</Button>
                </Paper>


            </Box>
        </form>
    );
}

export default Login;