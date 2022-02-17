/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

const QuesContext = createContext();

const s1QuesInitial = {
  s1q1: {
    type: "mcq",
    title: "Is your business model B2C or B2B or both?",
    answers: { A: "A. B2C", B: "B. B2B", C: "C. both" },
    answer: null,
    show: true,
  },
  s1q2: {
    type: "mcq",
    title: "Do you target all age brackets?",
    answers: { A: "A. yes", B: "B. no" },
    answer: null,
    show: false,
  },
  s1q3: {
    type: "mcq",
    title: "Do you target all industries?",
    answers: { A: "A. yes", B: "B. no" },
    answer: null,
    show: false,
  },
};
const s2QuesInitial = {
  s2q1: {
    type: "mcq",
    title: "Did you have an investment?",
    answers: { A: "yes", B: "no" },
    answer: null,
    show: true,
  },
  s2q2: {
    type: "numbersInput",
    title: "how much was the investment?",
    answer: "",
    show: false,
  },
};

const QuesState = (props) => {
  const [step, setStep] = useState(1);
  const [section1Ques, setSection1Ques] = useState(s1QuesInitial);
  const [section2Ques, setSection2Ques] = useState(s2QuesInitial);

  const [section1QuesValid, setSection1QuesValid] = useState(false);
  const [section2QuesValid, setSection2QuesValid] = useState(false);

  const [message, setMessage] = useState({ type: null, text: "" });

  // check s1 q1 answer to show or hide other ques
  useEffect(() => {
    if (section1Ques.s1q1.answer !== null) {
      let answer = section1Ques.s1q1.answer;
      let answers = section1Ques.s1q1.answers;
      if (answers[answer] !== answers.A) {
        // show q 2
        setSection1Ques((sq) => ({ ...sq, s1q2: { ...sq.s1q2, show: true } }));
      } else {
        // hide
        setSection1Ques((sq) => ({ ...sq, s1q2: { ...sq.s1q2, show: false } }));
      }

      if (answers[answer] !== answers.B) {
        // show q 3
        setSection1Ques((sq) => ({ ...sq, s1q3: { ...sq.s1q3, show: true } }));
      } else {
        // hide
        setSection1Ques((sq) => ({ ...sq, s1q3: { ...sq.s1q3, show: false } }));
      }
    }
  }, [section1Ques.s1q1.answer]);

  // check validations s1
  useEffect(() => {
    checkSection1Valid();
  }, [section1Ques]);

  // check s2 q1 answer to show or hide other ques
  useEffect(() => {
    if (section2Ques.s2q1.answer !== null) {
      let answer = section2Ques.s2q1.answer;
      let answers = section2Ques.s2q1.answers;
      if (answers[answer] === answers.A) {
        // show q 2
        setSection2Ques((sq) => ({ ...sq, s2q2: { ...sq.s2q2, show: true } }));
      } else {
        // hide
        setSection2Ques((sq) => ({ ...sq, s2q2: { ...sq.s2q2, show: false } }));
      }
    }
  }, [section2Ques.s2q1.answer]);

  // check validations s2
  useEffect(() => {
    checkSection2Valid();
  }, [section2Ques]);

  const updateSectionQues = (key, answer, secNum) => {
    if (secNum === 1) {
      setSection1Ques((sq) => ({ ...sq, [key]: { ...sq[key], answer } }));
    } else if (secNum === 2) {
      setSection2Ques((sq) => ({ ...sq, [key]: { ...sq[key], answer } }));
    }
  };

  const checkSection1Valid = () => {
    let isValid = true;
    Object.keys(section1Ques).forEach((key) => {
      if (section1Ques[key].show && !section1Ques[key].answer) {
        isValid = false;
      }
    });
    setSection1QuesValid(isValid);
  };

  const checkSection2Valid = () => {
    let isValid = true;
    Object.keys(section2Ques).forEach((key) => {
      if (section2Ques[key].show && !section2Ques[key].answer) {
        isValid = false;
      }
    });
    setSection2QuesValid(isValid);
  };

  const resetQues = () => {
    setSection1Ques(s1QuesInitial);
    setSection2Ques(s2QuesInitial);
    setSection1QuesValid(false);
    setSection2QuesValid(false);
    setMessage({ type: null, text: "" });
    setStep(1);
  };

  return (
    <QuesContext.Provider
      value={{
        step,
        section1Ques,
        section1QuesValid,
        section2Ques,
        section2QuesValid,
        message,
        setMessage,
        setStep,
        updateSectionQues,
        resetQues,
      }}
    >
      {props.children}
    </QuesContext.Provider>
  );
};

export { QuesContext, QuesState };
