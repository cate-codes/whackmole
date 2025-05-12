import React from "react";
import { GameProvider, useGame } from "./context/GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";
import "./index.css";

const AppContent = () => {
  const { isPlaying } = useGame();
  return isPlaying ? <GameBoard /> : <WelcomeScreen />;
};

const App = () => (
  <GameProvider>
    <AppContent />
  </GameProvider>
);

export default App;
