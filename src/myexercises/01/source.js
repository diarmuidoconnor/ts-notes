const friend1 = {
  name: 'Paul Fleming',
  phone: '08712345',
  age: 25
}

const friend2 = {
  name: 'Jane Costello',
  phone: '08612345',
  age: 31
}

const friends = [friend1, friend2]

console.log(friends[1])

const colleague1 = {
  name: 'Ralph Graham',
  department: 'Engineering',
  contact: {
    email: 'rgraham@company.com',
    extension: 121
  } 
}

const colleague2 = {
  name: 'Patti Burke',
  department: 'Engineering',
  contact: {
    email: 'pburke@company.com',
    extension: 132
  } 
}

const colleagues = {
  current: [colleague1,colleague2]
}

console.log(colleagues.current[0])

