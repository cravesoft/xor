import { Game } from 'boardgame.io/core';

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pos of positions) {
    const symbol = cells[pos[0]];
    let winner = symbol;
    for (let i of pos) {
      if (cells[i] != symbol) {
        winner = null;
        break;
      }
    }
    if (winner != null) return true;
  }

  return false;
}

const Xor = Game({
  name: 'xor',

  setup: () => ({
    cells: Array(9).fill(null),
  }),

  moves: {
    clickCell(G, ctx, id) {
      const cells = [...G.cells];
      const tags = ['X', 'O', 'R'];

      if (ctx.currentPlayer !== '2') {
        if (cells[id] === null || cells[id] === 'R') {
          cells[id] = tags[ctx.currentPlayer];
        }
      } else {
        if (cells[id] !== null && cells[id] !== 'R') {
          cells[id] = tags[ctx.currentPlayer];
        }
      }

      return { ...G, cells };
    },
  },

  flow: {
    movesPerTurn: 1,

    endGameIf: (G, ctx) => {
      if (IsVictory(G.cells)) {
        return { winner: ctx.currentPlayer };
      }
      if (
        G.cells.filter(c => c === null).length == 0 &&
        ctx.currentPlayer !== '2'
      ) {
        return { draw: true };
      }
    },
  },
});

export default Xor;
