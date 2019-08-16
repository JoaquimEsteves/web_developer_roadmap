import { robotProps } from "../components/cardList/robots";

export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';

export type REQUEST_ROBOTS =
    'REQUEST_ROBOTS_PENDING' |
    'REQUEST_ROBOTS_SUCCESS' |
    'REQUEST_ROBOTS_FAILED';


export type setSearchFieldAction =  {
    type: "CHANGE_SEARCH_FIELD",
    payload: string
}

export type requestRobotsAction =  {
    type: REQUEST_ROBOTS,
    payload?: string | robotProps[],
}

export type stateRobots =  {
    isPending: boolean,
    robots: robotProps[] | [],
    error: string
}

export type stateSearch =  {
    searchField: string
}


export type AppState =  {
    searchRobots: stateSearch,
    requestRobots: stateRobots
}


export type AppProps =  {
    error: string,
    isPending: boolean,
    onRequestRobots: () => void,
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement> ) => void,
    robots: robotProps[] | [],
    searchField: string,
}
