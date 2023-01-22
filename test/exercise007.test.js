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
    test("createRange", () => {
        expect(createRange(3,11,2)).toEqual([3,5,7,9,11]);
        expect(createRange(5,10,2)).toEqual([5,7,9]);
        expect(createRange(2,7,3)).toEqual([2,5]);
        expect(() => {createRange()}).toThrowError("start is required");
        expect(() => {createRange(2)}).toThrowError("end is required");
      });
});


describe("getScreentimeAlertList",() => {
    const users = [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
         },
         {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
         },
         { //additional array
            username: "john_11",
            name: "John Kevin",
            screenTime: [
                         { date: "2019-07-11", usage: { mapMyRun: 0, whatsApp: 36, facebook: 66, safari: 10} },
                         { date: "2019-07-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                         { date: "2019-07-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
         }
      ];
    test("Checking Screen Time", () => {
        expect(getScreentimeAlertList(users,"2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users,"2019-07-11")).toEqual(["john_11"]);  
        expect(getScreentimeAlertList(users,"2019-05-03")).toEqual([]);
        expect(() => {getScreentimeAlertList()}).toThrowError("users is required");
        expect(() => {getScreentimeAlertList(users)}).toThrowError("date is required");
    });

});


describe("hexToRGB",() => {
    test("Hexadecimal To RGB", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255, 17, 51)");
        expect(hexToRGB("#F1F1F1")).toBe("rgb(241, 241, 241)");
        expect(hexToRGB("#000000")).toBe("rgb(0, 0, 0)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255, 255, 255)");
        expect(() => {hexToRGB()}).toThrowError("hexStr is required");
      });
});
describe("findWinner",() => {
    test("findWinner returns the correct winner", () => {
        const board1 = [
          ["X", "0", null],
          ["X", null, "0"],
          ["X", null, "0"],
        ];
        const board2 = [
          ["X", "X", "X"],
          ["0", null, null],
          ["0", null, null],
        ];
        const board3 = [
          ["X", "0", "X"],
          ["X", "X", "0"],
          ["0", null, "0"],
        ];
        const board4 = [
          ["X", "0", "X"],
          ["X", "0", "X"],
          ["0", "0", "0"],
        ];
      
        expect(findWinner(board1)).toBe("X");
        expect(findWinner(board2)).toBe("X");
        expect(findWinner(board3)).toBe(null);
        expect(findWinner(board4)).toBe("0");
      });
});