import { QuesContext } from "@/context/quesContext";
import React, { useContext } from "react";
import QandA from "./QandA";

const Step1 = () => {
  const { section1Ques, section1QuesValid } = useContext(QuesContext);

  return (
    <div>
      {Object.keys(section1Ques).map((key) => {
        if (section1Ques[key].type === "q&a" && section1Ques[key].show) {
          return <QandA que={section1Ques[key]} qname={key} key={key} />;
        }
      })}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark" disabled={!section1QuesValid}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
