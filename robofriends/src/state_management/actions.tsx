import * as ai from './types';
import { Dispatch } from 'react';

export const setSearchField = (text: string): ai.setSearchFieldAction => {
    return {
        type: ai.CHANGE_SEARCH_FIELD,
        payload: text,
    }
};

export const setRequestRobots = () => (dispatch: Dispatch<ai.requestRobotsAction>) => {
    // Dispatches an ai.requestRobotsAction
    dispatch({
        type: ai.REQUEST_ROBOTS_PENDING,
    });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({
            type: ai.REQUEST_ROBOTS_SUCCESS,
            payload: data
        }))
        .catch(error => dispatch({
            type: ai.REQUEST_ROBOTS_FAILED,
            payload: error
        }));
}