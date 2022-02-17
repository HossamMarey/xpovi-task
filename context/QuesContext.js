import { createContext, useEffect, useState } from "react";

const QuesContext = createContext();

const QuesState = (props) => {
  const [section1Ques, setSection1Ques] = useState({
    s1q1: {
      type: "q&a",
      title: "Is your business model B2C or B2B or both?",
      answers: { A: "A. B2C", B: "B. B2B", C: "C. both" },
      answer: null,
      show: true,
    },
    s1q2: {
      type: "q&a",
      title: "Do you target all age brackets?",
      answers: { A: "A. yes", B: "B. no" },
      answer: null,
      show: false,
    },
    s1q3: {
      type: "q&a",
      title: "Do you target all industries?",
      answers: { A: "A. yes", B: "B. no" },
      answer: null,
      show: false,
    },
  });

  const [section1QuesValid, setSection1QuesValid] = useState(false);

  // check q1 answer to show or hide other ques
  useEffect(() => {
    console.log({ section1Ques });
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

  // check validations
  useEffect(() => {
    console.log("check validations");
    checkSection1Valid();
  }, [section1Ques]);

  const updateSection1Ques = (key, answer) => {
    console.log(key, answer);

    setSection1Ques((sq) => ({ ...sq, [key]: { ...sq[key], answer } }));
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

  return (
    <QuesContext.Provider
      value={{ section1Ques, section1QuesValid, updateSection1Ques }}
    >
      {props.children}
    </QuesContext.Provider>
  );
};

export { QuesContext, QuesState };
