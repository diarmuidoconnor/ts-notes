// ? denotes an optional element

// Optional parameter
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Granukar Sugar", "Can substitute with Castar");

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

//  -------------------------

// Custom types.
// It allows more readable code whose intent is more apparent.
// Improves DRY
// Note syntax
type SocialHandles = {
  facebook: string;
  twitter?: string;
  instragram?: string;
};
type Email = string;

interface UserTyped {
  id: string;
  name: string;
  email?: Email;
  social?: SocialHandles;
  status : boolean
}

const kyle: UserTyped = {
  name: "Joe Bloggs",
  id: "1234",
  status: true,
  social: {
    facebook: "url",
  },
};

// Suppose users contact is eithe email or social media.

type Contact = Email | SocialHandles;
interface UserWithContact {
  id: string;
  name: string;
  contact: Contact;
}

const jenny : UserWithContact = {
    name: "Jenny Bloggs",
    id: "1234",
    contact: {
      facebook: "url",
    },
  };

  const julia : UserWithContact = {
    name: "Julia Bloggs",
    id: "1234",
    contact: "janet@here.com"
  };

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