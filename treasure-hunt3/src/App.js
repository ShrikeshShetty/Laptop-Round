// App.js
import React, { useState } from 'react';
import Header from './Header';
import Question from './Question';
import './App.css';
import rootImage from './assets/root.png';
import scaleImage from './assets/triangle-scale.png';
import summationImage from './assets/summation.png';
import rounderImage from './assets/rounder.png';
import infinityImage from './assets/infinity.png';
import coneImage from './assets/cone.png';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const startQuiz = () => {
    setIsStarted(true);
  };

  const handleBack = () => {
    setIsStarted(false);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="App">
      
      <div className="body-bg">
        <Header />
        <div className="body-bg2">
          <main>
            {!isStarted ? (
              <button onClick={startQuiz} className="start-button">
                Start
              </button>
            ) : (
              <Question
                questionIndex={questionIndex}
                onBack={handleBack}
              />
            )}
          </main>
        </div>
      </div>
      
      </div>

  );
};

export default App;