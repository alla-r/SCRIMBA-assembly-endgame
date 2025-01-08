function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const items = alphabet
    .split("")
    .map((letter) => <button key={letter}>{letter.toUpperCase()}</button>);

  return <section className="keyboard">{items}</section>;
}

export default Keyboard;
