import reactDom from "react-dom";
import { post } from "./api";
import { Graphviz } from "graphviz-react";

let examples = [
  "abc|ade",
  "a*b|c+d",
  'NUM: DIGIT ("." DIGIT*)?;\nDIGIT: [0-9]; ',
];

async function process() {
  let input = document.getElementById("input").value;
  let type = document.getElementById("type-select");
  let select = document.getElementById("dfa-select");
  let i = select.selectedIndex;

  let opt = i === 1 || i === 3 ? "&opt=false" : "";
  let inputType = type.selectedIndex === 0 ? "regex" : "grammar";
  if (type.selectedIndex === 1) {
    input = "token{\n" + input + "\n}";
  }
  if (i === 0 || i === 1) {
    //FSM
    post(`/nfa?in=${inputType}&out=fsm${opt}`, input, (out) => {
      makeOutArea(out);
    });
  } else if (i === 2 || i === 3) {
    //dot
    post(`/nfa?in=${inputType}&out=dot${opt}`, input, (out) => {
      makeDot(out);
    });
  }
}

function makeDot(dot) {
  console.log(dot);
  let html = <Graphviz dot={dot} />;
  reactDom.render(html, document.getElementById("right"));
}

function makeOutArea(outText) {
  let old = document.getElementById("output");
  if (old !== null) {
    old.value = outText;
    return;
  }
  let outArea = (
    <textarea
      id="output"
      style={{ width: "50%", height: "400px", marginTop: "20px" }}
      defaultValue={outText}
    />
  );
  reactDom.render(outArea, document.getElementById("right"));
}

function onExampleChange(e) {
  let input = document.getElementById("input");
  input.value = examples[e.target.selectedIndex];

  let type = document.getElementById("type-select");
  if (e.target.selectedIndex === 0) {
    //simple regex
    type.selectedIndex = 0;
  } else if (e.target.selectedIndex === 1) {
    //complex regex
    type.selectedIndex = 0;
  } else if (e.target.selectedIndex === 2) {
    //simple grammar
    type.selectedIndex = 1;
  }
}

function DFA() {
  //draw nfa,draw dfa,nfa,dfa
  return (
    <>
      <div id="left" style={{ width: "30%", float: "left" }}>
        <div>
          <label htmlFor="type-select">Choose input type:</label>
          <select id="type-select" style={{ margin: "10px" }}>
            <option>regex</option>
            <option>grammar</option>
          </select>
        </div>
        <div>
          <label htmlFor="example-select">Examples:</label>
          <select
            id="example-select"
            onChange={onExampleChange}
            style={{ margin: "10px" }}
          >
            <option>simple regex</option>
            <option>complex regex</option>
            <option>simple grammar</option>
          </select>
        </div>
        <textarea
          id="input"
          style={{
            width: "300px",
            height: "400px",
            border: "solid 1px",
            marginTop: "10px",
          }}
          defaultValue={examples[0]}
        />

        <div style={{ margin: "5px" }}>
          <select id="dfa-select">
            <option>NFA</option>
            <option>DFA</option>
            <option>draw NFA</option>
            <option>draw DFA</option>
          </select>

          <button onClick={process} style={{ margin: "5px" }}>
            process
          </button>
        </div>
      </div>
      <div id="right"></div>
    </>
  );
}

export default DFA;
