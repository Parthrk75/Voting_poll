import React from "react";

const PollListing = ({ polls, handleVote }) => {
  return (
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h1 class="text-xl font-medium text-gray-900 dark:text-white">
          Active Polls
        </h1>
        <br />
        <ul>
          {polls.map((poll) => (
            <li key={poll.id}>
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                {poll.question}
              </h3>
              <br />

              {poll.options.map((option, index) => (
                <div key={index}>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    type="radio"
                    name={`poll_${poll.id}`}
                    onChange={() => handleVote(poll.id, index)}
                  />

                  <div>
                   
                  </div>
                  <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <label class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {option}
                          </label>
                        </div>
                        <span class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"> - Votes: {poll.votes[index]}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PollListing;
