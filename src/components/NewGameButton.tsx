interface NewGameButtonProps {
  onCLickCallback: () => void;
}

function NewGameButton({ onCLickCallback }: NewGameButtonProps) {
  return (
    <button onClick={onCLickCallback} className="new-game">
      New Game
    </button>
  );
}

export default NewGameButton;
