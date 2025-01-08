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

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

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
        language={isLastGuessIncorrect && languages[wrongGuessCount - 1].name}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word word={currentWord} guessedLetters={guessedLetters} />
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
