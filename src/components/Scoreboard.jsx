/* eslint-disable react/prop-types */

import { React } from 'react';

export default function Scoreboard(state) {
  const { scoreboardValue } = state;

  return (
    <div className="scoreboard">
      <div>
        Current Score:&nbsp;
        {scoreboardValue.currentScore}
      </div>
      <div>
        Best Score:&nbsp;
        {scoreboardValue.bestScore}
      </div>
    </div>
  );
}
