// Functions and HOFs
interface Friend {
  name: string;
  phone: string;
  age: number;
}

const friend1: Friend = {
  name: "Paul Fleming",
  phone: "08712345",
  age: 25,
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
  department: "Engineering",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

// ----------------------------------

function logFriend(friend: Friend) : string {
  return `${friend.name} is at ${friend.phone}`;
}

function logFriendInfer(friend: Friend) {
  return `${friend.name} is at ${friend.phone}`;
}

console.log(logFriend(friends[1]));

// Update a colleague's extension. Return the update as a new instance of Colleague.

function changeExtension(
  colleague: Colleague,
  newExtension: number
): Colleague {
  const updatedColleague : Colleague = {
    ...colleague,
    contact: {
      ...colleague.contact,
      extension: newExtension,
    },
  };
  return updatedColleague
}

console.log(changeExtension(colleague1, 122));

// ----------- HOF ------------

function ringColleagu(
  colleague: Colleague,
  ring: (ext: number) => boolean
) : boolean {
  console.log(`Ringing ${colleague.name}`)
  const connect = ring(colleague.contact.extension)
  return connect
}

const result = ringColleagu(colleague1, (e) => true )
console.log( result? 'Success' : 'Failed')

export { friends };
