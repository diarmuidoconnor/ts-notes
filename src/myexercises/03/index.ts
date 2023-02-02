// Optionals - interface properties function parameters
// Function overloading
// Type aliases
interface Friend {
  name: string;
  phone: string;
  age: number;
  dob?: Date;
  innterests?: string[];
}

const friend1: Friend = {
  name: "Paul Fleming",
  phone: "08712345",
  age: 25,
  dob: new Date("1998-11-20"),
};

const friend2: Friend = {
  name: "Jane Costello",
  phone: "08612345",
  age: 31,
};

const friends: Friend[] = [friend1, friend2];

interface Colleague {
  name: string;
  department: string;
  contact: {
    email: string;
    extension: number;
  };
}

const colleague1: Colleague = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

interface Colleagues {
  name: string;
  department: string;
  current: Colleague[];
  former?: Colleague[];
}

// ------------Optional parameters ---------------

const setExtraInfo = (
  friend: Friend,
  interests: string[],
  dob?: Date
): Friend => {
  return {
    ...friend,
    innterests: interests,
    dob: dob,
  };
};

console.log(setExtraInfo(friend1, ["Sport", "Music"]));
console.log(setExtraInfo(friend1, ["Sport", "Music"], new Date("2000-02-10")));

// ---------------Function Overloading --------------

function changeDOB(f: Friend, dob: string): Friend;
function changeDOB(f: Friend, dob: Date): Friend;
function changeDOB(f: Friend, dob: unknown): Friend {
  const result = { ...f };
  if (typeof dob === "object") {
    result.dob = dob as Date;
  } else {
    const validDate: RegExp = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
    const dateString = dob as string
    if (validDate.test(dateString)) result.dob = new Date(dateString)
  }
  return result;
}

console.log(changeDOB(friend1, '1991-12-02') )
console.log(changeDOB(friend1, '19991-12-02') )

// ---------------Type Aliases -----------

type Buddy = Friend | Colleague;

interface BuddyList {
  name: string;
  buddies: Buddy[];
}

const buddies : BuddyList = {
  name: 'Sheila Marino',
  buddies: [friend1,colleague1,friend2]
}

function getBuddy(list: BuddyList, name: string) {
  const buddy: Buddy | undefined = list.buddies.find((b) => b.name === name);
  return buddy;
}

console.log(getBuddy(buddies, 'Paul Fleming')  )
console.log(getBuddy(buddies, 'Patti Burke')  )


export { friends };
