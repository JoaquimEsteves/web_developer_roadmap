import { robotProps } from "../components/cardList/robots";

export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';

export type REQUEST_ROBOTS =
    'REQUEST_ROBOTS_PENDING' |
    'REQUEST_ROBOTS_SUCCESS' |
    'REQUEST_ROBOTS_FAILED';


export interface setSearchFieldAction {
    type: "CHANGE_SEARCH_FIELD",
    payload: string
}

export interface requestRobotsAction {
    type: REQUEST_ROBOTS,
    payload?: string | robotProps[],
}

export interface stateRobots {
    isPending: boolean,
    robots: robotProps[] | [],
    error: string
}

export interface stateSearch {
    searchField: string
}


export interface AppState {
    searchRobots: stateSearch,
    requestRobots: stateRobots
}


export interface AppProps {
    error: string,
    isPending: boolean,
    onRequestRobots: () => void,
    onSearchChange: (event: { target: { value: string; }; }) => void,
    robots: robotProps[] | [],
    searchField: string,
}
// export interface setSearchFieldAction {
//     type: "CHANGE_SEARCH_FIELD",
//     payload: string
// }