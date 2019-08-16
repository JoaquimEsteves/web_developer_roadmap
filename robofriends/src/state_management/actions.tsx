// import * as ai from './types';
import { Dispatch } from 'react';
import {
    setSearchFieldAction, CHANGE_SEARCH_FIELD, requestRobotsAction, REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED
} from './types';

export const setSearchField = (text: string): setSearchFieldAction => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    }
};

export const ROBOTS_LOCATION = 'https://jsonplaceholder.typicode.com/users';
export const setRequestRobots = () => {
    // Dispatches an requestRobotsAction
    return async (dispatch: Dispatch<requestRobotsAction>) => {
        await dispatch({
            type: REQUEST_ROBOTS_PENDING,
        })
        await fetch(ROBOTS_LOCATION)
            .then(response => {
                return response.json();
            })
            .then(data => dispatch({
                type: REQUEST_ROBOTS_SUCCESS,
                payload: data
            }))
            .catch(error => dispatch({
                type: REQUEST_ROBOTS_FAILED,
                payload: error
            }));
    }
}