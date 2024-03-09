import React from "react";
import { Badge } from "./Badge";
export const Highlight = () => {
  return (
    <div className="buttons">
      <Badge text='💻 Code' />
      <Badge text='🎹 Music' />
      <Badge text='🖼️ Design' />
    </div>
  );
};
