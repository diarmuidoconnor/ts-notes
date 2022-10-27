
## Start-up
npm init
npm install -D typescript
npm install -D ts-node
npx tsc --init

 npx ts-node src/basics.ts   # Run TS script

# Type checking only happens at COMPILE-TIME. Use tsc to generate js equivalent of TS file, and check JS code with JS test file
npx tsc src/functions/basics.ts
npx tsc src/functions/basic-test.ts 
 node src/functions/basic-test.js
 