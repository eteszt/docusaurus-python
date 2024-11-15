import React, { useState } from 'react';
import styles from './styles.module.css';

export function QuizQuestion({ question, options, correctAnswer, explanation, onAnswerSelect }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setIsCorrect(index === correctAnswer);
    setShowExplanation(true);
    onAnswerSelect(index === correctAnswer); // Jelezzük a szülő komponensnek a válasz helyességét
  };

  return (
    <div className={styles.quizQuestion}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`${styles.option} ${
              selectedAnswer === index
                ? isCorrect
                  ? styles.correct
                  : styles.incorrect
                : ''
            }`}
            disabled={showExplanation}
          >
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className={styles.explanation}>
          <p className={isCorrect ? styles.correct : styles.incorrect}>
            {isCorrect ? '✓ Helyes válasz!' : '✗ Helytelen válasz!'}
          </p>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}

export default function Quiz({ questions }) {
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleAnswerSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setAnsweredQuestions(prev => prev + 1);
  };

  const calculateScore = () => {
    setShowFinalScore(true);
  };

  return (
    <div className={styles.quiz}>
      {questions.map((q, index) => (
        <QuizQuestion 
          key={index} 
          {...q} 
          onAnswerSelect={handleAnswerSelect}
        />
      ))}
      <button 
        className={styles.submitButton}
        onClick={calculateScore}
      >
        Kiértékelés
      </button>
      {showFinalScore && (
        <div className={styles.score}>
          Eredmény: {score} / {questions.length} pont
        </div>
      )}
    </div>
  );
}