import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Paper, TextField, Button,
    IconButton, InputAdornment
} from '@mui/material';
import * as yup from 'yup';
import { useFormik, Formik, Form, Field } from 'formik';
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
        error={touched[field.name] && Boolean(errors[field.name])}
        helperText={touched[field.name] && errors[field.name]}
    />
);


const Register = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const registerPromise = useSelector(getRegisterPromise);
    const [showPassword, setShowPassword] = useState(false);
    const { isErrorOccured, isSuccess, data } = registerPromise; // Destructure your state

    useEffect(() => {
        if (isErrorOccured) {
            enqueueSnackbar('Name, Email and password invalid', {
                variant: 'error'
            })

        }
        if (isSuccess) {
            enqueueSnackbar(' Registration Success', {
                variant: 'success'
            });

            const userUuid = data?.uuid;

        }
    }, [isErrorOccured, isSuccess, data, enqueueSnackbar,]);



    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={yup.object({
                name: yup.string().required('Name is required'),
                email: yup.string().email('Enter a valid email').required('Email is required'),
                password: yup.string().min(8, 'Minimum 8 characters').required('Password is required')
            })}
            onSubmit={(user) => dispatch(registerAction(user))}
        >
            <Form autoComplete='off' noValidate >
                <Box>
                    <Paper>
                        <Typography>
                            User Registration
                        </Typography>

                        <Field
                            name='name'
                            id='name'
                            label='Enter name'
                            component={FormikTextField}
                        ></Field>

                        <Field
                            name='email'
                            id='email'
                            label='Enter email address'
                            component={FormikTextField}
                        ></Field>

                        <Field
                            name="password"
                            label="Enter password"
                            type={showPassword ? 'text' : 'password'}
                            component={FormikTextField}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <Button
                            sx={{ marginTop: '2rem' }}
                            type='submit' variant='contained' color='primary'>Register</Button>
                    </Paper>
                </Box>
            </Form>
        </Formik>
    )
}

export default Register;