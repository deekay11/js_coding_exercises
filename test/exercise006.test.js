import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
  } from "../challenges/exercise006";
  describe("sumMultiples",() => {
    test("it throws an error if not passed an array", () => {
        expect(()=>{
            sumMultiples();
        }).toThrow("arr is required");    
    });
    test("returns the sum of multiples of 3 and 5 in the array", () => {
        expect(sumMultiples([1, 2, 3, 5])).toEqual(8);  
    });
    test("Check with decimal numbers and multiples of 3 and 5",()=>{
        expect(sumMultiples([1, 3, 5.0, 2, 12, 10])).toEqual(30);
    });
    test("Returns 0 if there is no multiple of 3 and 5",()=>{
        expect(sumMultiples([1, 2, 8, 13, 7])).toEqual(0);
    });
});
