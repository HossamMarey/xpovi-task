import React, { useState } from "react";

import Step1 from "./Step1";

const questions = {};

const Ques = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="ques">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-header">Generate business plan </div>
              <div className="p-4">{step === 1 && <Step1 />}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ques;
