import * as rdrs from '../reducers';

describe('searchRobots reduer test', () => {
    it('Test empty params', () => {
        // Test empty array
        expect(rdrs.searchRobots(undefined, {})).toEqual({
            searchField: ''
        })
    })

    it('Test yo', () => {
        // Test empty array
        expect(rdrs.searchRobots(undefined, {
            payload: "yo",
            type: "CHANGE_SEARCH_FIELD"
        })).toEqual({
            searchField: 'yo'
        })
    })
    it('Test with a state', () => {
        // Test empty array
        expect(rdrs.searchRobots({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            type: "CHANGE_SEARCH_FIELD"
        })).toEqual({
            searchField: 'yo'
        })
    })
})