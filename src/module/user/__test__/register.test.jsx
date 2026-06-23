import React from 'react';
import renderWithRedux from '../../../util/testUtil';
import Register from '../Register';
import { screen, getByPlaceholderText, getByText, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Register form', () => {

    it('Should verify field name, email and password', () => {
        renderWithRedux(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
            {}
        );



        expect(screen.getByLabelText("Enter name")).toBeInTheDocument();
        expect(screen.getByLabelText("Enter email address")).toBeInTheDocument();
        expect(screen.getByLabelText("Enter password")).toBeInTheDocument();
        expect(screen.getByText("Register")).toBeInTheDocument();

    });


    it('should show required error message when register is clicked', async () => {

        renderWithRedux(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
            {}
        );


        const registerBtn = screen.getByRole('button', { name: /Register/i });

        // 3. Use userEvent instead of fireEvent to click the button
        await userEvent.click(registerBtn);


  
        expect(await screen.findByText('Name is required')).toBeInTheDocument();
        expect(await screen.findByText('Email is required')).toBeInTheDocument();
        expect(await screen.findByText('Password is required')).toBeInTheDocument();


        expect(await screen.getByText("Register")).toBeInTheDocument();


    });

});