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
}

const joe: User = {
  name: "Joe Bloggs",
  id: "1234",
  social: {
    facebook: "url",
  },
};

const jane: User = {
  name: "Jane Bloggs",
  id: "4321",
  email: "email address",
};

const jill: User = {
    name: "Jill Bloggs",
    id: "4321",
    email: "email address",
    social: {
        facebook: "url",
        twitter: 'handle'
      },
  };

// Suppose users can have an email OR social media links  
type Enail = string;
type Social = {
  facebook: string;
  twitter?: string;
  instragram?: string;
};

type Contact = Enail | Social;

interface UserWithContact {
  id: string;
  name: string;
  email?: string;
  contact: Contact;
}

const joe2 : UserWithContact = {
    name: "Joe Bloggs",
    id: "1234",
    contact: {
      facebook: "url",
    },
  };

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
