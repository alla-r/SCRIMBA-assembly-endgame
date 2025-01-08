import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";
import languages from "./languages";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const numGuessesLeft = languages.length - 1 - wrongGuessCount;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    (lastGuessedLetter && !currentWord.includes(lastGuessedLetter)) || false;

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters((prevLetters) => {
      const newLetters = prevLetters.includes(letter)
        ? prevLetters
        : [...prevLetters, letter];

      return newLetters;
    });
  };

  return (
    <main>
      <Header />
      <GameStatus
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        isLastGuessIncorrect={isLastGuessIncorrect}
        language={
          (isLastGuessIncorrect && languages[wrongGuessCount - 1].name) || ""
        }
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word word={currentWord} guessedLetters={guessedLetters} />
      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        onLetterClickCallback={addGuessedLetter}
        isGameOver={isGameOver}
      />
      {isGameOver && <NewGameButton />}
    </main>
  );
}

export default App;
