import React, { useState } from 'react';

const questions = [
  {
    question: "What command is used to initialize a new Git repository?",
    options: ["git init", "git start", "git create", "git new"],
    answer: "git init",
  },
  {
    question: "How do you stage changes for commit?",
    options: ["git add", "git stage", "git commit", "git push"],
    answer: "git add",
  },
  // Add more questions as needed
];

const GitGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="game-container">
      <h2 className="text-2xl font-bold mb-4">Learn Git with Our Interactive Game</h2>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-text">{questions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GitGame; 