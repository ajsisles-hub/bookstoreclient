import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import axios from 'axios';
import { getBooksAction, getBooksByTitle } from '../book/bookAction';
// 1. IMPORT YOUR SERVICE DIRECTLY
import { getBookByTitleService } from '../book/bookService';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Book Actions', () => {
    const mockBookData = [{
        id: 1,
        title: 'Mock Book',
        description: 'Mock description',
        releaseYear: 2020
    }];

    beforeEach(() => {
        // Clear mock histories between tests so they don't leak into each other
        jest.clearAllMocks();

        axios.get.mockImplementation(() => Promise.resolve({
            data: mockBookData
        }));
    });

    it('dispatches BOOKLIST action with fetched books on success', async () => {
        const store = mockStore({});

        await store.dispatch(getBooksAction());
        const actions = store.getActions();

        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual({
            type: 'BOOKLIST',
            payload: mockBookData
        });
    });

    it('handles errors when fetching books fails', async () => {
        const mockError = new Error('Network Error');
        axios.get.mockRejectedValue(mockError);

        const store = mockStore({ books: [] });
        await store.dispatch(getBooksAction());

        expect(store.getActions()).toEqual([
            { type: "BOOKLISTPENDING" },
            { type: "BOOKLISTERROR" }
        ]);
    });

    it('should able to dispatch book by title action', async () => {
        // 2. SPY ON THE SERVICE TO CONTROL ITS OUTPUT BYPASSING AXIOS COMPLETELY
        jest.spyOn(getBookByTitleService, 'getBooks').mockResolvedValue({
            data: mockBookData
        });

        const store = mockStore({});
        await store.dispatch(getBooksByTitle('test title'));

        const actions = store.getActions();

        // 3. THIS WILL NOW SUCCESSFULLY BE 3 ACTIONS!
        expect(actions.length).toEqual(3);

        expect(actions[0].type).toEqual("BOOKLISTPENDING");
        expect(actions[1]).toEqual({
            type: 'BOOKSBYTITLE',
            payload: [{
                id: 1,
                title: 'Mock Book',
                description: 'Mock description',
                releaseYear: 2020
            }]
        });
        expect(actions[2].type).toEqual("BOOKLISTFULFILLED");
    });


    it('should able to dispatch error action', async () => {

        const store = mockStore({});
        axios.get.mockImplementation(() => {
            throw new Error();
        });


        await store.dispatch(getBooksByTitle('the testse'));

        const actions = store.getActions();
        
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual({
            type: 'BOOKLISTERROR',
        })


    })


});