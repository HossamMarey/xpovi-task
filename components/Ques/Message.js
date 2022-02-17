import { QuesContext } from "@/context/QuesContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const Message = () => {
  const router = useRouter();
  const { message, setStep, resetQues } = useContext(QuesContext);

  const handleGoBack = () => {
    setStep("end");
  };
  const handleReset = () => {
    resetQues();
    router.push("/");
  };
  return (
    <div>
      {message && message.type && (
        <div className={"text-center alert alert-" + message.type} role="alert">
          {message.text}
        </div>
      )}

      <div className="mt-4 d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleReset}>
          Go Home
        </button>

        {message.type === "danger" && (
          <button className="btn btn-secondary ms-3" onClick={handleGoBack}>
            Go back
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;
