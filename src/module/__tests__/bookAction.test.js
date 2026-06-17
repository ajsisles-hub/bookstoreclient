import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk'; // middleware for handling async actions
import axios from 'axios'; // we will mock this
import { getBooksAction } from '../book/bookAction'; // the action we want to test


jest.mock('axios'); // Mock axios to control its behavior in tests

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Book Actions', () => {
    it('dispatches BOOKLIST action with fetched books on success', async () => {
        const store = mockStore({}); // Initial state


        const mockBookData = [{
            id: 1,
            title: 'Mock Book',
            description: 'Mock description',
            releaseYear: 2020
        }]; // Mock axios response


        axios.get.mockImplementation(() => Promise.resolve({
            data: mockBookData
        })); // Mock axios response

        await store.dispatch(getBooksAction()); // Dispatch the action
        const actions = store.getActions(); // Get the dispatched actions


        expect(actions.length).toEqual(3); //  Check the length of the ACTIONS ARRAY, not the action object

        expect(actions[1]).toEqual({
            type: 'BOOKLIST',
            payload: mockBookData
        });


    });

    it('handles errors when fetching books fails', async () => {
        const mockError = new Error('Network Error');
        axios.get.mockRejectedValue(mockError); // Mock axios to reject

        const store = mockStore({ books: [] }); // Initial state
        await store.dispatch(getBooksAction()); // Dispatch the action

        // expect(store.getActions()).toEqual([]); // No actions should be dispatched on error
        expect(store.getActions()).toEqual([
            { type: "BOOKLISTPENDING" },
            { type: "BOOKLISTERROR" }
        ]);

    });
});




