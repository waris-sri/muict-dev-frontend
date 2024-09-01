// This is an imported function; don't set it to `export default`
export function Print({ str }: { str: string }) {
  if (str === "foo") {
    return <p>foo… bar!</p>;
  } else
    return (
      <>
        <p>You inputted: {str}</p>
      </>
    );
}
