{
  //
  //Generic Function

  const createArray = (param: string): string[] => [param];
  const createArrayWithGeneric = <T>(param: T): T[] => [param];
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => [
    param1,
    param2,
  ];

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGeneric<string>("Bangladesh");
  const res3 = createArrayWithGeneric<boolean>(true);
  const res4 = createArrayWithGeneric<number>(23);
  const resObj = createArrayWithGeneric<object>({
    name: "Asif",
    isAdmin: true,
  });
  const resObj2 = createArrayWithGeneric<{ name: string; isAdmin: boolean }>({
    name: "Asif",
    isAdmin: true,
  });

  interface User {
    name: string;
    isAdmin: boolean;
  }
  const resObj3 = createArrayWithGeneric<User>({
    name: "Asif",
    isAdmin: true,
  });

  const res5 = createArrayWithTuple<string, number>("Bangladesh", 234);
  const res6 = createArrayWithTuple<
    string,
    { isBeautiful: boolean; capital: string }
  >("Bangladesh", { isBeautiful: true, capital: "Dhaka" });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Developer";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({ name: "asif", isAdmin: false,hasWatch:'apple watch' });
  const student4 = addCourseToStudent({ name: "asif", isAdmin: false,devType:'NLWD' });
  const student1 = addCourseToStudent<User>({ name: "asif", isAdmin: false });
  const student2 = addCourseToStudent<User & { role: string }>({
    name: "asif",
    isAdmin: false,
    role: "Captain",
  });

  //
}
