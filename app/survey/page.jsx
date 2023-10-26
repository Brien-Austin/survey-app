"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import { MoveLeft, MoveRight, SkipForwardIcon } from "lucide-react";
import SurveyRate from "../components/SurveyRate";
import questionData from "../data";
import axios from "axios";
import Link from "next/link";

export default function Survey() {
  const [index, setIndex] = useState(0);
  const [surveyData, setSurveyData] = useState([]); // Array to store surveyData
  const router = useRouter;

  const handleNext = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleSubmit = (question, response) => {
    // Find the response object in the array and update it
    const updatedResponses = [...surveyData];
    updatedResponses[index] = {
      question: question,
      rating: response,
    };
    setSurveyData(updatedResponses);
  };

  const onNextQuestion = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleFinalSubmit = () => {
    console.log("Final Responses:", surveyData);
    axios
      .post("/api/submit", { surveyData })
      .then((response) => {
        console.log("Survey data submitted successfully.");
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error submitting survey data:", error);
      });
  };

  return (
    <>
      <div key={index}>
        <SurveyRate
          q={questionData[index].question}
          r={questionData[index].rating}
          isFinalQuestion={index === questionData.length - 1}
          response={surveyData[index]}
          onSubmit={handleSubmit}
          onNextQuestion={onNextQuestion}
        />
        <button
          onClick={handlePrev}
          className="fixed bottom-8 left-8 bg-black px-2 py-2 rounded-md text-white"
        >
          <MoveLeft />
        </button>
        <button
          onClick={handleNext}
          className="fixed top-8 w-fit left-1/2 transform -translate-x-1/2 right-8 bg-black px-2 py-2 rounded-md text-white"
        >
          <h1 className="text-white font-semibold">Skip</h1>
        </button>
        <button
          onClick={handleNext}
          className="fixed bottom-8 right-8 bg-black px-2 py-2 rounded-md text-white"
        >
          <MoveRight />
        </button>
        {index === questionData.length - 1 && (
          <Link
            href={"submitted"}
            onClick={handleFinalSubmit}
            className="fixed bottom-8 w-fit left-1/2 transform -translate-x-1/2  px-4 py-3 rounded-md text-white  bg-black font-semibold"
          >
            Submit your Survey
          </Link>
        )}
      </div>
    </>
  );
}
