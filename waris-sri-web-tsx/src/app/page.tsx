// import anything from path outside the current file
import { Print } from "./print()";

// export this function as the default (initiate first)
export default function Home() {
  var age_group;
  let age = 18;

  if (age < 21) {
    age_group = "teenager";
  } else {
    age_group = "adult";
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  let arr = [1, 2, 3, 4, 5];
  console.log("Array:", arr);
  arr.forEach((index) => {
    console.log(index);
  });

  function Test(str: string) {
    console.log(str);
  }
  Test("This is an argument to `Test` function.");
  Test("This is another.");

  // Arrow Function (continuing from `arr`)
  let arrMap = arr.map((i: number) => {
    return i * 2;
  });
  console.log("Array * 2:", arrMap);

  // return(s) of the main function overlapping another one will block it
  return (
    <>
      <Print str="foo" />
      <Print str="something else" />
    </>
  );

  return (
    // to return multiple lines, use an empty tag to wrap them
    <>
      <h1>Hello, world!</h1>
      <h2>Hello, world!</h2>
      <h1>Age group = {age_group}</h1>
      <a href="https://google.com">→ Go to google.com</a>
    </>
  );
}
