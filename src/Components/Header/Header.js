import React from "react";

const Header = () => {
  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3">
        <div className="container-fluid">
          <a className="navbar-brand fst-italic" href="#">
            <h4>PrTrustCenter</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold">Latest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
