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

const ROBOTS_LOCATION = 'https://jsonplaceholder.typicode.com/users';
export const setRequestRobots = () => (dispatch: Dispatch<requestRobotsAction>) => {
    // Dispatches an requestRobotsAction
    dispatch({
        type: REQUEST_ROBOTS_PENDING,
    });
    fetch(ROBOTS_LOCATION)
        .then(response => response.json())
        .then(data => dispatch({
            type: REQUEST_ROBOTS_SUCCESS,
            payload: data
        }))
        .catch(error => dispatch({
            type: REQUEST_ROBOTS_FAILED,
            payload: error
        }));
}