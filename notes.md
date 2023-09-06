
## Start-up
npm init
npm install -D typescript
npm install -D ts-node
npx tsc --init    

 npx ts-node src/basics.ts   # Run TS script
npx ts-node --esm ...... when code has ESM imports
# Type checking only happens at COMPILE-TIME. Use tsc to generate js equivalent of TS file, and check JS code with JS test file
npx tsc src/functions/basics.ts
npx tsc src/functions/basic-test.ts 
Temporarly remove "type": "module" from package.json
node src/functions/basic-test.js
 


Exercises Learning path:

+ Basic interfaces
+ Union type (|)
+ Function - Determine type for union type
+ Type narrowing using type predicated.
+ Utility types - Omit and Partial e.g. object update function (5)
+ Function overloading - Use unknown type in implementation, and cast parameter after detrmining its type using narrowing or runtime type discovery (object, string, number)
+ Generics; keyof ; 
+ Type intersection (&) or interface extension (extends) - use to merge multiple types into one. (PowerUser).

// T is a type variable - it's assigned a Type on invocation
// element and num are parameters that are assigned values on invocation
function process<T>( element: T, num: number) {
  // process T 
}

process<Person>( personX, 5)
process<Box>( boxY, 12)
