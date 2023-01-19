// Utility types.
// See https://www.typescriptlang.org/docs/handbook/utility-types.html

interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// Make everything optional - use cmd-k, cmd-i to confirm
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Diarmuid",
      id: 2,
      email: "diarmuid@wit.ie",
    },
    {
      email: "diarmuid@setu.ie",
    }
  )
);

// Every property is mandatory
type RequiredMyUser = Required<MyUser>;

// Pick a subset of the proerties
type JustEmailAndName = Pick<MyUser, "email" | "name">;

function createUser(user: JustEmailAndName): MyUser {
  return {
    ...user,
    id: Math.round(10) * (1000 - 1) + 1, //.toString(36).substring(7)
  };
}
console.log(
  createUser({
    name: "Diarmuid",
    email: "diarmuid@wit.ie",
  })
);

// All properties except .....
type UserWithoutID = Omit<MyUser, "id">;

// Record<Keys, Type> - Construct an object type whose keys are of type Keys 
// and the values are of type Type
type UserMapById = Record<MyUser["id"], UserWithoutID>

const mapById = (users: MyUser[]): UserMapById => {
  return users.reduce((acc, v) => {
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
    },
    {
      id: 2,
      name: "Mrs. Baz",
    },
  ])
);
