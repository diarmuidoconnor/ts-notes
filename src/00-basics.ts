// TYPE ANNOTATIONS
let myString: string = "diarmuid";
let myNumber: number = 1;
// let myNumber2 : number = 'dog';

myNumber += 1;

console.log(myNumber);

// Excellent Intellisense.
// let result = myValue.upperCase()   // ERROR
console.log(myString.toUpperCase());

let myBoolean: boolean = true;
// myBoolean+=1

// Intellisense also works at the object data-properties level (later)
//------------------------------

// Some useful built-in types
let myRETest: RegExp = /foo/;

// ----------------------------------
// Array Type
let myNums: number[] = [1, 2, 3, 5];

let myStrings: Array<string> = ["hello", "world"];
//  string[] aldo works for above array

// myNums.push("three")   // ERROR

// -------------------------------
// Data) Interfaces
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "diarmuid",
  last: "o connor",
};

// Hinting support avoids runtime undefined errors
// myPerson.

// ERROR - Dynamic object expansion is not supported.
// myPerson.address = '1 Main street'

interface Student {
  name: string;
  id: number;
  modules: string[];
}

const student1: Student = {
  name: "Joe Bloggs",
  id: 123456,
  modules: ["Programming", "Databases", "Operating Systems"],
};

interface Result {
  name: string;
  grade: number;
}

interface StudentProfile {
  name: "Joe Bloggs";
  id: 123456;
  modules: Result[];
}

const student2: StudentProfile = {
  name: "Joe Bloggs",
  id: 123456,
  modules: [
    { name: "Programming", grade: 65 },
    { name: "Databases", grade: 70 },
    { name: "Operating Systems", grade: 58 },
  ],
};
//-------------------------
// Type Aliases

type Course = {
  title: string;
  code: string;
  qualification: string;
};

type AcademicEntity = Student | Course;  // Union type

function processEntity(entity: AcademicEntity) {
  //
}
processEntity(student1);
processEntity({
  title: "Computer Science",
  code: "AD1234",
  qualification: "BSc",
});

// Lots more later!!!!!

// -----------------------------------------------
// Type inferencing.

// Let the compiler do the work!!  Spare the developer!!

let aString = "hello"; // cmd-k cmd-i

let third = aString.charAt(2);
let len = aString.length;

// aString.pop()   // ERROR - inferred type does not have a pop method.

// Type for doubled and num are inferred
const doubled = myNums.map((num) => num * 2);

const friends: Person[] = [
  { first: "bob", last: "sullivan" },
  { first: "kyle", last: "dwyer" },
  { first: "jane", last: "smith" },
];
const sFriends = friends.filter((friend) => friend.last.startsWith("s"));

console.log(sFriends);

// --------------------------------

// Record Utility type for declaring expandable maps
const data: Record<string, number> = {
  sale: 10, // event: code
  delivery: 20,
};

data["reorder"] = 5;
