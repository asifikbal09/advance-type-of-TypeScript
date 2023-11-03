{
  //Start of the Block

  //Interface
  type User = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole = User & { role: string }; // Intersection
  interface UserWithRole2 extends User2 {
    role: string;
  }
  interface UserWithRole3 extends User {
    role: string;
  }

  const user1: UserWithRole = {
    name: "Asif",
    age: 100,
    role: "Manager",
  };

  const user3: UserWithRole2 = {
    name: "Asif",
    age: 100,
    role: "Manager",
  };

  const user4: UserWithRole3 = {
    name: "Asif",
    age: 100,
    role: "Manager",
  };

  //   const user1: User = {
  //     name: "Asif",
  //     age: 100,
  //   };

  const user2: User2 = {
    name: "Limon",
    age: 20,
  };
  //----------------------------------

  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll = [1, 2, 3, 4];
  const rollNumber2: Roll2 = [1, 2, 3, 4];
  //-------------------------------

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (number1: number, number2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;
  const sum: Add2 = (num1, num2) => num1 + num2;
  //End of Block
}
