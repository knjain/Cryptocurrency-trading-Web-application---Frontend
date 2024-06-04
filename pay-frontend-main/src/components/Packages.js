import React from "react";
import './Packages.css'


const Packages = () => {
  return (
    <main className="main">
      <hl className="nain__heading">Pricing</hl>
      <div className="main__cards cards">
        <div className="cards_inner">
          <div className="cards__card card">
            <h2 className="card__heading">Basic</h2>
            <p className="card__price">$3.90</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a href="#basic" className="card__cta cta">
              Get Started
            </a>
          </div>

          <div className="cards__card card">
            <h2 className="card__heading">Pro</h2>
            <p className="card__price">$ </p>
            <ul role="list" className="card__bullets flow">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live</li>
            </ul>
            <a href="#pro" className="card cta cta">
              Upgrade to Pro
            </a>{" "}
          </div>

          <div className="cards___card card">
            <h2 className="card_heading">Ultimate</h2>
            <p className="card__price">$29.99</p>{" "}
            <ul role="list" className="card__bullets flow">
              <li>
                Access to all premium workouts and nutrition plans 24/7 Priority
                support
              </li>
              <li>1-on-1 virtual coaching session every month</li>{" "}
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a href="@ultimate" className="card_cta cta">
              Go Ultimate
            </a>
          </div>
        </div>
        <div className="overlay cards__Inner"></div>{" "}
      </div>
    </main>
  );
};

export default Packages;
