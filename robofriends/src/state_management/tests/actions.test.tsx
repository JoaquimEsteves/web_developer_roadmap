import * as act from '../actions';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from '../types';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock'

export const mockStore = configureMockStore([thunkMiddleware]);


const apiCall = (link: RequestInfo) => {
    fetch(link).then(response => response.json())
}

it('should create an action to search robots', () => {
    const test = 'woooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: test
    }
    expect(act.setSearchField(test)).toEqual(expectedAction);
})

it('test requestRobots', async () => {
    const store = mockStore();
    const expectedActions = [
        { type: REQUEST_ROBOTS_PENDING },
        {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: { test: "yo" } 
        }
    ]
    fetchMock.getOnce(act.ROBOTS_LOCATION, { test: "yo" })

    // @ts-ignore
    await store.dispatch(act.setRequestRobots()).then(() => {
        // return of async actions
        const actions = store.getActions();
        console.log(actions);
        expect(actions).toEqual(expectedActions);
    });
})

