import React from "react";
import { Header } from "./card/Header";
import { Biodata } from "./card/Biodata";
import { Identity } from "./card/Identity";
import { Highlight } from "./card/Highlight"

export const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
};
