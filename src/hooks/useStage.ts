import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';
import type { PLAYER } from './usePlayer';

export type STAGECELL = [string | number, string];
export type STAGE = STAGECELL[][];

export const useStage = (player: PLAYER, resetPlayer: () => void) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = (newStage: STAGE): STAGE => {
      return newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, [] as STAGE);
    };

    const updateStage = (prevStage: STAGE): STAGE => {
      // First flush the stage
      const newStage = prevStage.map(
        row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as STAGECELL[]
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      // Then check if we got some score if collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    // Here are the updates
    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared] as const;
};
