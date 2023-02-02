import { Person } from "../01-functions/myTypes";
import fetch from "node-fetch";

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

// ------------- Promises --------------------------
interface RandomUserResponse {
  results: [
    {
      gender: "male" | "female";
      name: {
        title: string;
        first: string;
        last: string;
      };
      location: {
        street: string;
        city: string;
        country: string
      };
      email: string;
      login: Object;
      dob: Object;
      registered: [Object];
      phone: string;
      cell: string;
      id: Object;
      picture: string;
      nat: string;
    }
  ];
}

interface ToDo {
userId: number;
id: number;
title: string;
completed: boolean
}

  async function fetchRandomUsers(request: string): Promise<RandomUserResponse> {
  const response = await fetch(request);
  const body = (await response.json()) as RandomUserResponse;
  return body;
}

async function fetchToDos(request: string) {
  const response = await fetch(request);
  const body = (await response.json()) as ToDo[];
  return body;
}

const users = await fetchRandomUsers(
  "https://randomuser.me/api/?results=6"
);

const usersNameNLocation = users.results.map( (user) => {
  return ` ${user.name.first} ${user.name.last} from ${user.location.country} `

}  )
console.log(usersNameNLocation);

const todos = await fetchToDos(
  "https://jsonplaceholder.typicode.com/todos"
);

const completedTodos = todos.filter( todo => todo.completed   ).map( todo => todo.title )
console.log(JSON.stringify(completedTodos)   )

// -------------------------------
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

