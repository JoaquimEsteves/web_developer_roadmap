const googleSearch = require('./script');


dbMock = [
    'dog.com',
    'yo.com',
    'lmaaaaaaao.com',
    'lmaaaaaaao.com',
    'lmaaaaaaao.com',
    'lmaaaaaaao.com'
]

describe('googleSearch', () => {
    it('String: test test', () => {
        expect(googleSearch('cats', dbMock)).toStrictEqual([]);
    })
    
    it('Works with undefined/null/NaN', () => {
        expect(googleSearch(undefined, dbMock)).toStrictEqual([]);
        expect(googleSearch(null, dbMock)).toStrictEqual([]);
        expect(googleSearch(NaN, dbMock)).toStrictEqual([]);
    })
    
    it('No more than 3', () => {
        expect(googleSearch('lma', dbMock).length).toStrictEqual(3);
    })
})


