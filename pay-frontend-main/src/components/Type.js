import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Profit Potential, Expertise, Investor's Advantage",
          "Smart Money Moves, Market Mastery, Investor Success",
          "Wealth Creation, Strategic Investing, Investor's Edge",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
