import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import contestsData from './contests.json';
import pinsData from './pins.json';

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

const contests: Contest[] = contestsData;

const ContestCard: React.FC<{ contest: Contest; onRegister: (contestId: number) => void }> = ({ contest, onRegister }) => {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          প্রতিযোগিতা
        </span>
        <span className="text-sm">শেষ তারিখ: {contest.deadline}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={contest.moreDetailsLink}>{contest.title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {contest.description}
      </p>
      <div className="mb-4 text-gray-500">
        <p className="text-sm">ফি: {contest.fee}</p>
        <p className="text-sm">পুরস্কার: {contest.prize}</p>
        <p className="text-sm">প্রথম রাউন্ড: {contest.firstRound}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onRegister(contest.id)}
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          নিবন্ধন করুন
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <a
          href={contest.moreDetailsLink}
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          বিস্তারিত জানুন
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
};

const RegisterModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  contestId: number;
  contestTitle: string;
}> = ({ isOpen, onClose, contestId, contestTitle }) => {
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPin = pinsData.find((p) => p.contestId === contestId)?.pin;
    if (validPin && pin === validPin) {
      setMessage(`Successfully registered for ${contestTitle}!`);
      setIsSuccess(true);
      setTimeout(() => {
        navigate(`/contest/${contestId}`);
      }, 2000); // Redirect after 2 seconds
    } else {
      setMessage('Invalid pin code. Please try again.');
      setIsSuccess(false);
    }
    setPin('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      aria-hidden={!isOpen}
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {message ? (
            <>
              <div
                className={`w-12 h-12 rounded-full ${
                  isSuccess ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                } p-2 flex items-center justify-center mx-auto mb-3.5`}
              >
                <svg
                  aria-hidden="true"
                  className={`w-8 h-8 ${
                    isSuccess ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      isSuccess
                        ? 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        : 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    }
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">{isSuccess ? 'Success' : 'Error'}</span>
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {message}
              </p>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={onClose}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Register for {contestTitle}
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter Pin Code"
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AllContest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContestId, setSelectedContestId] = useState<number | null>(null);

  const handleRegister = (contestId: number) => {
    setSelectedContestId(contestId);
    setIsModalOpen(true);
  };

  const selectedContest = contests.find((c) => c.id === selectedContestId);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              সকল প্রতিযোগিতা
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              আপনার প্রতিভা এবং দক্ষতা প্রদর্শনের জন্য চলমান এবং আসন্ন সব প্রতিযোগিতার তালিকা এখানে।
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {contests.map((contest) => (
              <ContestCard key={contest.id} contest={contest} onRegister={handleRegister} />
            ))}
          </div>
        </div>
      </section>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedContestId(null);
        }}
        contestId={selectedContestId || 0}
        contestTitle={selectedContest?.title || ''}
      />
    </>
  );
}