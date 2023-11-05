{
  // Mapping
  const arrayOfNumber: number[] = [1, 2, 3, 4, 5, 6];

  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );
  console.log(arrayOfString);

  type AreaNumber = {
    hight: number;
    width: number;
  };

  type Hight = AreaNumber["hight"]; //Look UP type

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
