import React from "react";
import { CalendarHeart } from "lucide-react";

const Question = ({ singleQuestion }) => {
  const { answer, question, date } = singleQuestion;
  return (
    <div className="rounded-2xl bg-white p-8 flex flex-col gap-4">
      <p className="font-bold text-lg">{question}</p>
      <div className="w-full border-t-2 border-dotted border-gray-300"></div>
      <div>
        <p className="text-blue-500 font-semibold">Answer:</p>
        <p className="text-grey">{answer}</p>
      </div>
      <div className="w-full border-t-2 border-dotted border-gray-300"></div>
      <div className="text-grey flex gap-2">
        <CalendarHeart /> Added at {date}
      </div>
    </div>
  );
};

export default Question;
