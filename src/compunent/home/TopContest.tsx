export default function TopContest() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              শীর্ষ প্রতিযোগিতা
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              আপনার দক্ষতা প্রদর্শনের জন্য এখন চলছে সবচেয়ে উত্তেজনাপূর্ণ প্রতিযোগিতাগুলো এখানে আবিষ্কার করুন!
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  {/* প্রতিযোগিতার ধরণ আইকন */}
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  কোডিং প্রতিযোগিতা
                </span>
                <span className="text-sm">১৪ দিনের মধ্যে শুরু হবে</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">দ্রুত কোড চ্যালেঞ্জ ২০২৫</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                আপনার অ্যালগরিদম দক্ষতা পরীক্ষা করুন এই সময়সীমাবদ্ধ চ্যালেঞ্জে এবং বিশ্বজুড়ে প্রোগ্রামারদের সঙ্গে প্রতিদ্বন্দ্বিতা করুন পুরস্কার জেতার জন্য।
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="প্রতিযোগিতা হোস্ট"
                  />
                  <span className="font-medium dark:text-white">কোডমাস্টার ইনক.</span>
                </div>
                <a
                  href="#"
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
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800">
                  {/* প্রতিযোগিতার ধরণ আইকন */}
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  ডিজাইন প্রতিযোগিতা
                </span>
                <span className="text-sm">চলমান</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">সৃজনশীল লোগো ডিজাইন ২০২৫</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                আমাদের নতুন ব্র্যান্ড প্রচারণার জন্য একটি অনন্য লোগো ডিজাইন করে আপনার সৃজনশীলতা প্রদর্শন করুন। নগদ পুরস্কার এবং স্বীকৃতি জিতে নিন!
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="প্রতিযোগিতা হোস্ট"
                  />
                  <span className="font-medium dark:text-white">ডিজাইনপ্রো এজেন্সি</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-green-600 dark:text-green-500 hover:underline"
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
          </div>
        </div>
      </section>
    </>
  );
}
