/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <h1 className="hero__title">Lorem ipsum dolor sit.</h1>
            <h2 className="hero__subtitle">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium autem perferendis dicta.
            </p>
            <Link href="/questionnaire">
              <button className="btn btn-primary btn-lg px-6">
                generate business plan
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
