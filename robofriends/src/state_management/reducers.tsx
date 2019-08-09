import * as types from "./types";
import { robotProps } from "../components/cardList/robots";

const initialStateSearch: types.stateSearch = {
    searchField: '',
};

const initialStateRobots: types.stateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const searchRobots = (state = initialStateSearch, action: types.setSearchFieldAction) => {
    switch (action.type) {
        case types.CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}

export const requestRobots = (state = initialStateRobots, action: types.requestRobotsAction) => {
    switch (action.type) {
        case types.REQUEST_ROBOTS_PENDING:
            return {...state, isPending:true};
        case types.REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload as robotProps[], isPending:false};
        case types.REQUEST_ROBOTS_FAILED:
                return {...state, error: action.payload as string, isPending:false};
        default:
            return state;
    }
}