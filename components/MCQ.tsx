"use client"
import React from 'react';

interface QuestionData {
  question: string;
  options: string[];
}

interface Props {
  data: QuestionData[];
}

const MCQ = ({ data }: Props) => {
  const submitAns = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedAnswer = formData.get('questions');
    console.log('Selected Answer:', selectedAnswer);
   //Sending to the backend
  };

  return (
    <section className='w-full h-96 flex justify-center mt-8'>
      <div className='w-196'>
        {data.map((e, index) => (
          <form className='py-4 px-6' onSubmit={submitAns} key={index}>
            <label className="flex flex-col">
              <h1 className='font-bold text-xl pb-3'>{e.question}</h1>
              <select className='focus:border-none bg-white py-3 rounded-xl px-4' name="questions">
                <option disabled value="">Select an option</option>
                {e.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-black py-2 text-white px-4 rounded-md hover:bg-gray-700 cursor-pointer my-4 font-bold"
              >
                Submit
              </button>
            </label>
          </form>
        ))}
      </div>
    </section>
  );
};

export default MCQ;