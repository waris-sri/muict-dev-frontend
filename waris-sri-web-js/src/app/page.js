import {
  Buttons,
  NumberInputs,
  PasswordInputs,
  TextInputs,
} from "./components";

export default function Home() {
  /* Start JavaScript */
  let firstName = "John";
  let lastName = "Doe";
  const age = 18;
  if (age >= 21) {
    console.log("You're an adult");
  } else {
    console.log("You're not an adult yet");
  }

  // While loop
  let cnt = 0;
  while (cnt < 5) {
    console.log("While loop count: " + cnt);
    cnt++;
  }

  // For loop
  for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
  }

  // For each
  let arr = [1, 2, 3, 4, 5];
  arr.forEach((num) => {
    console.log(num);
  });

  // Named function
  function greet(person) {
    return "Hey, " + person + "!";
  }
  console.log(greet("Japan"));

  // Unnamed function
  let welcome = (person) => {
    return "Hey, " + person + "!";
  };
  console.log(welcome("Japan"));

  // Lambda/arrow function
  const num = [1, 2, 3, 4, 5];
  const double = num.map((x) => x * 2);
  console.log(num, double);

  /* Start HTML */
  return (
    <>
      <div>
        <h1> ICT Mahidol DevClub</h1>
        <h2>Please enter your basic information</h2>
        <div class="input-container">
          <NumberInputs Placeholder={"Student ID"}></NumberInputs>
          <br />
          <TextInputs Placeholder={"First Name"}></TextInputs>
          <br />
          <TextInputs Placeholder={"Last Name"}></TextInputs>
          <br />
        </div>
        <h2>Please enter your credentials</h2>
        <TextInputs Placeholder={"Username"}></TextInputs>
        <br />
        <PasswordInputs Placeholder={"Password"}></PasswordInputs>
        <br />
        <ul>
          <li>8–16 characters</li>
          <li>At least 1 uppercase, 1 lowercase, and 1 number</li>
          <li>Can contain special characters</li>
        </ul>
        <PasswordInputs Placeholder={"Re-enter your password"}></PasswordInputs>
        <br />
        <div class="button-container">
          <Buttons TextColor={"#ffffff"} ButtonText={"Register"}></Buttons>
        </div>
        <h6>Already have an account?</h6>
        <div class="button-container">
          <Buttons TextColor={"#ffffff"} ButtonText={"Login"}></Buttons>
          <Buttons
            TextColor={"#ffffff"}
            ButtonText={"Forgot password?"}
          ></Buttons>
        </div>
      </div>
    </>
  );
}
