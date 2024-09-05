export function CTA({ ButtonText, TextColor }) {
  return (
    <>
      <button
        type="submit"
        className="button-cta"
        // 2 brackets because we need to pass an object inside (JSON)
        style={{
          color: TextColor,
        }}
        required
      >
        {ButtonText}
      </button>
    </>
  );
}

export function Buttons({ ButtonText, TextColor }) {
  return (
    <>
      <button
        type="button"
        className="button"
        style={{
          color: TextColor,
        }}
        required
      >
        {ButtonText}
      </button>
    </>
  );
}

export function StudentID({ Placeholder }) {
  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        pattern="\d{7}$"
        placeholder={Placeholder}
        maxLength={7}
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
        style={{ fontFamily: "monospace" }}
        required
      />
    </>
  );
}
