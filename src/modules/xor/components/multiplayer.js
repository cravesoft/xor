import React from 'react';
import { Client } from 'boardgame.io/react';
import Xor from '../game';
import Board from './board';

const App = Client({
  game: Xor,
  board: Board,
  debug: false,
  multiplayer: true,
  numPlayers: 3,
});

const Multiplayer = () => (
  <div style={{ padding: 50 }}>
    <h1>Multiplayer</h1>
    <div className="runner">
      <div className="run">
        <App gameID="multi" playerID="0" />
        &lt;App playerID=&quot;0&quot;/&gt;
      </div>
      <div className="run">
        <App gameID="multi" playerID="1" />
        &lt;App playerID=&quot;1&quot;/&gt;
      </div>
      <div className="run">
        <App gameID="multi" playerID="2" />
        &lt;App playerID=&quot;2&quot;/&gt;
      </div>
    </div>
  </div>
);

export default Multiplayer;
