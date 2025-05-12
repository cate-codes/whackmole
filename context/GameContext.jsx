const hitMole = () => {
  setScore((prev) => prev + 1);
  setMolePosition((prev) => {
    let newHole;
    do {
      newHole = Math.floor(Math.random() * 9);
    } while (newHole === prev); // ensure different hole
    return newHole;
  });
};
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef(null);

  const startGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
    setTimeLeft(15);
    setIsPlaying(true);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  };

  const restartGame = () => {
    clearInterval(timerRef.current);
    setIsPlaying(false);
  };

  const hitMole = () => {
    if (timeLeft <= 0) return;
    setScore((prev) => prev + 1);
    setMolePosition((prev) => {
      let newHole;
      do {
        newHole = Math.floor(Math.random() * 9);
      } while (newHole === prev);
      return newHole;
    });
  };

  useEffect(() => {
    if (timeLeft === 0 && timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, [timeLeft]);

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        startGame,
        restartGame,
        score,
        molePosition,
        hitMole,
        timeLeft,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
