// TYPE ANNOTATIONS
const myValue: string = "diarmuid";
let myVariable: number = 1;
myVariable += 1;

// myValue.build()   // ERROR

let myBoolean: boolean = true;
// myBoolean+=1

let myRETest: RegExp = /foo/;

console.log(myVariable);

// Array Type
let myNums: number[] = [1, 2, 3];
let myStrings: Array<string> = ["hello", "world"];

// myNums.push("three")

// Interfaces
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
const data: Record<number, string> = {
  10: "megan",
  20: "lori",
};

data[5] = "joe";

// Type inferencing.

let aString = "hello"; // cmd-k cmd-i

let third = aString.charAt(2);
// aString.pop()

for (let count = 0; count < 10; count++) {
  console.log(count);
}

myNums.forEach((num) => console.log(num));

const friends: Person[] = [
  { first: "bob", last: "sullivan" },
  { first: "kyle", last: "dwyer" },
  { first: "jane", last: "smith" },
];
const sFriends = friends.filter((friend) => friend.last.startsWith("s"));

console.log(sFriends);
