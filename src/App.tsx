import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters((prevLetters) => {
      const newLetters = prevLetters.includes(letter)
        ? prevLetters
        : [...prevLetters, letter];

      return newLetters;
    });
  };

  return (
    <>
      <Header />
      <GameStatus />
      <Languages />
      <Word word={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        onLetterClickCallback={addGuessedLetter}
      />
      <NewGameButton />
    </>
  );
}

export default App;
