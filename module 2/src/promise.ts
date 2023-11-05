{
  // Promise

  const getTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/tools/1");
    const data = await res.json()
    console.log(data);
  };

  getTodo();

  type Something = { something: string };
  //create a custom Promise

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise
  const showData = async () => {
    const data: Something = await createPromise();
    return data;
    // console.log(data);
  };

  showData();

  //
}
