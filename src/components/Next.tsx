import React from 'react';
import { StyledNext } from './styles/StyledNext';
import Cell from './Cell';
import { TETROMINOS } from '../tetrominos';

interface Props {
  nextTetromino: keyof typeof TETROMINOS;
}

const Next: React.FC<Props> = ({ nextTetromino }) => {
  const shape = TETROMINOS[nextTetromino].shape;
  const width = shape[0].length;
  const height = shape.length;

  return (
    <StyledNext width={width} height={height}>
      {shape.map(row =>
        row.map((cell, x) => <Cell key={x} type={cell as keyof typeof TETROMINOS | 0} />)
      )}
    </StyledNext>
  );
};

export default Next;
