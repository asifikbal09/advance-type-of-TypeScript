{
  //Constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Developer";
    return {
      ...student,
      course,
    };
  };

  interface Student {
    id: number;
    name: string;
    email: string;
  }
  const addCourseToStudent2 = <
    T extends Student
  >(
    student: T
  ) => {
    const course = "Next Level Developer";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 23,
    name: "asif",
    email: "asif@gmail.com",
    isAdmin: false,
    hasWatch: "apple watch",
  });
  const student2 = addCourseToStudent({
    id: 3,
    name: "limon",
    email: "limon@gmail.com",
    isAdmin: false,
    hasWatch: "apple watch",
  });
  const student3 = addCourseToStudent({
    id: 2,
    name: "tamim",
    email: "tamim@gmail.com",
    isAdmin: false,
    hasWatch: "apple watch",
  });
  const student4 = addCourseToStudent({
    id: 4,
    name: "mithila",
    email: "mithila@gmail.com",
    isAdmin: false,
    devType: "NLWD",
  });

  const student5 = addCourseToStudent2({id:234,name:"abul",email:"abul@gmail.com",result:"CGPA 4.00"})

  //
}
