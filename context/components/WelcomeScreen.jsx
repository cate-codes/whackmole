import React from "react";
import { useGame } from "../context/GameContext";

const WelcomeScreen = () => {
  const { startGame } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whac-a-Mole!</h1>
      <p>Click the mole to score points. Ready?</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default WelcomeScreen;
