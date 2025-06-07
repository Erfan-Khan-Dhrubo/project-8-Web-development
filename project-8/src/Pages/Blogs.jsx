import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Question from "../Components/Blogs/Question";

const Blogs = () => {
  const data = useLoaderData();

  return (
    <div className="w-9/10 mx-auto md:p-12 sm:p-4 p-2 flex flex-col items-center gap-8">
      <h4 className="font-bold text-3xl">Blogs</h4>
      <p className="text-grey text-center">
        Let's explore some basic concept that will make you a good developer
      </p>
      <div className="flex flex-col gap-8 w-full">
        <Suspense fallback={<span>Loading ......</span>}>
          {data.map((singleQuestion) => (
            <Question
              key={singleQuestion.id}
              singleQuestion={singleQuestion}
            ></Question>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Blogs;
