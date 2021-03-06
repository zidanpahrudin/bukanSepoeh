import React from "react";
import moon from "../assets/images/icons/moon.svg";

export default function Header() {
  return (
    <header style={{ display: "flex" }}>
      <h1>logo</h1>
      <button>
        dark mode <img src={moon} />
      </button>
    </header>
  );
}
