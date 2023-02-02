// Generics
import fetch from "node-fetch";

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

const colleague2: Colleague = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

interface Colleagues {
  name: string;
  department: string;
  current: Colleague[];
  former?: Colleague[];
}

const colleagues: Colleagues = {
  name: "Joe Bloggs",
  department: "Purchasing",
  current: [colleague1, colleague2],
};

// ------------------------

function findFriend(
  friends: Friend[],
  criteria: (friend: Friend) => boolean
): Friend[] {
  return friends.filter(criteria);
}

function findColleague(
  colleagues: Colleague[],
  criteria: (colleague: Colleague) => boolean
): Colleague[] {
  return colleagues.filter(criteria);
}

function find<T>(targets: T[], criteria: (target: T) => boolean): T[] {
  return targets.filter(criteria);
}

console.log(find<Friend>(friends, (f) => f.age < 32));
// The generic type is inferred from the first parameter type
console.log(find(colleagues.current, (c) => c.department === "Finance"));

// ---------- Promises --------------

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

export async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = (await response.json()) as T;
  return body;
}
const users = await http<RandomUserResponse>(
  "https://randomuser.me/api/?results=6"
);

const usersNameNLocation = users.results.map( (user) => {
  return ` ${user.name.first} ${user.name.last} from ${user.location.country} `

}  )
console.log(usersNameNLocation);
// export { friends };
