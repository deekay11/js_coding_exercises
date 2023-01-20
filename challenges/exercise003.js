export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x * x);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCased = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return camelCased;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((acc, person) => acc + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(item => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...new Set([...set1].filter(x => set2.has(x)))].sort((a, b) => a - b);
}
