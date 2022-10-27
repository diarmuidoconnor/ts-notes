import {BirthDate} from './myTypes'

// Declaring a callback's type in TS
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
// Callback has a number parameter, and returns a number
export function arrayMutate(
  numbers: number[],
  mutate: (num: number) => number
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1,2,3], (num) => num*10)  )


// Declaring a custom type for a function signature.
 type MutationFunction = (v: number) => number;

// Cleaner syntax for declaring callback
export function arrayMutate2(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate2([1,2,3], (num) => num*100)  )

// Types can be function signature or object structures (overlap with interfaces)

const person: BirthDate = {
    first: 'joe',
    last: 'blogs',
    dob: new Date(200,4,12)
}
