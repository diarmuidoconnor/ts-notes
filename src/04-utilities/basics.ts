// Utility types.
// See https://www.typescriptlang.org/docs/handbook/utility-types.html

interface UserT {
  name: string;
  id: number;
  programming: string[];
  email?: string;
}

// Make everything optional - use cmd-k, cmd-i to confirm
type UserTOptionals = Partial<UserT>;

const merge = (UserT: UserT, overrides: UserTOptionals): UserT => {
  return {
    ...UserT,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Diarmuid",
      id: 2,
      programming: ['JS', 'TS'],
      email: "diarmuid@wit.ie",
    },
    {
      email: "diarmuid@setu.ie",
    }
  )
);

// Have every property mandatory
type RequiredUserT = Required<UserT>;


// Pick a subset of the proerties
type JustEmailAndName = Pick<UserT, "email" | "name">;

function createUserT(UserT: JustEmailAndName): UserT {
  return {
    ...UserT,
    id: Math.floor(Math.round(10)) * (1000 - 1) + 1, 
    programming: []
  };
}
console.log(
  createUserT({
    name: "Diarmuid",
    email: "diarmuid@wit.ie",
  })
);

// All properties except .....
type UserTProgramming = Omit<UserT, "id" | "email"  >;

// const getUser
// Record<Keys, Type> - Construct an object type whose keys are of type Keys 
// and the values are of type Type
type UserTMapById = Record<UserT["id"], UserTProgramming>

const mapById = (UserTs: UserT[]): UserTMapById => {
  return UserTs.reduce((acc, v) => {
    const { id, ...other } = v;
    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
      programming: ['Python', 'Java']
    },
    {
      id: 2,
      name: "Mrs. Baz",
      programming: ['Kotlin']
    },
  ])
);
