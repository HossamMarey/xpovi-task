import React, { useContext, useState } from "react";
import { QuesContext } from "@/context/quesContext";

const QNumber = ({ que, qname, secNum }) => {
  const { updateSectionQues } = useContext(QuesContext);

  const updateQue = (e) => {
    if (typeof +e.target.value !== "number") {
      return;
    }

    if (+e.target.value < 0) {
      updateSectionQues(qname, "", secNum);
    } else {
      updateSectionQues(qname, +e.target.value, secNum);
    }
  };
  return (
    <div className="ques__que">
      <div className="mb-3">
        <label htmlFor={qname} className="form-label fs-6 fw-bold text-header">
          {que.title}
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Investment in USD"
          name={qname}
          id={qname}
          onChange={updateQue}
          value={que.answer}
        />
      </div>
    </div>
  );
};

export default QNumber;
