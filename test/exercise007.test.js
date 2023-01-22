import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
  } from "../challenges/exercise007";

  describe("sumDigits",() => {
    test("Sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(999)).toBe(27);
        expect(sumDigits(123456789)).toBe(45);
        expect(() => {sumDigits()}).toThrowError("n is required");
    });
});


describe("createRange",() => {
    test('createRange', () => {
        expect(createRange(3,11,2)).toEqual([3,5,7,9,11]);
        expect(createRange(5,10,2)).toEqual([5,7,9]);
        expect(createRange(2,7,3)).toEqual([2,5]);
        expect(() => {createRange()}).toThrowError("start is required");
        expect(() => {createRange(2)}).toThrowError("end is required");
      });
});