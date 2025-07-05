import React from 'react';
import { StyledBoard } from './styles/StyledBoard';
import Cell from './Cell';
import type { STAGE } from '../hooks/useStage';
import { TETROMINOS } from '../tetrominos';

interface Props {
  board: STAGE;
}

const Board: React.FC<Props> = ({ board }) => (
  <StyledBoard width={board[0].length} height={board.length}>
    {board.map(row => row.map((cell, x) => <Cell key={x} type={cell[0] as keyof typeof TETROMINOS | 0} />))}
  </StyledBoard>
);

export default Board;
