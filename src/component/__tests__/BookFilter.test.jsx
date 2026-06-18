import React from 'react';
import BookFilter from '../book/BookFilter';
import renderWithRedux from '../../util/testUtil';
import { getBooksByTitle } from '../../module/book/bookAction';
import userEvent from '@testing-library/user-event';
import { screen, act, getByLabelText, getByText, fireEvent } from '@testing-library/react';
import * as bookActions from '../../module/book/bookAction';



jest.mock('../../module/book/bookAction');

describe('BookFilter Component', () => {

    // Test Case 1: Testing the Simulation/State change
    it('should update the input field value when a user types', () => {
        renderWithRedux(<BookFilter />, {});

        const inputElement = screen.getByTestId('book-title-input').querySelector('input');

        // Simulate typing
        userEvent.type(inputElement, 'Harry Potter');

        // Assert that the input successfully holds the value
        expect(inputElement.value).toBe('Harry Potter');
    });


    // This implementation should not have jest.mock for this to run
    // // Test Case 2: Fixing your existing click event dispatch test
    // it('should fire getBooksByTitle action on click of search button', () => {
    //     const { getByLabelText, getByText } = renderWithRedux(<BookFilter />, {});
    //     const getBooksByTitleSpy = jest.spyOn(bookActions, 'getBooksByTitle')
    //     const textField = getByLabelText('Search book title');
    //     fireEvent.change(textField, { target: { value: 'The Firm' } });

    //     const searchButton = getByText('Search Book');
    //     fireEvent.click(searchButton);

    //     // expect(getBooksByTitle).toHaveBeenCalledWith('The Firm');
    //     expect(getBooksByTitleSpy).toHaveBeenCalledWith('The Firm');

    //     // 5. Clean up the spy so it doesn't affect other tests
    //     getBooksByTitleSpy.mockRestore();
    // });


    it('part 2: should fire getBookByTitle', () => {
        const { getByLabelText, getByText } = renderWithRedux(<BookFilter />, {});
        getBooksByTitle.mockImplementation(() => (dispatch) => { });

        const textField = getByLabelText('Search book title');
        fireEvent.change(textField, { target: { value: 'The Firm' } });

        const searchButton = getByText('Search Book');
        fireEvent.click(searchButton);

        // expect(getBooksByTitle).toHaveBeenCalledWith('The Firm');
        expect(getBooksByTitle).toHaveBeenCalledWith('The Firm');

    })
});