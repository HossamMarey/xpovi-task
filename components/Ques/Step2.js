import React, { useContext } from "react";
import { QuesContext } from "@/context/quesContext";

import MCQ from "./MCQ";
import QNumber from "./QNumber";

const Step2 = () => {
  const { section2Ques, section2QuesValid, setStep } = useContext(QuesContext);

  const goToStepEnd = () => {
    if (section2QuesValid) {
      setStep("end");
    }
  };

  return (
    <div>
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
          className="btn btn-secondary"
          disabled={!section2QuesValid}
          onClick={goToStepEnd}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
