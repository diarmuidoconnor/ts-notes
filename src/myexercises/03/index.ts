interface Friend {
    name: string;
    phone: string;
    age: number;
    dob?: Date;
    innterests?: string[]
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
  
  interface Colleagues {
    current: Colleague[];
  }
  const colleagues: Colleagues = {
    current: [colleague1, colleague2],
  };
  
  function logFriend(friend: Friend) {
    return `${friend.name} is at ${friend.phone}`;
  }
  
  // Write a logColleague function the accepts a Colleague parameter
  // and returns a string of the form ..... . Use the arrow function style.
  const logColleague = (colleague: Colleague): string => {
    return `${colleague.name} is at extension ${colleague.contact.extension}`;
  };
  
  console.log(logFriend(friends[1]));
  
const setExtraInfo = (friend: Friend, interests: string[], dob?: Date) : Friend => {
  return {
    ...friend,
    innterests: interests,
    dob: dob
  }
} 

 
  export { friends };
  