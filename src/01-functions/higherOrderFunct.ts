
// ----------------- Higher Order Functions ---------------------

// Declaring a callback's type in TS
export function printToConsole(
  text: string,
  callback: (s: string) => string
): void {
  const response = callback(text);
  console.log(response);
}
// Callback has a number parameter, and returns a number
export function arrayMutate(
  numbers: number[],
  mutate: (num: number) => number
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (num) => num * 10));

const selectiveDecrement = (n: number) => {
  return n > 100 ? n - n * 0.1 : n;
};

console.log(arrayMutate([110, 20, 300], selectiveDecrement));

// Declaring a custom type for a function signature.
type MutationFunction = (v: number) => number;

// Cleaner syntax for declaring callback
export function arrayMutate2(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate2([1, 2, 3], (num) => num * 100));

