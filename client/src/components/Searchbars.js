import React from 'react';
const inputs = ["Search", "startYear", "endYear"]

// Contains search bars for: Topic, Start year, End Year, . Use AJAX or Axios to perform the HTTP request.

// Needs "Search" at top, and a "Search" at the bottom of the div.


export const Input = props =>
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>;

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>;
