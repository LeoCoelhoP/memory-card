/* eslint-disable operator-linebreak */
import { React, useState } from 'react';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

export default function App() {
  const [scoreboardValue, setScoreboardValue] = useState({
    currentScore: 0,
    bestScore: Number(localStorage.getItem('bestScore')),
  });

  if (
    scoreboardValue.bestScore < scoreboardValue.currentScore ||
    typeof scoreboardValue.bestScore !== 'number'
  ) {
    localStorage.setItem('bestScore', scoreboardValue.currentScore);
    setScoreboardValue({
      ...scoreboardValue,
      bestScore: scoreboardValue.currentScore,
    });
  }

  return (
    <>
      <Scoreboard
        scoreboardValue={scoreboardValue}
        setScoreboardValue={setScoreboardValue}
      />
      <Gameboard
        scoreboardValue={scoreboardValue}
        setScoreboardValue={setScoreboardValue}
      />
    </>
  );
}
