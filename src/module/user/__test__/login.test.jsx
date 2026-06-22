import React from 'react';
import renderWithRedux from '../../../util/testUtil';
import Login from '../Login';
import { fireEvent, screen, getByPlaceholderText } from '@testing-library/react'; // Importing screen is best practice
import { MemoryRouter } from 'react-router-dom';
import App from '../../../component/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const MockBookContainer = () => <div data-testid="book-container">Book Container Loaded</div>;

describe('Login test', () => {


    it('should show required error message for email and password', async () => {
        // const { findByText } = renderWithRedux(<Login />, {});

        renderWithRedux(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            {}
        );

        const submitBtn = await screen.findByRole('button', { name: /login/i });
        fireEvent.click(submitBtn);

        expect(await screen.findByText('Email is required')).toBeInTheDocument();
        expect(await screen.findByText('Password is required')).toBeInTheDocument();

    }
    )

    it('should return Email and Password invalid', async () => {

        renderWithRedux(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            {}
        );

        //get field of email and password
        const emailField = screen.getByPlaceholderText('Enter email');
        const passwordField = screen.getByPlaceholderText('Enter password');


        // enter dummy data
        fireEvent.change(emailField, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordField, { target: { value: 'password123' } });


        // trigger submit btn
        const submitBtn = await screen.findByRole('button', { name: /login/i });
        fireEvent.click(submitBtn);

        //assert
        expect(await screen.findByText('Email and password invalid')).toBeInTheDocument();

    });

    it('should trigger password length 8', async () => {

        renderWithRedux(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            {}
        );

        //get field of email and password
        const emailField = screen.getByPlaceholderText('Enter email');
        const passwordField = screen.getByPlaceholderText('Enter password');


        // enter dummy data
        fireEvent.change(emailField, { target: { value: 'janine@example.com' } });
        fireEvent.change(passwordField, { target: { value: 'passwod' } });


        // trigger submit btn
        const submitBtn = await screen.findByRole('button', { name: /login/i });
        fireEvent.click(submitBtn);

        //assert
        expect(await screen.findByText('Password should be a minimum of 8 char length')).toBeInTheDocument();

    });



});