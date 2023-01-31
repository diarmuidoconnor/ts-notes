// ? denotes an optional element

// Optional data structure properties
interface User {
  id: string;
  name: string;
  email?: string;
  social?: {
    facebook: string;
    twitter?: string;
    instragram?: string;
  };
  status : boolean
}

const joe: User = {
  name: "Joe Bloggs",
  id: "1234",
  status: true,
  social: {
    facebook: "url",
  },
};

const jane: User = {
  name: "Jane Bloggs",
  id: "4321",
  email: "email address",
  status: false,
};

const jill: User = {
    name: "Jill Bloggs",
    id: "4321",
    email: "email address",
    status : true,
    social: {
        facebook: "url",
        twitter: 'handle'
      },
  };

  // -----------------------
// Optional parameter
function printIngredient( ingredient: string, quantity: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient( "Flour", "1C");
printIngredient( "Granukar Sugar", "2TS", "Can substitute with Castar");


//  -------------------------

// Type Aliases .
// It allows more readable code whose intent is more apparent.
// Improves DRY
// Note syntax

type SocialHandles = {
  facebook: string;
  twitter?: string;
  instragram?: string;
};
type Addresss = {
  street: string;
  town: string
};

// Suzpxpose users contact is eithe email or social media.
type Contact = SocialHandles | Addresss
interface UserTyped {
  id: string;
  name: string;
  contact: Contact;
  status : boolean
}

const kyle: UserTyped = {
  name: "Joe Bloggs",
  id: "1234",
  status: true,
  contact: {
    facebook: "url",
  },
};

const jenny : UserTyped = {
    name: "Jenny Bloggs",
    id: "1234",
    contact: {
      street: '1 Main Street',
      town: "Tramore"
    },
    status: false
  };

type Department = 'Engineering' | 'Sales' | 'Accounts';

const getStaff = (department: Department): UserTyped[] => {
    if (department === "Accounts") {
      return [jenny]
    } else if (department === "Engineering") {
      return [kyle]
    }
    return []

}

console.log(getStaff("Engineering"  )  )

// ---------------------------------  

// Optional fumction parameters

function addWithCallback(x: number, y: string, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}

// Required parameters cannot follow optional ones
// function addWithCallback2(x: number, y?: string, callback: () => void) {
//   console.log([x, y]);
//   callback?.();
// }