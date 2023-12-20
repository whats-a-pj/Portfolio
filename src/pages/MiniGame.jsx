//todo spacebar game like the no internet dino

import React, { useState, useEffect } from 'react';
// import './App.css'; // Your CSS file for styling

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Handle the spacebar press
  const handleKeyPress = (event) => {
    if (event.keyCode === 32) {
      // Implement jump logic
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Game loop and logic here

  return (
    <div className="game-area">
      {/* Game rendering logic */}
    </div>
  );
}

export default App;
