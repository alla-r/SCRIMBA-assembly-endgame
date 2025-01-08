type WordProps = {
  word: string;
  guessedLetters: string[];
};

function Word({ word, guessedLetters }: WordProps) {
  const items = word.split("").map((letter, index) => {
    const letterToDisplay = guessedLetters.includes(letter)
      ? letter.toUpperCase()
      : "";

    return <span key={index}>{letterToDisplay}</span>;
  });

  return <section className="word">{items}</section>;
}

export default Word;
