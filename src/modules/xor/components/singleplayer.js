import React from 'react';
import { Client } from 'boardgame.io/react';
import { AI } from 'boardgame.io/ai';
import Xor from '../game';
import Board from './board';

const App = Client({
  game: Xor,
  board: Board,
  numPlayers: 3,
  ai: AI({
    enumerate: (G, ctx) => {
      let r = [];
      for (let i = 0; i < 9; i++) {
        if (ctx.currentPlayer !== '2') {
          if (G.cells[i] === null || G.cells[i] === 'R') {
            r.push({ move: 'clickCell', args: [i] });
          }
        } else {
          if (G.cells[i] !== null && G.cells[i] !== 'R') {
            r.push({ move: 'clickCell', args: [i] });
          }
        }
      }
      return r;
    },
  }),
});

const Singleplayer = () => (
  <div style={{ padding: 50 }}>
    <h1>Singleplayer</h1>
    <App gameID="single" />
  </div>
);

export default Singleplayer;
