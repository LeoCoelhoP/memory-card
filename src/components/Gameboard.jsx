import React from 'react';
import CardImage from './Card';

let clicked = [];

export default function Gameboard(state) {
  const { scoreboardValue, setScoreboardValue } = state;
  const options = [0, 1, 2, 3, 4, 5, 6, 7];

  function clickHandler(e) {
    const target = e.target.dataset.url;

    if (!clicked.includes(target)) {
      setScoreboardValue({
        ...scoreboardValue,
        currentScore: scoreboardValue.currentScore + 1,
      });
      clicked.push(target);
    } else {
      clicked = [];
      setScoreboardValue({
        ...scoreboardValue,
        currentScore: 0,
      });
    }
  }

  const shuffledOptions = options
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="gameboard">
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage name="imageOne" value={shuffledOptions[0]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[1]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[2]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[3]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[4]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[5]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[6]} />
      </div>
      <div className="card" onClick={clickHandler} role="presentation">
        <CardImage value={shuffledOptions[7]} />
      </div>
    </div>
  );
}
