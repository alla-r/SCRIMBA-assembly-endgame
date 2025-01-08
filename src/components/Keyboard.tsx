import clsx from "clsx";

interface KeyboardProps {
  currentWord: string;
  guessedLetters: string[];
  onLetterClickCallback: (letter: string) => void;
  isGameOver: boolean;
}

function Keyboard({
  currentWord,
  guessedLetters,
  onLetterClickCallback,
  isGameOver,
}: KeyboardProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const items = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const classNames = clsx({ correct: isCorrect, wrong: isWrong });

    return (
      <button
        className={classNames}
        key={letter}
        disabled={isGameOver}
        onClick={() => onLetterClickCallback(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{items}</section>;
}

export default Keyboard;
