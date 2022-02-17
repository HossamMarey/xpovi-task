import { QuesContext } from "@/context/QuesContext";
import React, { useContext, useState } from "react";
import Answers from "./Answers";
import Message from "./Message";

import Step1 from "./Step1";
import Step2 from "./Step2";

const questions = {};

const Ques = () => {
  const { step } = useContext(QuesContext);

  return (
    <section className="ques">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-header">Generate business plan </div>
              <div className="p-4">
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === "end" && <Answers />}
                {step === "message" && <Message />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ques;
