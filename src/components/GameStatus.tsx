import clsx from "clsx";
import { getFarewellText } from "../utils";

interface GameStatusProps {
  isGameLost: boolean;
  isGameWon: boolean;
  isLastGuessIncorrect: boolean;
  language: string;
}

function GameStatus({
  isGameLost,
  isGameWon,
  isLastGuessIncorrect,
  language,
}: GameStatusProps) {
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: isLastGuessIncorrect && !isGameLost,
  });

  return (
    <section className={gameStatusClass}>
      {isGameWon && (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )}

      {isGameLost && (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )}

      {isLastGuessIncorrect && !isGameLost && (
        <p className="farewell-message">{getFarewellText(language)}</p>
      )}
    </section>
  );
}

export default GameStatus;
