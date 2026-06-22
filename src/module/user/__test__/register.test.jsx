import React from 'react';
import renderWithRedux from '../../../util/testUtil';
import Register from '../Register';
import { screen, getByPlaceholderText, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Register form', () => {

    it('Should verify field name, email and password', () => {
         renderWithRedux(
            <MemoryRouter>
                <Register />
            </MemoryRouter>,
            {}
        );



       expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
       expect(screen.getByPlaceholderText("Enter email address")).toBeInTheDocument();
       expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
       expect(screen.getByText("Register")).toBeInTheDocument();
        // 
    })

});