import { QuesContext } from "@/context/QuesContext";
import axios from "axios";
import React, { useContext, useState } from "react";

import MCQ from "./MCQ";
import QNumber from "./QNumber";

const Answers = () => {
  const {
    section1Ques,
    section2Ques,
    section1QuesValid,
    section2QuesValid,
    setStep,
    setMessage,
  } = useContext(QuesContext);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (section1QuesValid && section2QuesValid) {
      try {
        setLoading(true);
        // post to mock api
        const { data } = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            ...section1Ques,
            ...section2Ques,
          }
        );
        console.log("RESPONSE DATA : ", data);

        // show message of success
        setLoading(false);
        setStep("message");
        setMessage({
          type: "success",
          text: "your answers are submitted successfully",
        });
      } catch (error) {
        setLoading(false);
        setStep("danger");
        setMessage({ type: "success", text: error.message });
      }
    }
  };

  return (
    <div>
      {Object.keys(section1Ques).map((key) => {
        if (section1Ques[key].type === "mcq" && section1Ques[key].show) {
          return (
            <MCQ que={section1Ques[key]} qname={key} secNum={1} key={key} />
          );
        }
      })}
      {Object.keys(section2Ques).map((key) => {
        if (section2Ques[key].type === "mcq" && section2Ques[key].show) {
          return (
            <MCQ que={section2Ques[key]} qname={key} secNum={2} key={key} />
          );
        } else if (
          section2Ques[key].type === "numbersInput" &&
          section2Ques[key].show
        ) {
          return (
            <QNumber que={section2Ques[key]} qname={key} secNum={2} key={key} />
          );
        }
      })}
      <div className="d-flex justify-content-end mt-4">
        <button
          className="btn btn-primary "
          disabled={!section1QuesValid || !section2QuesValid || loading}
          onClick={handleSubmit}
        >
          {loading && (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Submit
        </button>
      </div>
    </div>
  );
};

export default Answers;
