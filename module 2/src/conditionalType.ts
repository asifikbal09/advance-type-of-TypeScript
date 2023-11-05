{
  //conditional Type

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false;

  type y = a1 extends number ? true : b1 extends string ? true : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false

  type hasPlane = CheckVehicle<"plane"> 


  //
}
