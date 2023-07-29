// src/components/PollCreation.js
import React, { useState } from "react";

const PollCreation = ({ addPoll }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPoll({ question, options });
    setQuestion("");
    setOptions(["", ""]);
  };

  return (
    <>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={handleSubmit}>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
        Real-Time Polls App
          </h5>


          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Question:
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="text"
            value={question}
            onChange={handleQuestionChange}
            required
          />
          {options.map((option, index) => (
            <div key={index}>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >{`Option ${index + 1}:`}</label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e)}
                required
              />
            </div>
          ))}
          <button
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setOptions([...options, ""])}
          >
            Add Option
          </button>
          <button
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Create Poll
          </button>
        </form>
      </div>
    </>
  );
};

export default PollCreation;
