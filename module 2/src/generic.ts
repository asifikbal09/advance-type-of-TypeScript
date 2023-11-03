{
  //Start of the Block

  //Generic type

  type GenericArray<T> = Array<T>;

  //   const roleNumbers: number[] = [23, 43, 53, 23, 63];
  //   const roleNumbers: Array<number> = [23, 43, 53, 23, 63];
  const roleNumbers: GenericArray<number> = [23, 43, 53, 23, 63];

  //   const names: string[] = ["Alex", "Monica", "Ricky"];
  //   const names: Array<string> = ["Alex", "Monica", "Ricky"];
  const names: GenericArray<string> = ["Alex", "Monica", "Ricky"];

  //   const boolArray:boolean[]=[true,false,true]
  //   const boolArray:Array<boolean>=[true,false,true]
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Asif",
      age: 100,
    },
    {
      name: "Limon",
      age: 100,
    },
  ];

  //Generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["mr X", "mr Y"];

  const info: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Asif", email: "asif@gmail.com" },
  ];

  // End of the Block
}
