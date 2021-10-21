import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//React.StrictMode
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
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
