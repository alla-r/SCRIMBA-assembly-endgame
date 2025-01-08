type WordProps = {
  word: string;
};

function Word({ word }: WordProps) {
  const items = word
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  return <section className="word">{items}</section>;
}

export default Word;
