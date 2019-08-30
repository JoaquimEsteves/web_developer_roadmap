const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to get people', () => {
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})

it('calls swapi to get people with a promise', async () => {
    expect.assertions(2)
    await swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

it('getPeople returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
        Promise.resolve(
            {
                json: () => Promise.resolve({
                    count: 89,
                    results: ["test", "test", "test"]

                })
            })
    )

    expect.assertions(3);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
        expect(data.count).toEqual(89);
    })
})