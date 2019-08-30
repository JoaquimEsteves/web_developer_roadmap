const fetch = require('node-fetch');

// dependency inject the fetch method.
const getPeoplePromise = fetchfFunction => {
    return fetchfFunction("https://swapi.co/api/people")
        // return fetchfFunction("https://swapi.com/api/people")
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        });
}

const getPeople = async (fetchFunction) => {
    const getRequest = await fetchFunction("https://swapi.co/api/people");
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}