import React, { useState } from "react";
import { TETROMINOS } from "./tetrominos";

import Board from "./components/Board";
import Display from "./components/Display";
import StartButton from "./components/StartButton";
import Next from "./components/Next";

import { createStage, checkCollision } from "./gameHelpers";
import {
  StyledTetrisWrapper,
  StyledTetris,
} from "./components/styles/StyledTetris";

// Custom Hooks
import { useInterval } from "./hooks/useInterval";
import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";
import { useGameStatus } from "./hooks/useGameStatus";

const App: React.FC = () => {
  const [dropping, setDropping] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate, nextTetromino] =
    usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir: number) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  };

  const keyUp = (): void => {
    if (!gameOver) {
      // No longer setting dropping to false on keyUp
    }
  };

  const startGame = (): void => {
    // Reset everything
    setStage(createStage());
    setDropping(true); // Start dropping automatically
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
  };

  const drop = (): void => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropping(false);
        return;
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = (): void => {
    setDropping(true);
    drop();
  };

  useInterval(
    () => {
      drop();
    },
    dropping ? 1000 / (level + 1) : null
  );

  const move = ({ keyCode }: { keyCode: number }): void => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Board board={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              <Next
                nextTetromino={nextTetromino.name as keyof typeof TETROMINOS}
              />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
