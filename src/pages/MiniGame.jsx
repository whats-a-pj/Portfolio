import React, { useState, useEffect, useCallback } from 'react';
// import './App.css';

const numRows = 20;
const numCols = 10;
const cellSize = 30;

const tetriminos = {
  I: [
    [1, 1, 1, 1],
  ],
  J: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};

const randomTetrimino = () => {
  const tetriminoKeys = Object.keys(tetriminos);
  const randomKey = tetriminoKeys[Math.floor(Math.random() * tetriminoKeys.length)];
  return tetriminos[randomKey];
};

const App = () => {
  const [board, setBoard] = useState(Array.from({ length: numRows }, () => Array(numCols).fill(0)));
  const [tetrimino, setTetrimino] = useState(randomTetrimino());
  const [position, setPosition] = useState({ row: 0, col: Math.floor(numCols / 2) - 1 });

  const moveLeft = useCallback(() => {
    // Move Tetrimino left
    // Update the position state
  }, []);

  const moveRight = useCallback(() => {
    // Move Tetrimino right
    // Update the position state
  }, []);

  const rotate = useCallback(() => {
    // Rotate Tetrimino
    // Update the tetrimino state
  }, []);

  const drop = useCallback(() => {
    // Move Tetrimino down
    // Check for collisions with the board
    // Update the board state and spawn a new Tetrimino if necessary
  }, []);

  useEffect(() => {
    // Handle user keyboard input for controls
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') moveLeft();
      else if (e.key === 'ArrowRight') moveRight();
      else if (e.key === 'ArrowUp') rotate();
      else if (e.key === 'ArrowDown') drop();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [moveLeft, moveRight, rotate, drop]);

  useEffect(() => {
    // Game loop
    const gameInterval = setInterval(() => {
      drop();
    }, 1000);

    return () => {
      clearInterval(gameInterval);
    };
  }, [drop]);

  // Render the game board, Tetrimino, and controls
  return (
    <div className="app">
      <div className="game-board">
        {/* Render the game board using CSS Grid */}
      </div>
      <div className="controls">
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
        <button onClick={rotate}>Rotate</button>
        <button onClick={drop}>Drop</button>
      </div>
    </div>
  );
};

export default App;
