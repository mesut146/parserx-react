import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


function prepare(input) {
  var out = "";
  var cur = "";
  for (let ch in input) {
    if (ch === " ") {
      if (cur.length > 0) {
        out += ' "' + cur + '"';
        cur = "";
      }
    } else {
      cur += ch;
    }
  }
  if (cur.length > 0) {
    out += ' "' + cur + '"';
  }
  return out;
}
