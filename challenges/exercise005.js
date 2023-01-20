export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const foundIndex = nums.findIndex(num => num === n);
  if(foundIndex === -1 || foundIndex === nums.length-1) return null;
  return nums[foundIndex+1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const count = {
    1: 0,
    0: 0
  };
  str.match(/[10]/g).forEach(char => count[char]++);
  return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.reduce((total, subArr) => total + subArr.reduce((subTotal, num) => subTotal + num, 0), 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length < 2) return arr;
  return [arr[arr.length - 1], ...arr.slice(1, arr.length-1), arr[0]];
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  searchTerm = searchTerm.toLowerCase();
  for (let key in haystack) {
    if (haystack[key].toString().toLowerCase().includes(searchTerm)) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let wordFrequencies = {};
  str = str.toLowerCase();
  str = str.replace(/[^\w\s]/gi, '');
  let words = str.split(" ");
  for (let word of words) {
    if (wordFrequencies[word]) {
      wordFrequencies[word]++;
    } else {
      wordFrequencies[word] = 1;
    }
  }
  return wordFrequencies;
};
