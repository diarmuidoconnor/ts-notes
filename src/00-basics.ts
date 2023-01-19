// TYPE ANNOTATIONS
const myValue: string = "diarmuid";
let myVariable: number = 1;

myVariable += 1;
console.log(myVariable);

// Excellent Intellisense.
// myValue.build()   // ERROR
console.log(myValue.toUpperCase());

let myBoolean: boolean = true;
// myBoolean+=1

// Intellisense also works at the object data-properties level (later)
//------------------------------

// Some useful built-in types
let myRETest: RegExp = /foo/;

// ----------------------------------

// Array Type
let myNums: number[] = [1, 2, 3];
let myStrings: Array<string> = ["hello", "world"];
//  string[] aldo works for above array

// myNums.push("three")   // ERROR

// -------------------------------

// (Data) Interfaces
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "diarmuid",
  last: "o connor",
};

// Hinting
// myPerson.

// ERROR
// myPerson.address = '1 Main street'

// Record Utility type for declaring expandable maps
const data: Record<string, number> = {
  sale: 10,     // event: code
  delivery: 20,
};

data["reorder"] = 5;

//-------------------------

// Type inferencing.
// Let the compiler do the work!!  Spare the developer!!

let aString = "hello"; // cmd-k cmd-i

let third = aString.charAt(2);
let len = aString.length;

// aString.pop()   // ERROR - inferred type does not have a pop method.

for (let count = 0; count < 10; count++) {
  console.log(count);
}

// Type for double and num are inferred
const doubled = myNums.map((num) => num * 2 ) ;

const friends: Person[] = [
  { first: "bob", last: "sullivan" },
  { first: "kyle", last: "dwyer" },
  { first: "jane", last: "smith" },
];
const sFriends = friends.filter((friend) => friend.last.startsWith("s"));

console.log(sFriends);
