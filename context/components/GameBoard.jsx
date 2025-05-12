import React from "react";
import { useGame } from "../context/GameContext";
import Hole from "./Hole";

const GameBoard = () => {
  const { score, molePosition, hitMole, restartGame } = useGame();

  return (
    <div className="game-board">
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
      <div className="holes-grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <Hole
            key={index}
            hasMole={index === molePosition}
            onClick={hitMole}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
