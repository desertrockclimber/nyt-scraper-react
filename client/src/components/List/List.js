// Returns a list of articles.

import React from "react";
import "../../../styleSheets/List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
        { searchButton }
      </ul>
    </div>
  );
};