import React, { useContext } from "react";
import { QuesContext } from "@/context/quesContext";

const MCQ = ({ que, qname, secNum }) => {
  const { updateSectionQues } = useContext(QuesContext);
  const updateQue = (qkey) => {
    updateSectionQues(qname, qkey, secNum);
  };
  return (
    <div className="ques__que">
      <h3 className="fs-6 fw-bold">{que.title}</h3>
      {Object.keys(que.answers).map((key) => (
        <div className="form-check" key={key}>
          <input
            className="form-check-input"
            type="radio"
            name={qname}
            id={qname + key}
            onChange={() => updateQue(key)}
            checked={que.answer && que.answer === key ? true : false}
          />
          <label className="form-check-label" htmlFor={qname + key}>
            {que.answers[key]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MCQ;
