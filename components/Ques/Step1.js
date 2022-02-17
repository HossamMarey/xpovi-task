import { QuesContext } from "@/context/QuesContext";
import React, { useContext } from "react";
import MCQ from "./MCQ";

const Step1 = () => {
  const { section1Ques, section1QuesValid, setStep } = useContext(QuesContext);

  const goToStep2 = () => {
    if (section1QuesValid) {
      setStep(2);
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
      <div className="d-flex justify-content-end mt-4">
        <button
          className="btn btn-secondary"
          disabled={!section1QuesValid}
          onClick={goToStep2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
