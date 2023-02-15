const validateValue =require('./validateValue');


describe('valAllTests', () => {
    test('Valdation_50', () => {
        expect(validateValue(50)).toBe(true);
    }),
    test('Valdation_1', () => {
        expect(validateValue(1)).toBe(true);
    }),
    test('Valdation_100', () => {
        expect(validateValue(100)).toBe(true);
    }),
    test('Valdation_-40', () => {
        expect(validateValue(-40)).toBe(false);
    }),
        test('Valdation_160', () => {
            expect(validateValue(160)).toBe(false);
        })
    test('valPass', () => {
        expect(validateValue(56435)).toBe(false)
    })

})