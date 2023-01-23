interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1 : Friend = {
    name: 'Paul Fleming',
    phone: '08712345',
    age: 25
  }
  
  const friend2 : Friend = {
    name: 'Jane Costello',
    phone: '08612345',
    age: 31
  }
  
  const friends : Friend[] = [friend1, friend2]
  
  console.log(friends[1])
  
  interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

  const colleague1 : Colleague= {
    name: 'Ralph Graham',
    department: 'Engineering',
    contact: {
      email: 'rgraham@company.com',
      extension: 121
    } 
  }
  
  const colleague2 : Colleague= {
    name: 'Patti Burke',
    department: 'Engineering',
    contact: {
      email: 'pburke@company.com',
      extension: 132
    } 
  }
  
  interface Colleagues {
    current: Colleague[];
  }
  const colleagues : Colleagues = {
    current: [colleague1,colleague2]
  }
  
  console.log(colleagues.current[0])
  
  export{friends}