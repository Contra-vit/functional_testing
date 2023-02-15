const mapArrToStrings = require("./mapArrToStrings");

describe('mapArrTo', () => {
    test('mapArrToStrings_N1', () => {
        expect(mapArrToStrings([1,2,3])).toEqual(['1','2','3']);
    }),
        test('testWithUndefined', () => {
            expect(mapArrToStrings([1,2,3,undefined])).toEqual(['1','2','3'])
        }),
        test('emptyArr',  () => {
            expect(mapArrToStrings([])).toEqual([])
        } ),
        test('Denial',  () => {
            expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3])
        })
})