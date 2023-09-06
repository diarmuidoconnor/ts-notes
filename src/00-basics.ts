// TYPE ANNOTATIONS

// ------------ Type annotations --------------------

let myString: string = "diarmuid o'connor";
let myNumber: number = 1;
// let myNumber2 : number = 'dog';

myNumber += 1;

console.log(myNumber);

console.log(myString.toUpperCase());

// Excellent Intellisense.
// let result = myNumber.toUpperCase()   // ERROR

let myBoolean: boolean = true;
// myBoolean+=1      // ERROR

// Intellisense also works at the object properties level (see later)

//------------------------------
// Some useful built-in types
let myRETest: RegExp = /foo/;

console.log('Reg exp. test = ',myRETest.test('abcfoodef') )

// ----------------------------------
// ----------------- Array Type -----------------------------
let myNums: number[] = [1, 2, 3, 5];

let myStrings: Array<string> = ["hello", "world"];
//  string[] aldo works for above array

// myNums.push("three")   // ERROR

// -------------------------------------------------------         /
// ----------------- (Data) Interfaces ------------------------
interface Person {
  first: string;
  last: string;
}

const me: Person = {
  first: "diarmuid",
  last: "o connor",
};

// Hinting support avoids runtime undefined errors
// const surName = me.

// ERROR - Dynamic object expansion is not supported. See later for alternative.
// me.address = '1 Main street'

interface Student {
  name: string;
  id: number;
  modules: string[];
}

const studentX: Student = {
  name: "Joe Bloggs",
  id: 123456,
  modules: ["Programming", "Databases", "Operating Systems"],
};

interface Result {
  moduleName: string;
  grade: number;
}

interface StudentProfile {
  name: Person;
  id: number;
  resultss: Result[];
}

const studentYProfile: StudentProfile = {
  name: { first: 'Jane', last: 'Bloggs' },
  id: 123456,
  resultss: [
    { moduleName: "Programming", grade: 65 },
    { moduleName: "Databases", grade: 70 },
    // { name: "Operating Systems", grade: 58 },
  ],
};

//-------------------------
// ---------------- Type Aliases ----------------------

type Course = {
  title: string;
  code: string;
  qualification: string;
};

type AcademicEntity = Student | Course;  // Union type

function processEntity(entity: AcademicEntity) {
  if ( 'code' in entity) {
    // process Course
  } else {
    // process Student
  }
}
processEntity(studentX);
processEntity({
  title: "Computer Science",
  code: "AD1234",
  qualification: "BSc",
});

// More on type aliases later

// -----------------------------------------------
// --------------- Type inferencing ---------------------------

// Let the compiler do the work!!  Spare the developer!!

let aString = "hello"; // cmd-k cmd-i

let third = aString.charAt(2);
let len = aString.length;

// aString.pop()   // ERROR - inferred type does not have a pop method.

// Inferencing can work through this expression to 
// determine types for doubled and num.
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
