import clsx from "clsx";

type WordProps = {
  word: string;
  guessedLetters: string[];
  isGameLost: boolean;
};

function Word({ word, guessedLetters, isGameLost }: WordProps) {
  const items = word.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const classNames = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );

    return (
      <span key={index} className={classNames}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word">{items}</section>;
}

export default Word;
