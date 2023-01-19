import { Person } from "./myTypes";

// Function parameter and return types
function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

// TS infers the return type - try cmd-k, cmd-i
export function addtoNumberArray(nums: number[], inc: number) {
  const newNums = nums.map((num) => num + inc);
  return newNums;
}

// --------------------

// Arrow functions
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// params is a union type - string OR number
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// void is return type when nothing is returned
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Use cmd-k,cmd-i to suggest return type.
// May need to set target in tsconfig for Promise to be recognised
export const fetchData = (url: string) =>
  Promise.resolve(`Data from ${url}`);

export const fetchPerson = (url: string): Promise<Person> =>
  Promise.resolve({
    first: "diarmuid",
    last: "o connor",
  });


function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}
// Type checking only happens at compile-time
export function getName(user: Person): string {
  return `${user.first} ${user.last}`;
}
// export function getNameSafer(user: { first: string; last: string }): string {
//   return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
// }
