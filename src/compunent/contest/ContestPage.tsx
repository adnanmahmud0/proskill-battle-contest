import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import contestsData from './contests.json';
import questionsData from './question.json';

// Define TypeScript interfaces
interface Contest {
  id: number;
  title: string;
  description: string;
  fee: string;
  prize: string;
  deadline: string;
  firstRound: string;
  registrationLink: string;
  moreDetailsLink: string;
}

interface Question {
  id: number;
  contestId: number;
  text: string;
  answer: string;
}

const contests: Contest[] = contestsData;
const questions: Question[] = questionsData;

const ContestPage: React.FC = () => {
  const { contestId } = useParams<{ contestId: string }>();
  const navigate = useNavigate();
  const contest = contests.find((c) => c.id === parseInt(contestId || '0'));
  const contestQuestions = questions.filter((q) => q.contestId === parseInt(contestId || '0'));
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(contestQuestions.length).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!contest) {
      navigate('/'); // Redirect to home if contest not found
    }
  }, [contest, navigate]);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < contestQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Simulate answer validation
    const results = contestQuestions.map((q, index) => ({
      questionId: q.id,
      isCorrect: q.answer.toLowerCase() === answers[index].toLowerCase(),
    }));
    setIsSubmitted(true);
    // In a real app, send results to a server
    console.log('Submission Results:', results);
    setTimeout(() => {
      navigate('/'); // Redirect to home after submission
    }, 2000);
  };

  if (!contest) return null;

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {contest.title}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {contest.description}
          </p>
        </div>

        {!hasStarted ? (
          <div className="flex justify-center">
            <button
              onClick={handleStart}
              className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Start Contest
            </button>
          </div>
        ) : isSubmitted ? (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Success</span>
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Contest submitted successfully!
            </p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Question {currentQuestionIndex + 1} of {contestQuestions.length}
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                {contestQuestions[currentQuestionIndex].text}
              </p>
              <input
                type="text"
                value={answers[currentQuestionIndex]}
                onChange={handleAnswerChange}
                placeholder="Enter your answer"
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-4"
              />
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`py-2 px-4 text-sm font-medium text-white rounded-lg ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900'
                  }`}
                >
                  Previous
                </button>
                {currentQuestionIndex < contestQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="py-2 px-4 text-sm font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="py-2 px-4 text-sm font-medium text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900"
                  >
                    Finish
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContestPage;