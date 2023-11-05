{
  //Utility type

  //Pick type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //ReadOnly
  type PersonReadOnly = Readonly<Person>;
  const person: PersonReadOnly = {
    name: "Asif",
    age: 100,
    contactNo: "017",
  };

  //   person.name = 'Limon' Error

  //Record
  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  const obj: MyObj = {
    a: "skdj",
    b: "bb",
    c: "cc",
  };
  //
}
