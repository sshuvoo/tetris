import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

interface Props {
  callback: () => void;
}

const StartButton: React.FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
