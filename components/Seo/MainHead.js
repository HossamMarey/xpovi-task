import React from "react";
import Head from "next/head";

const MainHead = ({ title, description, keywords, icon }) => {
  return (
    <Head>
      <title>{title ? title + " | " : ""} Xpovi</title>
      <meta
        name="description"
        content={description ? description : "default description"}
      />
      <meta
        name="keywords"
        content={keywords ? keywords : "default keywords"}
      />

      <link rel="icon" href={icon ? icon : "/icon.png"} />
    </Head>
  );
};

export default MainHead;
