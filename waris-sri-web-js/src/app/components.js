export function Buttons({ ButtonText, TextColor }) {
  return (
    <>
      <button
        type="button"
        className="button"
        // 2 brackets because we need to pass an object inside (JSON)
        style={{
          color: TextColor,
        }}
      >
        {ButtonText}
      </button>
    </>
  );
}

export function NumberInputs({ Placeholder }) {
  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={Placeholder}
        required
      ></input>
    </>
  );
}

export function TextInputs({ Placeholder }) {
  return (
    <>
      <input type="text" placeholder={Placeholder} required></input>
    </>
  );
}

export function PasswordInputs({ Placeholder }) {
  return (
    <>
      <input
        type="password"
        placeholder={Placeholder}
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        minLength={8}
        maxLength={16}
        required
      />
    </>
  );
}
