import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { questions } from './Data';

const Question = ({ questionIndex, onBack }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false); // State to manage celebration visibility

  const currentQuestion = questions[questionIndex];

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const correct =
      currentQuestion.type === 'Text'
        ? userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()
        : userAnswer === currentQuestion.correctAnswer;

    setIsCorrect(correct);
    setIsSubmitted(true);

    // If it's the last question, show celebration only when back is clicked
    if (questionIndex === questions.length - 1) {
      setShowCelebration(false); // Initially hide celebration message
    }
  };

  const tryAgain = () => {
    setIsCorrect(null);
    setIsSubmitted(false);
    setUserAnswer('');
  };

  const handleBack = () => {
    if (questionIndex === questions.length - 1) {
      setShowCelebration(true); // Show celebration when going back from last question
    } else {
      onBack(); // Go back to the previous question
    }
  };

  return (
    <div className="all-Q">
      <div className="question-section">
        {showCelebration ? (
          <div className="completion-message">
            <h3>YOOOHOOO!!!! Laptop Round Is Over......</h3>
            <button onClick={onBack} className="back-button">
              Back
            </button>
          </div>
        ) : (
          <>
            <h2 className="currentQ">{currentQuestion.question}</h2>

            {currentQuestion.image && (
              <div className="image-container">
                <img src={currentQuestion.image} alt="Question-related visual" className="question-image" />
              </div>
            )}

            <div className="options">
              {currentQuestion.type === 'MCQ' || currentQuestion.type === 'True/False' ? (
                currentQuestion.options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      value={option}
                      checked={userAnswer === option}
                      onChange={handleAnswerChange}
                    />
                    {option}
                  </label>
                ))
              ) : (
                <input
                  type="text"
                  placeholder="Type your answer"
                  value={userAnswer}
                  onChange={handleAnswerChange}
                  className="text-input"
                />
              )}
            </div>

            {isSubmitted ? (
              <div className="feedback">
                {isCorrect ? (
                  <div className="correct-answer">
                    <div className="correct-text">
                      <FaCheckCircle className="correct-icon" />
                      <h3>Congratulations! Your answer is correct.</h3>
                      <p className="next-clue-text">Collect Clue For Your Next Location By Our Member.</p>
                      <button onClick={handleBack} className="back-button">
                        Back
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="incorrect-answer">
                    <div className="incorrect-text">
                      <FaTimesCircle className="incorrect-icon" />
                      <h3>Sorry, your answer is incorrect.</h3>
                      <button onClick={tryAgain} className="try-again-button">
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
