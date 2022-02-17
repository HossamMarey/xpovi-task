/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header__logo">
            <img src="/icon.png" alt="logo" />
            <div className="fs-4 fw-bold">Xpovi</div>
          </div>
          <div className="header__cta">
            <button className="btn btn-primary">Join Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
