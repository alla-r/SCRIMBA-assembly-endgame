import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react");

  return (
    <>
      <Header />
      <GameStatus />
      <Languages />
      <Word word={currentWord} />
      <Keyboard />
      <NewGameButton />
    </>
  );
}

export default App;
