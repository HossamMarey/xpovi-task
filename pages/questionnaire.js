import MainHead from "@/components/Seo/MainHead";
import React from "react";
import MainLayout from "@/layouts/index";
import Ques from "@/components/Ques";
import { QuesState } from "@/context/QuesContext";

const Qujuestionnaire = () => {
  return (
    <MainLayout isHeader={false}>
      <MainHead title="Qujuestionnaire" />
      <QuesState>
        <Ques />
      </QuesState>
    </MainLayout>
  );
};

export default Qujuestionnaire;
