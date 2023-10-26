"use client";

import { useState } from "react";

export default function SurveyRate({
  q,
  r,
  isFinalQuestion,
  response,
  onSubmit,
  onNextQuestion,
}) {
  const [rating, setRating] = useState(response ? response.rating : "");

  const handleRatingClick = (rating) => {
    setRating(rating);
    if (onSubmit) {
      onSubmit(q, rating);
    }

    if (onNextQuestion) {
      onNextQuestion();
    }
  };

  if (typeof r === "number" && r >= 1) {
    const radioInputs = [];
    for (let i = 1; i <= r; i++) {
      radioInputs.push(
        <input
          type="radio"
          name="options"
          data-title={i}
          className={`btn hover:bg-black active:bg-black focus:bg-black hover:text-white ${
            rating === i ? "active" : ""
          }`}
          key={i}
          onClick={() => handleRatingClick(i)}
        />
      );
    }

    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border px-2 rounded-lg shadow-2xl w-4/5">
        <h1 className="mt-10 text-center mb-10">{q}</h1>
        <div className="btn-group flex justify-center gap-2 items-center flex-wrap mb-10">
          {radioInputs}
        </div>
        {isFinalQuestion && (
          <button
            onClick={() => onSubmit(q, rating)}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border px-2 rounded-lg shadow-2xl w-4/5">
        <h1 className="mt-10 text-center mb-10">{q}</h1>
        <input
          type="text"
          placeholder="Enter your response"
          className="text-input mb-10 mx-auto rounded h-10 px-2 w-full"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        {isFinalQuestion && (
          <button
            onClick={() => onSubmit(q, rating)}
            className="border border-black w-full mb-1 text-black font-semibold px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        )}
      </div>
    );
  }
}
