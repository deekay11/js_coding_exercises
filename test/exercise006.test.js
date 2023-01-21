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

describe("isValidDNA",() => {
    test("isValidDNA", () => {
        expect(() => isValidDNA()).toThrowError("str is required");
        expect(isValidDNA("ATGC")).toBe(true);
        expect(isValidDNA("ATGCRY")).toBe(false);
        expect(isValidDNA("ATGCRYW")).toBe(false);
      });
});
describe("isItPrime",() => {
    test("isItPrime", () => {
        expect(() => isItPrime()).toThrowError("n is required");
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(30)).toBe(false);
      });
});
describe("createMatrix",() => {
    test("createMatrix", () => {
        expect(() => createMatrix()).toThrowError("n is required");
        expect(() => createMatrix(3)).toThrowError("fill is required");
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
        expect(createMatrix(1, 0)).toEqual([[0]]);
        expect(createMatrix(2, "bar")).toEqual([["bar", "bar"], ["bar", "bar"]]);
      });
});
describe("areWeCovered",() => {
    test("Checking Day and Staff", () => {
        expect(() => areWeCovered()).toThrowError("staff is required");
        expect(() => areWeCovered([])).toThrowError("day is required");
        });
     test("Checking for Monday", () => { 
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
          { name: "John", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Jane", rota: ["Monday", "Tuesday", "Friday"] }
        ], "Monday")).toBe(true);
    });
        test("Checking for Sunday", () => { 
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday","Wednesday", "Friday"] },
          { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
          { name: "John", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Jane", rota: ["Monday", "Tuesday", "Friday"] }
        ], "Sunday")).toBe(false);
    });    
        test("Checking for Friday", () => {
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
          { name: "John", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Jane", rota: ["Monday", "Tuesday", "Friday"] }
        ], "Friday")).toBe(true);
      });
      
});