import { Person } from "../01-functions/myTypes";

// Without Generics
function stringRanker(
  strings: string[],
  ranker: (s: string) => number
): string[] {
  const result = strings.sort((a, b) => ranker(a) - ranker(b));
  return result;
}

const stringsByLength = stringRanker(
  ["hello", "to", "the", "universe"],
  (str) => str.length
);
console.log(stringsByLength);

function personRanker(
  people: Person[],
  ranker: (p: Person) => number
): Person[] {
  const result = people.sort((a, b) => ranker(a) - ranker(b));
  return result;
}

const joe: Person = {
  first: "Joe",
  last: "Bloggs",
  age: 22,
};

const jill: Person = {
  first: "Jill",
  last: "Bliggs",
  age: 21,
};
const jane: Person = {
  first: "Jane",
  last: "Bliags",
  age: 30,
};

const peopleByAge = personRanker([joe, jill, jane], (p) =>
  p.age ? p.age : 30
);
console.log(peopleByAge);

// With Generics

function ranker<T>(element: T[], ranker: (e: T) => number): T[] {
  const result = element.sort((a, b) => ranker(a) - ranker(b));
  return result;
}

// Return type is inferred - use cmd-k,i
const peopleByAge2 = ranker<Person>([jane, joe, jill], (p) =>
  p.age ? p.age : 30
);

console.log(peopleByAge2);

// The string type is inferred for T because of array element's type.
// Use cmd-k cmd-i to confirm
const stringsByLength2 = ranker(
  ["hello", "to", "the", "universe"],
  (str) => str.length
);
console.log(stringsByLength2);

// Generics can be applied to interfaces as well.

interface Microphone {
  make: string;
  range: number;
}

interface Speaker {
  manufacturer: string;
  model: string;
  ports: string[];
}

interface Box<T> {
  selveNo: number;
  content: T[];
}

const box1: Box<Speaker> = {
  selveNo: 3,
  content: [
    {
      manufacturer: "SubZero",
      model: "SZPA-P15",
      ports: ["USBA", "USBC"],
    },
  ],
};
