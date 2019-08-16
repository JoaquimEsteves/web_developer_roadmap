import * as rdrs from '../reducers';

describe('searchRobots reduer test', () => {
    it('Test empty params', () => {
        // Test empty array, ts will naturally complain
        // @ts-ignore
        expect(rdrs.searchRobots(undefined, {})).toEqual({
            searchField: ''
        })
    })

    it('Test yo', () => {
        expect(rdrs.searchRobots(undefined, {
            payload: "yo",
            type: "CHANGE_SEARCH_FIELD"
        })).toEqual({
            searchField: 'yo'
        })
    })
    it('Test with a state', () => {
        expect(rdrs.searchRobots({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            type: "CHANGE_SEARCH_FIELD"
        })).toEqual({
            searchField: 'yo'
        })
    })
    it('Test with an incorrect typo!', () => {
        expect(rdrs.searchRobots({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: "REQUEST_ROBOTS_PENDING"
        })).toEqual({
            searchField: 'oldSearch'
        })
        expect(rdrs.searchRobots({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: "REQUEST_ROBOTS_SUCCESS"
        })).toEqual({
            searchField: 'oldSearch'
        })
        expect(rdrs.searchRobots({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: "REQUEST_ROBOTS_FAILED"
        })).toEqual({
            searchField: 'oldSearch'
        })
        expect(rdrs.searchRobots({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: null
        })).toEqual({
            searchField: 'oldSearch'
        })
    })
})